class TheRipperPremiumHUB {
    constructor() {
        this.outdatedModules = {};
        this.announcementsHtml = "";
        this._debug = false;
        this.converter = new showdown.Converter();
        this.init();
    }

    get repositoryIndex() {
        return {
            megapack: "megapack",
            "vtt-desktop-client": "fvtt-player-client",
            levels: "Levels",
            enhancedcombathud: "enhancedcombathud",
            "automated-evocations": "automated-evocations",
            betterroofs: "Better-Roofs",
            "combat-tracker-dock": "combat-tracker-dock",
            bossbar: "Boss-Bar",
            combatbooster: "Combat-Booster",
            "fuzzy-foundry": "fuzzy-foundry",
            "hover-distance": "hover-distance",
            "hurry-up": "hurry-up",
            levelsautocover: "levelsautocover",
            levelsvolumetrictemplates: "levelsvolumetrictemplates",
            patrol: "Patrol",
            "damage-numbers": "damage-numbers",
            smarttarget: "Smart-Target",
            splatter: "splatter",
            "dnd-randomizer": "dnd-randomizer",
            "tile-sort": "tile-sort",
            "tile-scroll": "tile-scroll",
            "token-z": "token-z",
            "foundry-taskbar": "foundry-taskbar",
            quickdraw: "quickdraw",
            "config-presets": "config-presets",
            "light-switch": "light-switch",
            "filepicker-plus": "filepicker-plus",
            "progress-tracker": "progress-tracker",
            "situational-shortcuts": "situational-shortcuts",
            "quick-doors": "quick-doors",
            "image-context": "image-context",
            "inactive-tokens-lmao": "inactive-tokens-lmao",
            "levels-3d-preview": "levels-3d-preview",
            choices: "choices",
            mmm: "Maxwell-s-Manual-of-Malicious-Maladies",
            socketmacros: "socketmacros",
            tokenflip: "tokenflip",
            "token-notes": "token-notes",
            "wall-height": "wall-height",
            canvas3dcompendium: "canvas3dcompendium",
            canvas3dtokencompendium: "canvas3dtokencompendium",
            "theripper-premium-hub": "theripper-premium-hub",
            "levels-layer-effects": "levels-layer-effects",
            "three-actor-portrait": "three-actor-portrait",
            mastercrafted: "mastercrafted",
            gatherer: "gatherer",
            "camera-dock": "camera-dock",
            "macro-wheel": "macro-wheel",
        };
    }

    async init() {
        this.moduleData = await this.fetchData();
        this.announcements = this.moduleData.announcements;
        delete this.moduleData.announcements;
        this.getOutdatedModules();
        if (game.settings.get("theripper-premium-hub", "autoCheck")) {
            this.displayOutdated(false);
        }
        this.displayAnnouncements();
    }

    async getForgeData(moduleId) {
        return await fetch(`https://forge-vtt.com/api/bazaar/package/${moduleId}`)
            .then((response) => response.json())
            .then((data) => data)
    }

    getOutdatedModules() {
        const checkDisabled = game.settings.get("theripper-premium-hub", "checkDisabled");
        for (let [k, v] of Object.entries(this.moduleData)) {
            const installedModule = game.modules.get(k);
            if (!installedModule) continue;
            if (!checkDisabled && !installedModule?.active) continue;
            if (isNewerVersion(v.version, installedModule.version) || this._debug) {
                this.outdatedModules[k] = v;
                this.outdatedModules[k].title = installedModule.title;
                this.outdatedModules[k].currentVersion = installedModule.version;
            }
        }
    }

    async displayOutdated(notify = false) {
        if (Object.keys(this.outdatedModules).length === 0) return notify ? ui.notifications.info(`No outdated modules found.`) : null;
        let displayUpdated = {};
        if (!notify) {
            const viewedUpdates = game.settings.get("theripper-premium-hub", "viewedUpdates");
            for (let [k, v] of Object.entries(this.outdatedModules)) {
                if (viewedUpdates[k] && v.version === viewedUpdates[k]) continue;
                displayUpdated[k] = v;
            }
        } else {
            displayUpdated = this.outdatedModules;
        }
        if (Object.keys(displayUpdated).length === 0) return null;
        const html = await renderTemplate("modules/theripper-premium-hub/templates/modlist.hbs", displayUpdated);
        Dialog.prompt({
            title: "TheRipper93 Premium HUB - Updates Available!",
            content: html,
            rejectClose: false,
            callback: () => {
                const viewedUpdates = game.settings.get("theripper-premium-hub", "viewedUpdates");
                for (let [k, v] of Object.entries(this.outdatedModules)) {
                    viewedUpdates[k] = v.version;
                }
                game.settings.set("theripper-premium-hub", "viewedUpdates", viewedUpdates);
            },
            close: () => {},
        });
    }

    async displayAnnouncements() {
        const announcements = this.announcements;
        if (!announcements) return;
        const ids = Object.keys(announcements);
        const viewedAnnouncements = game.settings.get("theripper-premium-hub", "viewedAnnouncements") ?? "";
        const allViewed = ids.every((id) => viewedAnnouncements.includes(id));
        const html = await renderTemplate("modules/theripper-premium-hub/templates/announcements.hbs", announcements);
        this.announcementsHtml = html;
        if (allViewed && !this._debug) return;
        game.settings.set("theripper-premium-hub", "viewedAnnouncements", ids.join(","));
        Dialog.prompt({
            title: "TheRipper93 Premium HUB - Announcement!",
            content:
                html +
                `    <p style="text-align: center;">Want to support me and get access to premium modules?</p><hr>
      <p style="text-align: center;"><a href="https://theripper93.com/" target="_blank" rel="nofollow" title="https://theripper93.com/">Check out my Website</a></p>`,
            rejectClose: false,
            callback: () => {},
            close: () => {},
        });
    }

