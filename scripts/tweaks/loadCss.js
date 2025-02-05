import {getSetting} from "../settings"

const styleElement = document.createElement("style")


export function applyCSSTweaks() {
    const rawStringCSS = getSetting("tweaks").cssTweak0 ?? "";
    const rawStringCSS2 = getSetting("tweaks").cssTweak1 ?? "";
    const rawStringCSS3 = getSetting("tweaks").cssTweak2 ?? "";
    const css = rawStringCSS + rawStringCSS2 + rawStringCSS3;
    styleElement.innerHTML = css;
    document.head.appendChild(styleElement);
}