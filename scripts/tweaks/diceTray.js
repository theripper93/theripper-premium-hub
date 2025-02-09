import {deepClone} from "../lib/utils";
import { getSetting } from "../settings";

export function applyDiceTrayTweaks(startup = false) {
    getSetting("tweaks").diceTray ? Hooks.on("renderChatLog", renderChatHook) : Hooks.off("renderChatLog", renderChatHook);
    if(!startup) ui.chat.render(true);
}

const diceButtons = [
    {
        name: "d4",
        icon: "dice-d4",
    },
    {
        name: "d6",
        icon: "dice-d6",
    },
    {
        name: "d8",
        icon: "dice-d8",
    },
    {
        name: "d10",
        icon: "dice-d10",
    },
    {
        name: "d12",
        icon: "dice-d12",
    },
    {
        name: "d20",
        icon: "dice-d20",
    },
];
let diceTrayData = {};

const defaultDiceTrayData = {
    inProgress: false,
    count: 0,
};

diceButtons.forEach((button) => {
    defaultDiceTrayData[button.name] = { count: 0, adv: false, dis: false };
});

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
    //Reset if textarea is empty
    if(!document.querySelector("#chat-form textarea").value.startsWith("/r ")) diceTrayData = deepClone(defaultDiceTrayData);
    const button = event.currentTarget;
    const isLeftClick = event.button === 0;
    const isRightClick = event.button === 2;
    const isShiftKey = event.shiftKey;
    const isCtrlKey = event.ctrlKey;
    const action = button.dataset.button;

    //Play bounce up animation
    button.style.transformOrigin = isLeftClick ? 'bottom' : 'top';
    button.animate([{transform: isLeftClick ? 'scale(1.1)' : 'scale(1.1)'}, {transform: 'scale(1)'}], {duration: 100});

    // Handle roll button emulate enter press
    if (action === "roll") {
        diceTrayData = deepClone(defaultDiceTrayData);
        document.querySelector(".dice-tray-button[data-button='count']").innerText = "0";
        if(isLeftClick) ui.chat.processMessage(document.querySelector("#chat-form textarea").value);
        return buildRoll();
    }

    if (action.includes("dice|")) {
        const dice = action.split("|")[1];
        diceTrayData.lastDice = dice;
        let currentCount = diceTrayData[dice].count ?? 0;
        let increment = 1;
        if (isShiftKey) increment = 2;
        if (isCtrlKey) increment = 5;
        if (isLeftClick) currentCount += increment;
        else if (isRightClick && currentCount > 0) currentCount -= increment;
        diceTrayData[dice].count = Math.max(0, currentCount);
        return buildRoll();
    }

    if (action === "adv") {
        const lastDice = diceTrayData.lastDice;
        if (!lastDice) return;
        diceTrayData[lastDice].adv = !diceTrayData[lastDice].adv;
        diceTrayData[lastDice].dis = false;
        if(diceTrayData[lastDice].adv && diceTrayData[lastDice].count < 2) diceTrayData[lastDice].count = 2;
        return buildRoll();
    }

    if (action === "dis") {
        const lastDice = diceTrayData.lastDice;
        if (!lastDice) return;
        diceTrayData[lastDice].dis = !diceTrayData[lastDice].dis;
        diceTrayData[lastDice].adv = false;
        if(diceTrayData[lastDice].dis && diceTrayData[lastDice].count < 2) diceTrayData[lastDice].count = 2;
        return buildRoll();
    }

    if (action === "count") {
        const sign = isRightClick ? -1 : 1;
        let increment = 1;
        if (isShiftKey) increment = 2;
        if (isCtrlKey) increment = 5;
        diceTrayData.count += sign * increment;
        button.innerText = diceTrayData.count;
        return buildRoll();
    }

}

function buildRoll() {
    const components = [];
    diceButtons.forEach((button) => {
        const dice = button.name;
        let count = diceTrayData[dice].count;
        if (count === 0) return;
        let modifier = "";
        if (diceTrayData[dice].adv) modifier = "kh";
        else if (diceTrayData[dice].dis) modifier = "kl";
        components.push(`${count}${dice}${modifier}`);
    });
    if (diceTrayData.count !== 0) {
        const sign = diceTrayData.count > 0 ? "" : "- ";
        components.push(`${sign}${Math.abs(diceTrayData.count)}`);
    }
    if(components.length === 0) return document.querySelector("#chat-form textarea").value = "";
    document.querySelector("#chat-form textarea").value = `/r ${components.join(" + ").replace("+ -", "-")}`;
}