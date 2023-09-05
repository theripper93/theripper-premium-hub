class TheRipperPremiumHUB {
  constructor() {
    this.outdatedModules = {};
    this.announcementsHtml = ""
    this._debug = false;
    this.init();
  }

  async init() {
    this.moduleData = await this.fetchData();
    this.announcements = this.moduleData.announcements;
    delete this.moduleData.announcements;
    this.getOutdatedModules();
    if (game.settings.get("theripper-premium-hub", "autoCheck")) {
      this.displayOutdated(false);
    }
    this.displayAnnouncements();
  }

  getOutdatedModules() {
    const checkDisabled = game.settings.get(
      "theripper-premium-hub",
      "checkDisabled"
    );
    for (let [k, v] of Object.entries(this.moduleData)) {
      const installedModule = game.modules.get(k);
      if(!installedModule) continue;
      if (!checkDisabled && !installedModule?.active) continue;
      if (isNewerVersion(v.version, installedModule.version) || this._debug) {
        this.outdatedModules[k] = v;
        this.outdatedModules[k].title = installedModule.title;
        this.outdatedModules[k].currentVersion = installedModule.version;
      }
    }
  }

  async displayOutdated(notify = false) {
    if (Object.keys(this.outdatedModules).length === 0)
      return notify
        ? ui.notifications.info(`No outdated modules found.`)
        : null;
    let displayUpdated = {}
    if(!notify) {
      const viewedUpdates = game.settings.get("theripper-premium-hub", "viewedUpdates");
      for(let [k, v] of Object.entries(this.outdatedModules)) {
        if(viewedUpdates[k] && v.version === viewedUpdates[k]) continue;
        displayUpdated[k] = v;
      }
    }else{
      displayUpdated = this.outdatedModules;
    }
    if (Object.keys(displayUpdated).length === 0) return null;
    const html = await renderTemplate(
      "modules/theripper-premium-hub/templates/modlist.hbs",
      displayUpdated
    );
    Dialog.prompt({
      title: "TheRipper93 Premium HUB - Updates Available!",
      content: html,
      rejectClose: false,
      callback: () => {
        const viewedUpdates = game.settings.get("theripper-premium-hub", "viewedUpdates");
        for(let [k, v] of Object.entries(this.outdatedModules)){
          viewedUpdates[k] = v.version;
        }
        game.settings.set("theripper-premium-hub", "viewedUpdates", viewedUpdates);
      },
      close: () => {},
    });
  }

  async displayAnnouncements() {
    const announcements = this.announcements;
    if (!announcements) return;
    const ids = Object.keys(announcements);
    const viewedAnnouncements = game.settings.get("theripper-premium-hub", "viewedAnnouncements") ?? "";
    const allViewed = ids.every(id => viewedAnnouncements.includes(id));
    const html = await renderTemplate(
      "modules/theripper-premium-hub/templates/announcements.hbs",
      announcements
    );
    this.announcementsHtml = html;
    if (allViewed && !this._debug) return;
    game.settings.set("theripper-premium-hub", "viewedAnnouncements", ids.join(","));
    Dialog.prompt({
      title: "TheRipper93 Premium HUB - Announcement!",
      content: html + `    <p style="text-align: center;">Want to support me and get access to premium modules?</p><hr>
      <p style="text-align: center;"><a href="https://theripper93.com/" target="_blank" rel="nofollow" title="https://theripper93.com/">Check out my Website</a></p>`,
      rejectClose: false,
      callback: () => {},
      close: () => {},
    });
  }

  async fetchData() {
    return await fetch(
      `https://api.theripper93.com/moduleListing/latest`, { cache: "no-cache" }
    )
      .then((response) => response.json())
      .then((data) => data);
  }

  _getdataforfile() {
    const mods = {};
    game.modules.forEach((v, k) => {
      if(v.authors && v.authors.some(a => a.name === "theripper93") && (!v.data?.download || v.data?.url === "https://github.com/theripper93/name")){
        mods[k] = {
          title: v.title,
          version: v.version,
          downloadURL: this.moduleData[k]?.downloadURL ?? ""
        };
      }
    });
    return mods;
  }

  getDependencies(moduleId) {
    const rootModule = game.modules.get(moduleId);
    const dependencies = new Set();
    const addDependecies = (module) => {
      const moduleDependencies = Array.from(module.relationships.requires).map((m) => game.modules.get(m.id));
      moduleDependencies.forEach((m) => {
        dependencies.add(m);
        addDependecies(m);
      });
    };
    addDependecies(rootModule);
    return dependencies;
  }

  async troubleshoot(moduleId) {
    console.log(moduleId);
    const confirm = await Dialog.confirm({
      title: "TheRipper93 Premium HUB - Troubleshoot",
      content: `<p>Do you want to start the troubleshoot for ${game.modules.get(moduleId).title}?</p><br><p>This will disable all modules except the one you selected and its dependencies. You will be prompted to restore your modules after the troubleshoot.</p>`,
      yes: () => {
        return true;
      },
      no: () => {
        return false;
      },
    });
    if (!confirm) return;
    const dependencies = this.getDependencies(moduleId);
    const dependenciesIds = [...Array.from(dependencies).map((m) => m.id) ,moduleId,"theripper-premium-hub"];
    const modulesSetting = game.settings.get("core", ModuleManagement.CONFIG_SETTING);
    const currentlyEnabled = [];
    for (let [k, v] of Object.entries(modulesSetting)) {
      if (v) currentlyEnabled.push(k);
      if (dependenciesIds.includes(k)) continue;
      modulesSetting[k] = false;
    }
    await game.settings.set("theripper-premium-hub", "prevEnabledModules", currentlyEnabled);
    await game.settings.set("core", ModuleManagement.CONFIG_SETTING, modulesSetting);
    debouncedReload();
  }
}
