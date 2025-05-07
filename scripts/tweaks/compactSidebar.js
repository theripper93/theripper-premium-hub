import { getSetting } from "../settings";

const styleElement = document.createElement("style");

const compactCSS = `

.sidebar-tab{
    --sidebar-item-height: 32px;
}

.scenes-sidebar {
    --sidebar-scene-height: 50px;
}

.compendium-sidebar .directory-item.compendium{
    height: auto;
    align-items: flex-start;
    .entry-name.compendium-name{
    margin: 0;
    }
    .compendium-footer{
        display: none;
    }
    img{
        height: 50px;
    }
}
`;

export function applyCompactSidebar() {
    const compactSidebar = getSetting("tweaks").compactSidebar;
    if (!compactSidebar) {
        styleElement.innerHTML = "";
    } else {
        styleElement.innerHTML = compactCSS;
    }
    document.head.appendChild(styleElement);
}
