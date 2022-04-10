Hooks.on("ready", async () => {
    if(!game.user.isGM) return;
    game.theripperpremiumhub = new TheRipperPremiumHUB();
})