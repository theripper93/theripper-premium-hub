import {FormBuilder} from "../lib/formBuilder.js";
import {l} from "../lib/utils.js";
import { MODULE_ID } from "../main";
import {applyCompactSidebar} from "../tweaks/compactSidebar.js";
import {applyDiceTrayTweaks} from "../tweaks/diceTray.js";
import {applyCSSTweaks} from "../tweaks/loadCss.js";
import {updateRegisterWrapper} from "../tweaks/worldToClient.js";

export function registerTweaksMenu() {
    new FormBuilder().title(`${MODULE_ID}.tweaks-menu.title`)
        .tab({id: "misc", label: `${MODULE_ID}.tweaks-menu.tabs.misc`, icon: "fas fa-wrench"})
        .checkbox({
            name: "cleanHeaderButtons",
            label: `${MODULE_ID}.tweaks-menu.cleanHeaderButtons.name`,
            hint: `${MODULE_ID}.tweaks-menu.cleanHeaderButtons.hint`,
            value: false,
        })
        .checkbox({
            name: "compactSidebar",
            label: `${MODULE_ID}.tweaks-menu.compactSidebar.name`,
            hint: `${MODULE_ID}.tweaks-menu.compactSidebar.hint`,
            value: false,
        })
        .checkbox({
            name: "enableSettingsSwap",
            label: `${MODULE_ID}.tweaks-menu.enableSettingsSwap.name`,
            hint: `${MODULE_ID}.tweaks-menu.enableSettingsSwap.hint`,
            value: false,
        })
        .checkbox({
            name: "diceTray",
            label: `${MODULE_ID}.tweaks-menu.diceTray.name`,
            hint: `${MODULE_ID}.tweaks-menu.diceTray.hint`,
            value: false,
        })
        .tab({id: "startup-macros", label: `${MODULE_ID}.tweaks-menu.tabs.startup-macros`, icon: "fas fa-magic"})
        .uuid({
            name: "readyMacros",
            label: `${MODULE_ID}.tweaks-menu.readyMacros.name`,
            hint: `${MODULE_ID}.tweaks-menu.readyMacros.hint`,
            multiple: true,
            type: "Macro",
            value: [],
        })
        .tab({id: "css-tweaks", label: `${MODULE_ID}.tweaks-menu.tabs.css-tweaks`, icon: "fas fa-palette"})
        .textArea({
            name: "cssTweak0",
            label: `${MODULE_ID}.tweaks-menu.cssTweak.name`,
        })
        .textArea({
            name: "cssTweak1",
            label: `${MODULE_ID}.tweaks-menu.cssTweak.name`,
        })
        .textArea({
            name: "cssTweak2",
            label: `${MODULE_ID}.tweaks-menu.cssTweak.name`,
        })
        .registerAsMenu({
            moduleId: MODULE_ID,
            key: "tweaks",
            name: `${MODULE_ID}.tweaks-menu.title`,
            label: `${MODULE_ID}.tweaks-menu.label`,
            hint: `${MODULE_ID}.tweaks-menu.hint`,
            icon: "fas fa-tools",
            scope: "world",
            defaultValue: {},
        });
}

export function onUpdateTweaksMenu() {
    applyCSSTweaks();
    applyCompactSidebar();
    updateRegisterWrapper();
    applyDiceTrayTweaks();
}