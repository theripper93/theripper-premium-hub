Hooks.on("ready", async () => {
    if (game.settings.get("theripper-premium-hub", "cleanHeaderButtons")) {
        libWrapper.register("theripper-premium-hub", "Application.prototype._renderOuter", async function (wrapped, ...args) {
            const html = await wrapped(...args);
            setTimeout(() => {
                const header = html.find(".window-header")[0];
                if (!header) return;
                header.querySelectorAll(".header-button").forEach((button) => {
                    const innerText = button.innerText.trim();
                    if (innerText) {
                        button.dataset.tooltip = button.innerText;
                        button.dataset.tooltipDirection = "UP";
                        button.innerHTML = button.innerHTML.replace(innerText, "");
                    }
                });
            }, 1);
            return html;
        });
    }

    if (!game.user.isGM) return;
    game.theripperpremiumhub = new TheRipperPremiumHUB();
});
