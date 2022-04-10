Hooks.on("init", () => {
    game.settings.register("theripper-premium-hub", "autoCheck", {
      name: "Check for Updates on Startup",
      hint: "Automatically check on world load if any of my premium modules have updates.",
      scope: "world",
      config: true,
      type: Boolean,
      default: true,
    });
});

Hooks.on("renderSettingsConfig", (app, html, data) => {
  const menuSetting = html.find(`input[name="theripper-premium-hub.autoCheck"]`).closest(".form-group");
  const button = $(`
  <div class="form-group">
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