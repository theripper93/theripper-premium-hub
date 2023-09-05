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

    game.settings.register("theripper-premium-hub", "prevEnabledModules", {
        scope: "world",
        config: false,
        type: Array,
        default: [],
    });
    const prevEnabledModules = game.settings.get("theripper-premium-hub", "prevEnabledModules");
  async function reEnableModules() {
        if (game.user.isGM && prevEnabledModules.length > 0) {
            const confirm = await Dialog.confirm({
                title: "TheRipper93 Premium HUB",
                content: "Would you like to re-enable your previously enabled modules?<br>Choose 'No' to disable this prompt, you will have to manually re-enable modules in the module management menu.<br>Close this prompt to be asked again on next refresh.",
                yes: () => {
                    return true;
                },
                no: () => {
                    return false;
                },
                defaultYes: true,
            });
          if(confirm === false) await game.settings.set("theripper-premium-hub", "prevEnabledModules", []);
            if (!confirm) return;
            const modulesSetting = game.settings.get("core", ModuleManagement.CONFIG_SETTING);
            for (const [k, v] of Object.entries(modulesSetting)) {
                if (prevEnabledModules.includes(k)) {
                    modulesSetting[k] = true;
                }
            }
            await game.settings.set("theripper-premium-hub", "prevEnabledModules", []);
            await game.settings.set("core", ModuleManagement.CONFIG_SETTING, modulesSetting);
            debouncedReload();
        }
  }
  Hooks.once("ready", () => {
    reEnableModules();
  });
});

Hooks.on("renderSettingsConfig", (app, html, data) => {
    if (!game.user.isGM) return;

    function generateSupportReport(moduleId) {
        const supportInfo = SupportDetails.generateSupportReport();
        const supportOutput = {
            "Core Version": supportInfo.coreVersion,
            System: supportInfo.systemVersion,
            Client: supportInfo.client,
            GPU: supportInfo.gpu,
            "Module Count": supportInfo.activeModuleCount,
        };
        const module = game.modules.get(moduleId);
        supportOutput[module.title] = module.version;
        const dependencies = game.theripperpremiumhub.getDependencies(moduleId);
        dependencies.forEach((m) => {
            supportOutput[m.title] = m.version;
        });

        const tableHtml = Object.keys(supportOutput)
            .map((key) => {
                return `<tr><td>${key}</td><td>${supportOutput[key]}</td></tr>`;
            })
            .join("");
        const html = `<table>${tableHtml}</table>`;

        Dialog.prompt({
            title: "Support Report",
            content: html,
            label: "Copy to Clipboard",
            callback: (html) => {
                const text = Object.entries(supportOutput)
                    .map(([k, v]) => `${k}: ${v}`)
                    .join("\n");
                game.clipboard.copyPlainText("```" + text + "```");
                ui.notifications.info("Copied to Clipboard, please paste it along with your support request on discord.");
            },
        });
    }

    //Add wiki buttons

    html[0].querySelectorAll(".tab.category").forEach((el) => {
        const moduleId = el.getAttribute("data-tab");
        const module = game.modules.get(moduleId);
        if (!module) return;
        if (!Array.from(module.authors).some((a) => a.name === "theripper93")) return;
        const title = el.querySelector("h2");
        title.style.display = "flex";
        const wikiButton = document.createElement("a");
        wikiButton.style.marginLeft = "auto";
        wikiButton.classList.add("wiki-button");
        const status = module.download ? "free" : "paid";
        wikiButton.setAttribute("href", `https://api.theripper93.com/modulewiki/${moduleId}/${status}`);
        wikiButton.setAttribute("target", "_blank");
        wikiButton.innerHTML = `<i data-tooltip="Open Documentation" class="fas fa-book"></i>`;
        title.appendChild(wikiButton);

        const supportButton = document.createElement("a");
        supportButton.style.marginLeft = "0.5rem";
        supportButton.classList.add("wiki-button");
        supportButton.innerHTML = `<i data-tooltip="Generate Support Report" class="fas fa-question-circle"></i>`;
        supportButton.addEventListener("click", (e) => {
            e.preventDefault();
            generateSupportReport(moduleId);
        });
        title.appendChild(supportButton);

        const troubleshootButton = document.createElement("a");
        troubleshootButton.style.marginLeft = "0.5rem";
        troubleshootButton.classList.add("wiki-button");
        troubleshootButton.innerHTML = `<i data-tooltip="Troubleshoot" class="fas fa-tools"></i>`;
        troubleshootButton.addEventListener("click", (e) => {
            e.preventDefault();
            game.theripperpremiumhub.troubleshoot(moduleId);
        });
        title.appendChild(troubleshootButton);
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
        game.theripperpremiumhub.displayOutdated(true);
    });
    menuSetting.after(button);
});
