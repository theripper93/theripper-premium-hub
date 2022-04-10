class TheRipperPremiumHUB {
  constructor() {
    this.outdatedModules = {};
    this._debug = false;
    this.init();
  }

  async init() {
    this.moduleData = await this.fetchData();
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
      if (!checkDisabled && !installedModule?.active) continue;
      if (isNewerVersion(v.version, installedModule.data.version) || this._debug) {
        this.outdatedModules[k] = v;
        this.outdatedModules[k].title = installedModule.data.title;
        this.outdatedModules[k].currentVersion = installedModule.data.version;
      }
    }
  }

  async displayOutdated(notify = false) {
    if (Object.keys(this.outdatedModules).length === 0)
      return notify
        ? ui.notifications.info(`No outdated modules found.`)
        : null;
    const html = await renderTemplate(
      "modules/theripper-premium-hub/templates/modlist.hbs",
      this.outdatedModules
    );
    Dialog.prompt({
      title: "TheRipper93 Premium HUB - Updates Available!",
      content: html,
      rejectClose: false,
      callback: () => {},
      close: () => {},
    });
  }

  async displayAnnouncements() {
    const announcements = this.moduleData.announcements;
    if (!announcements){
      this.announcementsHtml = "" 
      return;
    }
    const ids = Object.keys(announcements);
    const viewedAnnouncements = game.settings.get("theripper-premium-hub", "viewedAnnouncements") ?? "";
    const allViewed = ids.every(id => viewedAnnouncements.includes(id));
    const html = await renderTemplate(
      "modules/theripper-premium-hub/templates/announcements.hbs",
      announcements
    );
    this.announcementsHtml = html;
    if (allViewed) return;
    game.settings.set("theripper-premium-hub", "viewedAnnouncements", ids.join(","));
    Dialog.prompt({
      title: "TheRipper93 Premium HUB - Announcement!",
      content: html,
      rejectClose: false,
      callback: () => {},
      close: () => {},
    });
  }

  async fetchData() {
    return await fetch(
      `https://raw.githubusercontent.com/theripper93/theripper-premium-hub/master/moduleListing.json`, { cache: "no-cache" }
    )
      .then((response) => response.json())
      .then((data) => data);
  }

  _getdataforfile() {
    const mods = {};
    game.modules.forEach((v, k) => {
      if(v.data.authors && v.data.authors.some(a => a.name === "theripper93") && (!v.data?.download || v.data?.url === "https://github.com/theripper93/name")){
        mods[k] = {
          title: v.data.title,
          version: v.data.version,
          downloadURL: this.moduleData[k]?.downloadURL ?? ""
        };
      }
    });
    return mods;
  }
}