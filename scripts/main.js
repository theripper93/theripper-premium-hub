import { TheRipperPremiumHUB } from "./app/TheRipperPremiumHUB.js";
import { registerTweaksMenu } from "./app/tweaksMenu.js";
import { initConfig } from "./config.js";
import { showWelcome } from "./lib/welcome.js";
import { registerSettings } from "./settings.js";
import { runInitMacros, runReadyMacros } from "./tweaks/autorunMacros.js";
import { registerCleanHeaderButtons } from "./tweaks/cleanHeaderButtons.js";
import {applyCompactSidebar} from "./tweaks/compactSidebar.js";
import {applyCSSTweaks} from "./tweaks/loadCss.js";
import { reEnableModules } from "./tweaks/troubleshooter.js";

export const MODULE_ID = "theripper-premium-hub";

export const API = {};

Hooks.on("init", () => {
    registerSettings();
    registerTweaksMenu();
    registerCleanHeaderButtons();
    applyCSSTweaks();
    applyCompactSidebar();
});

Hooks.on("ready", () => {
    showWelcome();
    initConfig();
    runReadyMacros();

    if (!game.user.isGM) return;
    reEnableModules();
    API.hub = new TheRipperPremiumHUB();
});
