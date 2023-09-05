import { patreonLogin } from "./patreonLogin.js";

Hooks.on("ready", async () => {
    if(!game.user.isGM) return;
    game.theripperpremiumhub = new TheRipperPremiumHUB();
    game.patreonLogin = patreonLogin;
})