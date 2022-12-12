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

    game.settings.register("theripper-premium-hub", "viewedAnnouncements", {
      scope: "world",
      config: false,
      type: String,
      default: "",
    });

    game.settings.register("theripper-premium-hub", "viewedUpdates", {
      scope: "world",
      config: false,
      type: Object,
      default: {},
    });
});

Hooks.on("renderSettingsConfig", (app, html, data) => {
  if(!game.user.isGM) return;

  //Add wiki buttons

  html[0].querySelectorAll(".tab.category").forEach((el) => {
    const moduleId = el.getAttribute("data-tab");
    const module = game.modules.get(moduleId);
    if(!module) return;
    if(!Array.from(module.authors).some(a => a.name === "theripper93")) return;
    const title = el.querySelector("h2");
    const wikiButton = document.createElement("a");
    wikiButton.style.marginLeft = "0.5rem";
    wikiButton.classList.add("wiki-button");
    const status = module.download ? "paid" : "free";
    wikiButton.setAttribute("href", `https://api.theripper93.com/modulewiki/${moduleId}/${status}`);
    wikiButton.setAttribute("target", "_blank");
    wikiButton.innerHTML = `<i data-tooltip="Open Documentation" class="fas fa-book"></i>`;
    title.appendChild(wikiButton);
  });



  const menuSetting = html.find(`input[name="theripper-premium-hub.checkDisabled"]`).closest(".form-group");
  const button = $(`
  ${game.theripperpremiumhub.announcementsHtml}
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