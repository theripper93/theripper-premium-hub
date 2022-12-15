class ModuleInstaller extends FormApplication{
    constructor() {
        super();
      }
    
      static get defaultOptions() {
        return {
          ...super.defaultOptions,
          title: 'Module Installer',
          id: "tph-module-installer",
          template: "modules/theripper-premium-hub/templates/moduleInstaller.hbs",
          resizable: false,
          width: 300,
          height: 400,
          dragDrop: [{ dragSelector: null, dropSelector: null }],
        };
      }

      getData() {
        const data = {...game.theripperpremiumhub.moduleData};
        delete data["megapack"];
        const sorted = Object.entries(data).sort((a, b) => a[1].title.localeCompare(b[1].title));
        const moduleData = {};
        for(let module of sorted){
          moduleData[module[0]] = module[1];
        }
        return {
            moduleData
        }
      }

      async onSubmit(formData) {
        if(!formData.secret) return ui.notifications.error("Please enter a secret token to continue.");
        const secret = formData.secret;
        for(let [k, v] of Object.entries(formData)) {
          if(v === true) {
            await this.installModule(k, secret);
          }
        }
        ui.notifications.info("All selected modules have been installed.");
      }

      async installModule(moduleId, secretToken){
    
        const data = await fetch(`https://api.theripper93.com/manifest/${moduleId}/${secretToken}/installer`).then(response => response.json());
    
        try{
          await FilePicker.createDirectory("data", `modules/${moduleId}`);
        }catch(e){}
    
        let blob = new Blob([JSON.stringify(data)], {
          type: 'text/plain'
        })
        let file = new File([blob], "module.json", { type: "text" });
        await FilePicker.upload("data", `modules/${moduleId}`, file, {});
    
        ui.notifications.info(`Module ${moduleId} installer created, please return to the setup screen and update the installer to install the module.`);
    }

      _updateObject (event, formData) {
        this.onSubmit(expandObject(formData))
      }
}