import { MODULE_ID, API } from "./main.js";

import { prompt } from "./lib/utils.js";

export function initConfig() {
    if (!game.user.isGM) return;

    Hooks.on("renderSettingsConfig", (app, html, data) => {
        const element = html[0];

        async function generateSupportReport(moduleId) {
            const supportInfo = await SupportDetails.generateSupportReport();
            const supportOutput = {
                "Core Version": supportInfo.coreVersion,
                System: supportInfo.systemVersion,
                Client: supportInfo.client,
                GPU: supportInfo.gpu,
                "Module Count": supportInfo.activeModuleCount,
            };
            const module = game.modules.get(moduleId);
            supportOutput[module.title] = module.version;
            const dependencies = API.hub.getDependencies(moduleId);
            dependencies.forEach((m) => {
                supportOutput[m.title] = m.version;
            });

            const tableHtml = Object.keys(supportOutput)
                .map((key) => {
                    return `<tr><td>${key}</td><td>${supportOutput[key]}</td></tr>`;
                })
                .join("");
            const html = `<table style="margin:0;padding:0;">${tableHtml}</table>`;

            await prompt("Support Report", html, {
                buttons: [
                    {
                        label: "Copy to Clipboard",
                        action: "clipboard",
                        icon: "fas fa-clipboard",
                        callback: () => {
                            const text = Object.entries(supportOutput)
                                .map(([k, v]) => `${k}: ${v}`)
                                .join("\n");
                            game.clipboard.copyPlainText("```" + text + "```");
                            ui.notifications.info("Copied to Clipboard, please paste it along with your support request on discord.");
                        },
                    },
                ],
            });
        }

        //Add wiki buttons

        element.querySelectorAll(".tab.category").forEach((el) => {
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
                API.hub.troubleshoot(moduleId);
            });
            title.appendChild(troubleshootButton);
        });

        const menuSetting = element.querySelector(`input[name="theripper-premium-hub.checkDisabled"]`).closest(".form-group");
        const container = document.createElement("div");
        container.innerHTML = `
      ${API.hub.announcementsHtml}
      <div class="form-group">
      <a style="text-align: center;" href="https://theripper93.com/" target="_blank" rel="nofollow" title="https://theripper93.com/"><i class="fas fa-globe"></i> Visit my Website</a>
          <button type="button">
              <i class="fas fa-cogs"></i>
              <label>Check for Updates</label>
          </button>
      </div>
      `;
        container.querySelector("button").addEventListener("click", (e) => {
            e.preventDefault();
            API.hub.displayOutdated(true);
        });
        menuSetting.after(container);

        element.querySelectorAll(".item.category-tab").forEach((el) => {
            const modId = el.dataset.tab;
            const outdated = API.hub.outdatedModules[modId];
            if (!outdated) return;
            el.innerHTML = el.innerHTML.replace(outdated.title, `<span><i style="color: var(--color-level-warning)" class="fas fa-circle-info"></i> ${outdated.title}</span>`);
            el.dataset.tooltip = game.i18n.format("SETUP.UpdateAvailable", { channel: outdated.title, version: outdated.version });
        });
    });
}
