class TheRipperPremiumHUB{
    constructor() {
      this.outdatedModules = {};
      this.init();
    }

    async init() {
      this.moduleData = await this.fetchData();
      this.getOutdatedModules();
      if(game.settings.get("theripper-premium-hub", "autoCheck")){
        this.displayOutdated(false);
      }
    }

    getOutdatedModules() {
      for(let [k,v] of Object.entries(this.moduleData)){
        const installedModule = game.modules.get(k);
        if(!installedModule?.active) continue;
        if(isNewerVersion(v.version, installedModule.data.version)){
          this.outdatedModules[k] = v;
          this.outdatedModules[k].title = installedModule.data.title;
          this.outdatedModules[k].currentVersion = installedModule.data.version;
        }
      }
    }

    async displayOutdated(notify = false) {
      if(Object.keys(this.outdatedModules).length === 0) return notify ? ui.notifications.info(`No outdated modules found.`) : null;
      const html = await renderTemplate("modules/theripper-premium-hub/templates/modlist.hbs", this.outdatedModules);
      Dialog.prompt({
        title: "TheRipper93 Premium HUB - Updates Available!",
        content: html,
        callback : () => {},
      })
    }

    async fetchData() {
        return await fetch(
          `https://raw.githubusercontent.com/theripper93/theripper-premium-hub/master/moduleListing.json`
        )
          .then((response) => response.json())
          .then((data) => data);
    }


}