import {MODULE_ID} from "./main.js";

const SETTING_CACHE = {};
const DEFAULT_CACHE = false;

export function registerSettings() {
    const settings = {
        autoCheck: {
            scope: "world",
            config: true,
            type: Boolean,
            default: true,
        },
        checkDisabled: {
            scope: "world",
            config: true,
            type: Boolean,
            default: false,
        },
        viewedAnnouncements: {
            scope: "world",
            config: false,
            type: Array,
            default: "",
        },
        viewedUpdates: {
            scope: "world",
            config: false,
            type: Object,
            default: {},
        },
        prevEnabledModules: {
            scope: "world",
            config: false,
            type: Array,
            default: [],
        },
        lastGitCheck: {
            scope: "world",
            config: false,
            type: Number,
            default: 0,
        },
    };

    registerSettingsArray(settings);
}

export function getSetting(key) {
    return SETTING_CACHE[key] ?? game.settings.get(MODULE_ID, key);
}

export async function setSetting(key, value) {
    return await game.settings.set(MODULE_ID, key, value);
}

function registerSettingsArray(settings) {
    for (const [key, value] of Object.entries(settings)) {
        if (!value.name) value.name = `${MODULE_ID}.settings.${key}.name`
        if (!value.hint) value.hint = `${MODULE_ID}.settings.${key}.hint`
        if (value.useCache === undefined) value.useCache = DEFAULT_CACHE;
        if (value.useCache) {
            const unwrappedOnChange = value.onChange;
            if (value.onChange) value.onChange = (value) => {
                SETTING_CACHE[key] = value;
                if (unwrappedOnChange) unwrappedOnChange(value);
            }
        }
        game.settings.register(MODULE_ID, key, value);
        if(value.useCache) SETTING_CACHE[key] = getSetting(key);
    }
}