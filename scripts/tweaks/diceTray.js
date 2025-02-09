import { deepClone } from "../lib/utils";
import { getSetting } from "../settings";

export function applyDiceTrayTweaks(startup = false) {
    getSetting("tweaks").diceTray ? Hooks.on("renderChatLog", renderChatHook) : Hooks.off("renderChatLog", renderChatHook);
    if (!startup) ui.chat.render(true);
}
const diceButtons = ["4", "6", "8", "10", "12", "20"].map((count) => ({ name: `d${count}`, icon: `dice-d${count}` }));
let diceTrayData = {};

const defaultDiceTrayData = {
    inProgress: false,
    count: 0,
    ...diceButtons.reduce((acc, button) => ({ ...acc, [button.name]: { count: 0, adv: false, dis: false } }), {}),
};

function renderChatHook(app) {
    const diceTray = document.createElement("div");
    diceTray.style.flex = "0 0";
    diceTray.style.height = "3rem";
    diceTray.style.minHeight = "3rem";
    diceTray.style.overflow = "hidden";
    let html = "";
    html += `<div class="flexrow">`;
    diceButtons.forEach((button) => {
        html += `<button class="dice-tray-button" data-tooltip-direction="UP" data-tooltip="${button.name.toUpperCase()}" data-button="dice|${button.name}"><i class="fad fa-${button.icon}"></i></button>`;
    });
    // Adv Dis buttons
    html += `<div class="flexcol buttons-stacked">`;
    html += `<button class="dice-tray-button" data-button="adv">ADV</button>`;
    // Count button
    html += `<button class="dice-tray-button" data-button="count">+0</button>`;
    html += `<button class="dice-tray-button" data-button="dis">DIS</button>`;
    html += `</div>`;
    // Roll button
    html += `<button class="dice-tray-button" data-tooltip-direction="UP" data-tooltip="ROLL" data-button="roll"><i class="fas fa-dice"></i></button>`;
    html += `</div>`;
    diceTray.innerHTML = html;

    const style = document.createElement("style");
    style.innerHTML = `
        .buttons-stacked{
            align-items: center;
            justify-content: space-around;
            button{
                font-size: x-small;
                padding: 0;
                max-height: 0.9rem;
                padding: 0;
            }
        }
        .dice-tray-button {
            display: flex;
            place-content: center;
            align-items: center;
            aspect-ratio: 1;
            font-size: 1.4rem;
            background: transparent;
            border: none;
            color: var(--color-text-light-highlight);
            i{
                margin: 0;
            }
        }
         .dice-tray-button:hover{
            background: var(--color-shadow-highlight);
         }
        .dice-tray-button:active, .dice-tray-button:focus{
            border: none;
            box-shadow: none;
        }
    `;

    diceTray.appendChild(style);
    document.querySelector("#chat-form").after(diceTray);
    diceTray.querySelectorAll(".dice-tray-button").forEach((button) => {
        button.addEventListener("pointerup", onButtonClick);
    });

    diceTrayData = deepClone(defaultDiceTrayData);
}

function onButtonClick(event) {
    event.preventDefault();
    if (!document.querySelector("#chat-form textarea").value.startsWith("/r ")) diceTrayData = deepClone(defaultDiceTrayData);
    const button = event.currentTarget;
    const isLeftClick = event.button === 0;
    const isRightClick = event.button === 2;
    const increment = event.shiftKey ? 2 : event.ctrlKey ? 5 : 1;
    const action = button.dataset.button;

    button.style.transformOrigin = isLeftClick ? "bottom" : "top";
    button.animate([{ transform: "scale(1.1)" }, { transform: "scale(1)" }], { duration: 100 });

    if (action === "roll") {
        diceTrayData = deepClone(defaultDiceTrayData);
        document.querySelector(".dice-tray-button[data-button='count']").innerText = "+0";
        if (isLeftClick) ui.chat.processMessage(document.querySelector("#chat-form textarea").value);
    }

    if (action.includes("dice|")) {
        const dice = action.split("|")[1];
        diceTrayData.lastDice = dice;
        let currentCount = diceTrayData[dice].count ?? 0;
        if (isLeftClick) currentCount += increment;
        else if (isRightClick && currentCount > 0) currentCount -= increment;
        diceTrayData[dice].count = Math.max(0, currentCount);
    }

    if (action === "adv" || action === "dis") {
        const lastDice = diceTrayData.lastDice;
        if (!lastDice) return;
        const otherAction = action === "adv" ? "dis" : "adv";
        diceTrayData[lastDice][otherAction] = false;
        diceTrayData[lastDice][action] = !diceTrayData[lastDice][action];
        if (diceTrayData[lastDice][action] && diceTrayData[lastDice].count < 2) diceTrayData[lastDice].count = 2;
    }

    if (action === "count") {
        diceTrayData.count += (isRightClick ? -1 : 1) * increment;
        button.innerText = diceTrayData.count;
    }

    return buildRoll();
}

function buildRoll() {
    const components = [];
    diceButtons.forEach((button) => {
        const dice = button.name;
        if (diceTrayData[dice].count === 0) return;
        components.push(`${diceTrayData[dice].count}${dice}${diceTrayData[dice].adv ? "kh" : diceTrayData[dice].dis ? "kl" : ""}`);
    });
    if (diceTrayData.count !== 0) components.push(`${diceTrayData.count > 0 ? "" : "- "}${Math.abs(diceTrayData.count)}`);
    if (components.length === 0) return (document.querySelector("#chat-form textarea").value = "");
    document.querySelector("#chat-form textarea").value = `/r ${components.join(" + ").replace("+ -", "-")}`;
}