    async fetchData() {
        const modules = game.modules.filter((v) => v.authors && v.authors.some((a) => a.name === "theripper93"));
        const announcements = await this.fetchAnnouncements();
        const promises = modules.map((m) => this.fetchModuleData(m));

        const obj = {};

        await Promise.all(promises).then((data) => {
            data.forEach((d) => {
                if (d) {
                    obj[d.id] = d;
                }
            });
        });
        obj.announcements = announcements.announcements;
        game.settings.set("theripper-premium-hub", "lastGitCheck", Date.now());
        return obj;
    }

    async fetchModuleData(module) {
        const checkDisabled = game.settings.get("theripper-premium-hub", "checkDisabled");
        if (!checkDisabled && !module.active) return null;
        const isPremium = module?.manifest?.includes("foundryvtt");
        const id = module.id;
        const owner = "theripper93";
        const repo = this.repositoryIndex[id] ?? id;
        const releases = await this.getAllReleasesFromGitHub(owner, repo, isPremium, module);
        if (!releases) return null;
        const latestRelease = Object.keys(releases).sort((a, b) => isNewerVersion(b, a))[0];
        if(!latestRelease) return null;
        return {
            version: latestRelease,
            title: module.title,
            changelog: releases,
            latestChangeLog: this.converter.makeHtml(releases[latestRelease]),
            id: id,
        };
        /*return await fetch(`https://forge-vtt.com/api/bazaar/package/${moduleId}`)
            .then((response) => response.json())
            .then((data) => data);*/
    }

    async getAllReleasesFromGitHub(owner, repo, isPremium, module) {
        const lastGitRequestTimestamp = game.settings.get("theripper-premium-hub", "lastGitCheck") ?? 0;
        if (isPremium) {
            const changelogURL = `https://raw.githubusercontent.com/theripper93/theripper-premium-hub/master/premium-changelogs/${repo}.md`;
            try {
                const response = await fetch(changelogURL);
                if (!response.ok) return null;
                const changelog = await response.text();
                if (!changelog) return null;
                const releases = {};
                //parse changelog
                const changelogLines = changelog.split(/\r?\n/);
                let currentVersion = "";
                for (const line of changelogLines) {
                    if (line.startsWith("##")) {
                        const version = line.replace("## Version ", "");
                        releases[version] = "";
                        currentVersion = version;
                    } else {
                        const trimmed = line.trim();
                        if (trimmed != "") releases[currentVersion] += line + "\n";
                    }
                }
                return releases;
            } catch (error) {
                return null;
            }
        } else {
            if ((Date.now() - lastGitRequestTimestamp) < 3600000) {
                return null;
            }
            const releasesPerPage = 10; // Maximum allowed by GitHub API
            const apiUrl = `https://api.github.com/repos/${owner}/${repo}/releases?per_page=${releasesPerPage}`;

            try {
                let compiledReleases = {};

                const response = await fetch(`${apiUrl}&page=1`);
                
                if (response.status === 404 && !module.download) {
                    ui.notifications.error(`The module <strong>${module.title}</strong> is still installed using the old manual installation, please switch to the new Foundry/Patreon integration. <a href="https://theripper93.com/info/installation" target="_blank" rel="nofollow">More Information</a>`, { permanent: true });
                }



                const releases = await response.json();
                releases.forEach((release) => {
                    compiledReleases[release.tag_name] = release.body;
                });

                return compiledReleases;
            } catch (error) {
                return null;
            }
        }
    }

    async fetchAnnouncements() {
        return await fetch(`https://api.theripper93.com/moduleListing/latest`, { cache: "no-cache" })
            .then((response) => response.json())
            .then((data) => data);
    }

    _getdataforfile() {
        const mods = {};
        game.modules.forEach((v, k) => {
            if (v.authors && v.authors.some((a) => a.name === "theripper93") && v.manifest.includes("foundryvtt")) {
                mods[k] = {
                    title: v.title,
                    version: v.version,
                    downloadURL: this.moduleData[k]?.downloadURL ?? "",
                };
            }
        });
        return mods;
    }

    getDependencies(moduleId) {
        const rootModule = game.modules.get(moduleId);
        const dependencies = new Set();
        const addDependecies = (module) => {
            const moduleDependencies = Array.from(module.relationships.requires).map((m) => game.modules.get(m.id));
            moduleDependencies.forEach((m) => {
                dependencies.add(m);
                addDependecies(m);
            });
        };
        addDependecies(rootModule);
        return dependencies;
    }

    async troubleshoot(moduleId) {
        const confirm = await Dialog.confirm({
            title: "TheRipper93 Premium HUB - Troubleshoot",
            content: `<p>Do you want to start the troubleshoot for ${game.modules.get(moduleId).title}?</p><br><p>This will disable all modules except the one you selected and its dependencies. You will be prompted to restore your modules after the troubleshoot.</p>`,
            yes: () => {
                return true;
            },
            no: () => {
                return false;
            },
        });
        if (!confirm) return;
        const dependencies = this.getDependencies(moduleId);
        const dependenciesIds = [...Array.from(dependencies).map((m) => m.id), moduleId, "theripper-premium-hub"];
        const modulesSetting = game.settings.get("core", ModuleManagement.CONFIG_SETTING);
        const currentlyEnabled = [];
        for (let [k, v] of Object.entries(modulesSetting)) {
            if (v) currentlyEnabled.push(k);
            if (dependenciesIds.includes(k)) continue;
            modulesSetting[k] = false;
        }
        await game.settings.set("theripper-premium-hub", "prevEnabledModules", currentlyEnabled);
        await game.settings.set("core", ModuleManagement.CONFIG_SETTING, modulesSetting);
        debouncedReload();
    }
}
