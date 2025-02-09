import { confirm } from "../lib/utils";

export async function reEnableModules() {
    const prevEnabledModules = game.settings.get("theripper-premium-hub", "prevEnabledModules");
    if (game.user.isGM && prevEnabledModules.length > 0) {
        const confirmed = await confirm("TheRipper93 Premium HUB", "Would you like to re-enable your previously enabled modules?<br>Choose 'No' to disable this prompt, you will have to manually re-enable modules in the module management menu.<br>Close this prompt to be asked again on next refresh.");
        if (confirmed === false) await game.settings.set("theripper-premium-hub", "prevEnabledModules", []);
        if (!confirmed) return;
        const modulesSetting = game.settings.get("core", ModuleManagement.CONFIG_SETTING);
        for (const [k, v] of Object.entries(modulesSetting)) {
            if (prevEnabledModules.includes(k)) {
                modulesSetting[k] = true;
            }
        }
        await game.settings.set("theripper-premium-hub", "prevEnabledModules", []);
        await game.settings.set("core", ModuleManagement.CONFIG_SETTING, modulesSetting);
        foundry.utils.debouncedReload();
    }
}
