import { l } from "../lib/utils";
import { MODULE_ID } from "../main";
import { getSetting } from "../settings";

export function initAutoRotation() {
    const enabled = getSetting("tweaks").autoRotate;

    if (enabled) {
        Hooks.on("preUpdateToken", onTokenPreUpdate);
        Hooks.on("targetToken", onTarget);
        Hooks.on("renderTokenConfig", onRenderTokenConfig);
    } else {
        Hooks.off("preUpdateToken", onTokenPreUpdate);
        Hooks.off("targetToken", onTarget);
        Hooks.off("renderTokenConfig", onRenderTokenConfig);
    }
}

function onTokenPreUpdate(tokenDocument, updates) {
    if (updates.x !== undefined || updates.y !== undefined) {
        console.log({
            x: updates.x ?? tokenDocument.x,
            y: updates.y ?? tokenDocument.y,
            originalX: tokenDocument.x,
            originalY: tokenDocument.y,
        })
        const rotation = getRotation(tokenDocument, {
            x: updates.x ?? tokenDocument.x,
            y: updates.y ?? tokenDocument.y,
            width: tokenDocument.width,
            height: tokenDocument.height,
            parent: tokenDocument.parent,
        });
        if(rotation !== false) updates.rotation = rotation;
    }
}

function onTarget(user, token, targeted) {
    if (!targeted || !canvas.tokens.controlled.length) return;
    const sourceToken = canvas.tokens.controlled[0];
    const rotation = getRotation(sourceToken.document, token.document);
    if(rotation !== false) sourceToken.document.update({ rotation });
}

function onRenderTokenConfig(app) {
    const tokenDocument = app.document;
    const html = app.element[0] ?? app.element;
    const formGroup = document.createElement("div");
    formGroup.classList.add("form-group");
    const defaultSetting = getSetting("tweaks").autoRotate;
    const defaultText = defaultSetting === 1 ? l(`${MODULE_ID}.tweaks-menu.autoRotate.on`) : l(`${MODULE_ID}.tweaks-menu.autoRotate.off`);
    const tokenSetting = tokenDocument.flags[MODULE_ID]?.autoRotate ?? 0;

    formGroup.innerHTML = `
        <label>${l(`${MODULE_ID}.tweaks-menu.autoRotate.name`)}</label>
        <select name="flags.${MODULE_ID}.autoRotate" data-dtype="Number">
            <option value="0" ${tokenSetting === 0 ? "selected" : ""}>${l(`${MODULE_ID}.tweaks-menu.autoRotate.default`) + ` (${defaultText})`}</option>
            <option value="1" ${tokenSetting === 1 ? "selected" : ""}>${l(`${MODULE_ID}.tweaks-menu.autoRotate.on`)}</option>
            <option value="2" ${tokenSetting === 2 ? "selected" : ""}>${l(`${MODULE_ID}.tweaks-menu.autoRotate.off`)}</option>
        </select>
    `;
    html.querySelector('input[name="lockRotation"]').closest(".form-group").after(formGroup);
    app.setPosition({ height: "auto" });
}

function getRotation(sourceDocument, targetDocument) {
    const enabled = ((sourceDocument.flags[MODULE_ID]?.autoRotate ?? 0) || getSetting("tweaks").autoRotate) === 1;
    if (!enabled) return false;
    const sourceCenter = { x: sourceDocument.x + (sourceDocument.width / 2) * sourceDocument.parent.grid.sizeX, y: sourceDocument.y + (sourceDocument.height / 2) * sourceDocument.parent.grid.sizeY };
    const targetCenter = { x: targetDocument.x + (targetDocument.width / 2) * targetDocument.parent.grid.sizeX, y: targetDocument.y + (targetDocument.height / 2) * targetDocument.parent.grid.sizeY };
    const angle = Math.atan2(targetCenter.y - sourceCenter.y, targetCenter.x - sourceCenter.x);
    return Math.toDegrees(angle - Math.PI / 2);
}
