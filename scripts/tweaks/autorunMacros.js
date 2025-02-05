import { getSetting } from "../settings";

export function runInitMacros() {
    const macros = getSetting("tweaks").initMacros ?? [];
    console.log("Init Macros", macros);
    macros.forEach((macro) => {
        runMacro(macro);
    });
}

export function runReadyMacros() {
    const macros = getSetting("tweaks").readyMacros ?? [];
    macros.forEach((macro) => {
        runMacro(macro);
    });
}

function runMacro(uuid) {
    const macro = fromUuidSync(uuid);
    if (macro) return runScript(macro);
    fromUuid(uuid).then((macro) => {
        if (macro) runScript(macro);
    });
}

function runScript(macro) {
    if (macro.type !== "script") return ui.notifications.error("Startup Macros: Macro is not a script macro");
    const command = macro.command;
    const fn = new foundry.utils.AsyncFunction(`{${command}\n}`);
    try {
        return fn.call(macro);
    } catch (err) {
        ui.notifications.error("MACRO.Error", { localize: true });
    }
}
