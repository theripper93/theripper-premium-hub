import { onUpdateTweaksMenu } from "../app/tweaksMenu.js";
import { MODULE_ID } from "../main.js";
import { getSetting, setSetting } from "../settings.js";

const ALLOW_WORLD_TO_CLIENT = false;

const ALTERED_SETTING_IDS = [];

let registered = false;

let originalRegisterSetting;

export function initWorldToClient() {
    originalRegisterSetting = ClientSettings.prototype.register;

    wrapRegister();

    Hooks.once("ready", () => {
        initConfig();
    });
}

export function updateRegisterWrapper(wrap) {
    if (wrap === undefined) wrap = getSetting("tweaks").enableSettingsSwap;
    if (wrap) {
        wrapRegister();
    } else {
        unwrapRegister();
    }
}

function registerFirst() {
    if (registered) return;
    registered = true;
    this.register(MODULE_ID, "ctwConfiguration", {
        scope: "world",
        config: false,
        default: {},
        type: Object,
    });
    this.register(MODULE_ID, "tweaks", {
        scope: "world",
        config: false,
        default: {},
        type: Object,
        onChange: (value) => {
            onUpdateTweaksMenu();
        },
    });
    updateRegisterWrapper();
}

function wrapRegister() {
    ClientSettings.prototype.register = function (...args) {
        try {
            registerFirst.call(this);
            const [namespace, key, data] = args;
            if (namespace === MODULE_ID) return originalRegisterSetting.call(this, ...args);
            const configuration = getSetting("ctwConfiguration");
            if (configuration[namespace + key] && configuration[namespace + key] !== data.scope) {
                data.scope = configuration[namespace + key];
                ALTERED_SETTING_IDS.push(namespace + "." + key);
            }
            return originalRegisterSetting.call(this, ...args);
        } catch (error) {
            console.error(error);
            return originalRegisterSetting.call(this, ...args);
        }
    };
}

function unwrapRegister() {
    ClientSettings.prototype.register = originalRegisterSetting;
}

function initConfig() {
    if (!game.user.isGM) return;
    Hooks.on("renderSettingsConfig", (app, html) => {
        if (!getSetting("tweaks").enableSettingsSwap) return;
        const element = html[0] ?? html;

        const settingsFormGroups = element.querySelectorAll(".form-group[data-setting-id]");

        settingsFormGroups.forEach((formGroup) => {
            const settingId = formGroup.dataset.settingId;
            if (!settingId) return;
            const setting = game.settings.settings.get(settingId);
            if (!setting) return;
            const altered = ALTERED_SETTING_IDS.includes(settingId);
            const originalScope = altered ? (setting.scope === "world" ? "client" : "world") : setting.scope;
            if (originalScope === "world" && !ALLOW_WORLD_TO_CLIENT) {
                const worldIcon = document.createElement("label");
                worldIcon.innerText = "🌎";
                worldIcon.style.marginRight = "0.3rem";
                worldIcon.style.maxWidth = "1rem";
                formGroup.prepend(worldIcon);
                return;
            }
            const select = document.createElement("select");
            select.style.maxWidth = "3rem";
            select.style.marginRight = "0.3rem";
            if (altered) select.style.border = "2px dotted var(--color-shadow-primary)";
            const worldOption = document.createElement("option");
            worldOption.value = "world";
            worldOption.text = "🌎";
            worldOption.selected = setting.scope === "world";
            select.appendChild(worldOption);
            const clientOption = document.createElement("option");
            clientOption.value = "client";
            clientOption.text = "👤";
            clientOption.selected = setting.scope === "client";
            select.appendChild(clientOption);
            const label = formGroup.querySelector("label");
            formGroup.prepend(select);
            select.addEventListener("change", (event) => {
                const value = event.target.value;
                const configuration = getSetting("ctwConfiguration");
                configuration[settingId.replace(".", "")] = value;
                setSetting("ctwConfiguration", configuration);
                ui.notifications.info(game.i18n.localize(`${MODULE_ID}.wtcNotification`).replace("{setting}", label.textContent).replace("{value}", value));
            });
        });
    });
}
