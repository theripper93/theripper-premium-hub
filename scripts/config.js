Hooks.on("init", () => {
    game.settings.register("theripper-premium-hub", "autoCheck", {
      name: "Check for Updates on Startup",
      hint: "Automatically check on world load if any of my premium modules have updates.",
      scope: "world",
      config: true,
      type: Boolean,
      default: true,
    });

    game.settings.register("theripper-premium-hub", "checkDisabled", {
      name: "Check Modules not Enabled",
      hint: "Check for updates on modules that are installed but not enabled.",
      scope: "world",
      config: true,
      type: Boolean,
      default: true,
    });
});

Hooks.on("renderSettingsConfig", (app, html, data) => {
  const menuSetting = html.find(`input[name="theripper-premium-hub.checkDisabled"]`).closest(".form-group");
  const button = $(`
  <div class="form-group">
  <a style="text-align: center;" href="https://theripper93.com/" target="_blank" rel="nofollow" title="https://theripper93.com/"><i class="fas fa-globe"></i> Visit my Website</a>
      <button type="button">
          <i class="fas fa-cogs"></i>
          <label>Check for Updates</label>
      </button>
      
  </div>
  `);
  button.find("button").click((e) => {
    e.preventDefault();
    game.theripperpremiumhub.displayOutdated(true)
  })
  menuSetting.after(button);
})