## Version 6.4.0
- Added ambient light setting in scene configuration for additional lighting fine tuning

## Version 6.3.12
- Fixed issue with template elevation rendering

## Version 6.3.11
- Fixed issue with templates beeing flattened upon placement

## Version 6.3.10
- Prevented 2D canvas from flashing for 1 frame revealing the scene during 3D loading under certain circumstances

## Version 6.3.9
- Fixed problem with broken compendium in previous release
- Fixed ray templates not rendering at correct width

## Version 6.3.8
- Fixed issue that could potentially reveal the scene for one frame  when switching to very simple scenes on fast hardware

## Version 6.3.7
- added utility macro to render current scene to a top down version game.Levels3DPreview.UTILS.renderSceneToImage() - shared context must be disable for the correct results

## Version 6.3.6
- Fixed issue with 2d hidden door visualization on player side

## Version 6.3.4
- Fixed issue with new socket library and particle effects
- Fixed issue with 3d canvas not working correctly without optional dependency wall height

## Version 6.3.3
- Updated dnd template preview wrapper for 4.x

## Version 6.3.2
- Fixed collision calculations without dependencies
- Fixed ruler caluclations wihtout dependencies

## Version 6.3.1
- Added token height estimation for vision calcs in case wall heigth is not present for more realistic vision polygons

## Version 6.3.0
- Refactored some code to minimize dependencies
- Socket lib is no longer required
- Levels and wallheight are now optional dependencies
- Some feature might not be availeble without those optional dependencies

## Version 6.2.16
- Added check to prevent other modules causing form rerenders to break 3d canvas data

## Version 6.2.15
- Fixed darkness level sync not updated to v12
- added compatibility for pf2 world time

## Version 6.2.14
- Fixed issue with door icons not correctly rendering under certain circumstances

## Version 6.2.13
- Fixed issue with color inputs in configuration left empty creating invalid values

## Version 6.2.12
- Fixed configuration label

## Version 6.2.11
- Removing light from a token or deleting a token with a light in a complex scene no longer cause stuttering\freezing

## Version 6.2.10
- Fixed issue with black target indicator colors

## Version 6.2.8
- Added workaround for PF2e issue with token size data manipulation

## Version 6.2.7
- Fixed grounding still beeing applied when a token was flying

## Version 6.2.6
- Implemented workarounds for foundry bugs that prevent correct token updates when size or texture changes

## Version 6.2.5
- Animation linked doors will now disable sight and collision when opened

## Version 6.2.4
- When using animations on door tiles, Vision blocking is dynamically updated with the animation frame state when the animation is completed

## Version 6.2.3
- Double right clicking a point now moves the camera to that point, mantaining zoom and perspective

## Version 6.2.2
- Fixed scene refreshing randomly
- Fixed users cursors beeing all white

## Version 6.2.1
- Added pixelize postprocessing

## Version 6.2.0
- Fixed changes to sun not refreshing live
- Added new Postprocessing tab in scene settings with: Vignette,Chromatic aberration, Grain, Brightness, Contrast, Saturation, Tint, Bloom
- Added new setting in light configuration to have a light visible while disabled (you'll get the visual effect of lighting but no vision)

## Version 6.1.4
- Fixed wonky dynamesh dropdown

## Version 6.1.3
- Fixed grid color for grid shader not beeing correctly picked up

## Version 6.1.2
- Implemented another animation\door state linking method which uses a single animation and reverses it

## Version 6.1.1
- Clean up on update hook and small fix to previous update

## Version 6.1.0
- Added Play Once option with fill forwards to tile animation options
- Added new Door Style which syncs the door state to the animation index
- Improved blending between animations

## Version 6.0.17
- Fixed issues with template color

## Version 6.0.16
- Fixed Note labels not working correctly

## Version 6.0.15
- Resolved issues with loading of lights with no color set

## Version 6.0.14
- Fixed light colors beeing always white

## Version 6.0.13
- Performance improvements with many lights

## Version 6.0.12
- Performance improvements with many lights

## Version 6.0.12
- Fix for ruler snapping on tile creation

## Version 6.0.11
- Fixed error with decal meshes on manual creation

## Version 6.0.10
- Fixed tile merging?

## Version 6.0.9
- Fixed tile merging, again

## Version 6.0.8
- Fixed issue with tile merging

## Version 6.0.7
- Fixed hover and selection outline not working correctly

## Version 6.0.6
- Reworked visual interface for tactical pings
- Added new custom user ping in user configuration

## Version 6.0.5
- New Feature: Tactical Pings

## Version 6.0.4
- Fixed issue when dropping tiles

## Version 6.0.3
- Fixed tile box drawing tool not working correctly when the creation was not started from the top left corner

## Version 6.0.2
- Fixed issue with elevation data not beeing red correctly

## Version 6.0.1
- Fixed issues with 3D Tiles based vision
- Fixed issue with token HUD

## Version 6.0.0
- Initial V12 update

## Version 5.7.4.11
- Templates can now be moved after placement by non-gm users

## Version 5.7.4.10
- Fixed shift deselection which was deselecting the wrong tile when multiple tiles were selected

## Version 5.7.4.9
- Improved measured template visibility mirroring

## Version 5.7.4.8
- Added puzzle locks compatibility for 3d doors

## Version 5.7.4.7
- Fixed template placement for pf2

## Version 5.7.4.6
- Fixed table padding depth

## Version 5.7.4.5
- Fix for mass edit incomatibility which prevented light and template creation

## Version 5.7.4.4
- Improved error handling for animation functions

## Version 5.7.4.3
- updated next contest timestamp

## Version 5.7.4.2
- Templates are no longer auto-destroyed after an effect plays to avoid weird interactions
- Added workaround for warpgate module throwing errors on template placement

## Version 5.7.4.1
- Selecting a token will now clear existing range finders

## Version 5.7.4
- Added keybinding to lock camera position when held (H)

## Version 5.7.3
- Tile updates are now handled by a batcher so that if multiple tiles are moved together they will be all undone together

## Version 5.7.2
- Map browser description urls are now clicable
- fixed issue with scene padding heghtmap processing

## Version 5.7.1
- Fix for Active Tiles api change

## Version 5.7.0
- Added new Dynamic Sky feature

## Version 5.6.0.1
- Fixed potential bug affecting 2d walls
- Community maps browser now has a sort by download button

## Version 5.6.0
- Added new Interactive Counter Dynameshes
- Reworked the dynamesh dropdown to be divided into categories

## Version 5.5.9


## Version 5.5.9
- Added new  "Coin" mode for 2D Tokens in 3D
- Changed "Standup face camera" option to a new selection menu "2D Token Style" both global and per token

## Version 5.5.8.1
- Small fix for previous update

## Version 5.5.8
- You can now set a heightmap for the Infinite Mat area

## Version 5.5.7.8
- Small fix for last release

## Version 5.5.7.6
- Added download counter for map browser

## Version 5.5.7.5
- Past and future mapmaking contest winners will now have a trophy icon next to their name in the community maps browser
- Added logic for future contests to display date\time of the contest

## Version 5.5.7.4
- Fixed issue with Fog of War not beeing rendered under some circumstances when Shared Context is disabled

## Version 5.5.7.3
- fixed type check for doors

## Version 5.5.7.2
- When in using a 2D map in 3D and door rendering is disabled, 3D Canvas will now show a door icon to preserve door interactivity

## Version 5.5.7.1
- Fix texture interpolation for splatmap shader

## Version 5.5.7
- Texture overlay type shaders now respect the alpha channel of the underlying texture
- When importing community maps, a scene note and corresponding journal will be created with the description of the map. You can toggle this option in the Community Maps window

## Version 5.5.6
- Added new `Noise` Shader
- Fixed some minor issues with the new paint mode

## Version 5.5.5.8
- Added internal api changes for Live Painting to work

## Version 5.5.5.7
- Added `Plane` Dynamic Mesh
- Added `Alpha Clip` setting to material tab for tiles

## Version 5.5.5.6
- Fixed Community Map import not importing 3D Tokens correctly if their data path was set using The Forge

## Version 5.5.5.5
- Fixed Animated doors hitboxes covering the pre-animation space as well

## Version 5.5.5.4
- Extended support for canvas panning

## Version 5.5.5.3
- Bounce shader intensity can now be defined per axis

## Version 5.5.5.2
- Added new 'Capture Tokens' option for animated doors. When enabled nearby tokens will be captured and move together with the door animation

## Version 5.5.5.1
- Added logic to allow splatmap paint preview

## Version 5.5.5
- Added new Mask shader

## Version 5.5.4.4
- Added Right click\Double right click\Hover in\Hover out to MATT compatible events

## Version 5.5.4.3
- Fix for Weather height possibly incorrect when tiles are merged

## Version 5.5.4.2
- Fix and cleanup for Outline logic in token highlighting

## Version 5.5.4.1
- Fixed issue with new hide effects setting
- Changed visuals for turn start marker indicator

## Version 5.5.4
- Added setting to disable the display of Effects (small dice floating above tokens)
- Added two new base types, Ring Simple and Ring Simple Small
- Revamped Target Visuals
- Changed default base to Ring Simple

## Version 5.5.3.3
- Small tweaks to tile configuration

## Version 5.5.3.2
- Fixed issue after removal of skybox from scene configuration

## Version 5.5.3.1
- Fixed token particles not beeing removed on token deletion

## Version 5.5.3
- Added Particle Effects to Token Effects tab

## Version 5.5.2.2
- Added door sounds to tile configuration
- fixed broken forms after the form rework
- added door animation time to the tile settings

## Version 5.5.2.1
- added Advanced camera calculations option to clipping shader

## Version 5.5.2
- added Slide - Side and Slide - Vertical as new door animations

## Version 5.5.1.4
- Polished the new forms with new Position tab for tiles
- Added Offset (xyz) for tiles, intended to adjust pivot for door animations

## Version 5.5.1.3
- Added noise scale to clipping shader
- Fixed error thrown in refresh token hook (it was harmless but annoying)

## Version 5.5.1.2
- Added workaround to make scene configuration work in PF2e

## Version 5.5.1.1
- Fixed textarea input not working correctly

## Version 5.5.1
- Added new `Clipping` Shader

## Version 5.5.0
- Fixed Token Base color not getting updated with the correct color
- Revamped Scene, Tile and Token configurations to be divided into sub-tabs for better organization

## Version 5.4.9
- Fixed wrong localization key for wall collision on movement
- Added scene setting "Grounding", when enabled players will be prevented from completing movement that would leave them in the air\flying

## Version 5.4.8
- Fixed scrolling text scrolling to the left instead of up if no direction was provided- Added logic to allow Splatter to create directional splats

## Version 5.4.7
- Fixed bug that prevented Fog of War from working when shared context was disabled

## Version 5.4.3
- Hotfix: The new token movment animation logic caused an issue when placing tokens under certain circumstances. This has been fixed.# 3D Canvas 5.4.4- Fixed Tokens not refreshing properly when adding\removing effects- Scrolling Text now supports left\right directions and correctly mirrors the duration# 3D Canvas 5.4.5- Projectile particle effects miss logic now works correctly and missed persistent projectiles will stick to the scene- Added font selector to tile settings when using a Text dynamesh, added a JSON Runes font (note that if you want to use custom fonts you'll need them in JSON format)

## Version 5.4.2
- Rewritten token movement animation logic to make it more performant and streamlined- Fixed Jagged token movement animation when moving a short distance vertically

## Version 5.4.1
- Fixed lighting sync not working correctly under certain conditions# Inactive Tokens 0.9.1- Fixed error when parsing broken token data

## Version 5.4
- Added terrain editor feature (rembember  that you need to update the mapmaking pack as well)This is the first iteration, for questions or feedback <#922864528457355274>https://streamable.com/1lbnah

## Version 5.3.10
- Pinging in the Combat Tracker now correctly pings in 3D

## Version 5.3.9
- Tokens with missing\invalid images no longer lock up the 3D Canvas loading process

## Version 5.3.8
- Added Animation Function for tiles, see https://wiki.theripper93.com/levels-3d-preview/info/entities/tiles#animation-functionhttps://streamable.com/tcn69z

## Version 5.3.6
- Better error handling for Token Attachments which if not found could prevent the scene from loading- In the event that 3D Canvas is loaded in a world with no scenes or with no scenes active, 3D Canvas will automatically activate a scene or create a default scene and prompt for reload

## Version 5.3.5
**Game Camera improvements:**- You can now specify a locked angle for the horizontal rotation, combined with the existing vertical rotation range, you can now achieve any fixed angle you prefer- You can now customize the maximum zoom level for the game camera**Fixes**- Fixed shader selector in token hud not properly updating it's icon's active state

## Version 5.3.4
## Paper Cutout update- Added new Paper Cutout generator (basically a PNG\WebP extruder)- If **Standups face camera** is disabled in the global 3D Canvas settings, tokens will be extruded into paper cutouts, changing the color\tint in the 3D tab will change the color of the border- Added new **Paper Cutout** dynamesh, this will do the same for tiles, set your image in the Texture field (3d tab)## Fixes\Tweaks- Fixed Token bases not reciving\casting shadows- Tweaked some Game camera parameters (a bit more zoom out and padding)https://streamable.com/4bg8yp

## Version 5.3.3
- **New Experimental feature: Adaptive Ruler**> This feature is off by default and needs to be enabled in the canvas tab of the global 3d canvas settings.>> When enabled the rouler will "mold" to the terrain, making traversal of non-flat surfaces easier and less prone to unwanted collisions- Fixed some leftover deprecated v10 methods that were throwing warningshttps://cdn.discordapp.com/attachments/922864528457355274/1131234978638856273/image.png

## Version 5.3.2
- Fixed token names\bars visibility issues

## Version 5.3.1
- Fixed events not working on placeables (mostly shift\ctrl clicking to trigger various actions such as multiple selection)- Fixed FOW not working if no tiles are in the scene- Fixed Hex grids not working or not alligned when using the grid shader- Fixed ruler providing wrong snapping point under some grid configuration or token sizes

## Version 5.3
- New Splat Map advanced shader- Shared context is now back in business in V11- Fixed template placement not working for some shapes- Fixed Animated assets loading- Fixed some FOW issues- Fixed prone effect not working- Updated some deprecated methods

## Version 5.2.4
Fixed polygon calculation error on scenes with "Use geometry for 3d calculations" enabled

## Version 5.2.3
- Fixed issues with templates and animated textures

## Version 5.1.3
> - Fixed camera "shooting up" under some circumstances> - Fixed Some particle effects not beeing obscured by FoW> - Fixed texture repeat = 1 inconsistent, moved repeat to shader which also means performance optimization> - Other minor fixes**NEW: Sounds**> - You can now place\move sounds in 3D> - Added "Positional Audio" setting to sound configuration, if enabled the sound easing will be based on camera position instead of token position

## Version 5.1.1
- Hotfix for tile particles

## Version 4.29
Hopefully final fix for the bug that broke Swift's dungeon set

## Version 4.28
Fix for more edge cases of older bug

## Version 4.27
**New Dynameshes**> - Stair Dynamesh> - Vines DynameshYou can access the Vines generator in the Asset Browser Procedural tools

## Version 4.26
- Emergency fix for the emergency fix, sorry 

## Version 4.25
- Resolved critical bug in new implementation that caused issues with some assets

## Version 4.24
> - Added new Transmission and IoR sliders in tile configuration to create glass-like materials> - Minor fixes> - Super secret feature**Mapmaking Pack 7.0**> - Added new smart scatter feature

## Version 4.23
> - Added Rock Dynameshes> - Added Chain Dynameshes> - When closing a polygon, the polygon will highlight in white> - Fixed minor issues

## Version 4.22
- Cleaned up Cutscenes- Added Caption to cutscenes- Added immersive mode to cutscenes

## Version 4.21
**More Tours\Tutorials**Added tours for every Toolbar Panel, Click the ? button on the header for the tour!**Fixed:**- It's no longer impossible to select tiles after placing an Effect- First person camera no longer drifts down for small tokens**3D Canvas Mapmaking Pack 6.8**- Updated for new tutorialsLet me know what you think of the new tours in <#922864528457355274>

## Version 4.19
- Added new Jagged dynamesh for cave creation**3D Canvas Mapmaking pack 6.6**- Added new tools to the Room Bulder for cave creation (see video)https://streamable.com/ehg12q

## Version 4.17
> - Added support for Warpgate>> - Added support for Automated Animations teleport feature>> https://streamable.com/ozcyu5

## Version 4.15
> - Many fixes and improvements to the Multithreading FOW>> - Multithreading is now no longer a setting and it's enabled by default>> - Added new wall extrusion tool, you can find it in the Asset Browser utility tab, this tool will convert the walls in the scene to tiles.**3D Canvas Mapmaking Pack 6.4**> - Added wall extrusion tool button>> - Added "floating" material browser

## Version 4.14
> **Animated Doors!**> A new option as been added that will animate the door instead of toggling transparency when opening\closing doors! (you can also set the opening angle)>> Please keep in mind that the 3D Model pivot needs to be on the door hinge for the animation to work correctly.>> **Fixes to multithreading**>> Fixed various bugs in the multithreaded fog of war.>> **Lathe**>> Added new option for the polygon dynameshhttps://streamable.com/36zld0

## Version 4.13
**Fixes:**> - Fixed broken interaction that could lock up template\light placement making it unusable until refresh>> - Fixed fast dragging of tokens leaving the ruler behind**Templates:**> - Reworked visual styles of templates to have more of an edges look instead of the whole wireframe**Dynamesh:**> - Added the new polygon solidify and lathe dynameshes

## Version 4.12
Lots of new features!> **Token Auras** You will find a new "Aura" category in the token 3D Tab where you can setup a persistent aura ring!>> **Polygon Dynamesh** This new dynamesh type will let you draw a 3D Shape from an extruded polygon. You can access the tool from the Tile Controls>> **Padding Appearance**  Reworked the old "Display Table" into the new Padding appearance, this option will let you chose between some presets, you can also set this setting globally in the 3D Canvas Global settings!Videos - <https://streamable.com/kngr4r> <https://youtu.be/A1Y5VZukqqo>

## Version 4.11
> - Added new VFX when applying an active effect>> - More ruler improvements to show better when a movement goes through objects>> - Reworked drag n drop workflow to allow billboard placement through the asset browser>> - Better ruler text and scaling>> - Fixed tiles turning progressively more invisible when toggling hidden status if texture repeat was set to 1>> - Fixed renderer not working correcting if core settings "Disable Pixel Resolution Scaling" was enabled>> - Added "Cast Shadow" option (default on) to tile configuration to disable shadow casting on specific objects**3D Canvas Mapmaking Pack 6.2**> - Added Grass & Shrubs category with cheap billboard vegetation> - Added Roads to the Effect Browser**Make sure you update both 3D Canvas and the Mapmaking Pack!**https://youtu.be/9184W3_GtEg

## Version 4.10
> - Finished Ruler UI rework>> - Cleaned up a lot of small glitches in various interactions>> - Lights\Templates now snap to half grid

## Version 4.9.13
> - Resolved critical bug that would lock the camera under certain sircumstances while using the asset browser>> - Fixed multiple token movement broken after the waypoint update**3D Canvas Mapmaking Pack 5.9.1**> - Added Caves to terrain generation> - Finished rework of the Terrain Panel

## Version 4.9.12
> - Cleaned up new drag selection>> - Fixed some broken mouse interactions>> - Slight speed up of loading times (maybe)>> - Added close button to loading screen

## Version 4.9.11
> - More tour updates>> - Box selection no longer requires pressing F>> - Fixed minor bugs**Remember to also UPDATE the Mapmaking Pack!****3D Canvas Mapmaking Pack 5.8.1**> - Revamped Asset browser

## Version 4.9.10
> - Added Ruler Waypoints (controls the same as Drag Ruler - Right click to place waypoint, space to remove)>> - Unified controls into the new 3D Scene panel (eg, moved tiny buttons)>> - Reduced default for cached lights to 4>> - Fixed other minor issues**Remember to also UPDATE the Mapmaking Pack!**

## Version 4.9.9
> - Updated new user experience> - Small bugfixes**3D Canvas Mapmaking Pack 5.6**> - Added new scene panel with easy access to basic scene configurations> - New Environment panel to quickly change skybox\time of day

## Version 4.9.9
Another update in a small series of updates to iron out as many kinks as possible before moving to 3D Canvas 5.0 which will have a lot of under the hood library updates.> - Disabling shaders in the settings will now only disable heavy hitters (fire,lighting,ice,oil) since other shaders are essential for using the map (such as the gradient shader) and are not nearly as demanding>> - Fixed mouse interaction on tokens where tokens could be moved accidentally when doubleclicking>> - Reverted some of the control changes on template placement on spell cast, refer to the ingame tooltip for current keybindingsDownload: https://www.patreon.com/posts/80308760

## Version 4.9.9
(sorry for the double update :p)> - Tokens turning transparent when dragging has been removed in favour of removing the stuttering on first drag>> - Lights no longer cause freezing on first creationDownload: https://www.patreon.com/posts/80295588

## Version 4.9.9
> - Decals can now be rotated to project on vertical surfaces (eg walls)>> - FoW is now enabled by default on new scenes>> - Multithreading is now enabled by default>> - Saving camera position while in First person mode will load the scene in first person mode (if the user has at least one owned actor in the scene)>> - Minor fixesDownload: https://www.patreon.com/posts/80285317

## Version 4.9.9
> - New Decal Dynamesh>> - New Effect browser (update 3D Canvas Mapmaking pack) that will leverage the new Decal for quick drop in effects>> - Ruler will now read Range Bands from Hover Distance>> - Other minor fixes\improvements>**3D Canvas Mapmaking Pack 5.5**> - Added new Effect BrowserDownload: https://www.patreon.com/posts/80200321https://youtu.be/qD-TZj6Kylg

## Version 4.9.8
> - Added Left click and hold as an alternative way to PING (hold shift to move camera)>> - Added setting for tiles to highlight them when hovered while in the token layer>> - Tiles with MATT "Pointer" option enabled will recive the above effect as well as non secret doors>> - Fixed bug where tokens could be randomly hovered and get stuck in that hover state until another token was hovered**Compatibility**> - DFreds Droppables and Item Piles are now compatible with 3D Canvas, big thanks to @Wasp and <@283111808351600650>https://www.patreon.com/posts/80055870

## Version 4.9.7
> - Updated Pings visual, added customizable sound effect>> - Cursors will now use last known position to prevent flickerhttps://streamable.com/xfa6tlhttps://www.patreon.com/posts/80021923

## Version 4.9.6
> - Refactored Drag and Drop to canvas logic to allow modules such as** DFreds Droppables** and **Item Piles** to easly add compatibility (hopefully coming soon)>> **Template Changes**>> - Added Tilt field into template configuration>> - Changed controls for placing templates on item use\spell cast: Mouse wheel will change elevation, Ctrl + Mouse wheel will rotate, Alt + Mouse wheel will tilt. These controls allow for more mobility and are more similar to the controls used for other stuff in 3D Canvas>> **Shaders**>> Overlay shader has now an inclination option>> **Controls**>> Added new button to scene navigation controls to toggle **Distance Fog** for GMshttps://streamable.com/v8m32e

## Version 4.9.5
> - Tokens now default with "Auto Center" disabled>> - Auto Merging will now take Occlusion IDs from Better Roofs into account>> - Added Macro to unMerge all tiles>> - Added Russian localization>> - Minor bugfixes

## Version 4.9.4
> - Added PF2E Support to template effects>> - Added PF2E implementation of template placement when casting a spell\clicking place template in a chat message>> - The new implementation tries to catch systems that use dnd and\or pf2e as a base in an attempt to implement template placement in those as wellThanks to <@104263996810469376> for making the necessary fixes\updates in the pf2e system to make this workhttps://www.patreon.com/posts/79825935

## Version 4.9.3
Fixed shader issues that prevented some objects from renderinghttps://www.patreon.com/posts/79644241

## Version 4.9.2
- Fixes and improvements to the new Height\Flying indicator to make it more performant and snappy- Added new functionality to the overlay shader (offset, rotation, reverse coverage)https://www.patreon.com/posts/79550551

## Version 4.9.1
- Added new Color Swap Shader, this shader will let you swap individual colors of a given model to create variations and more!

## Version 4.9
- Added vertical indicators for flying tokenshttps://i.imgur.com/JcUgxJo.pnghttps://www.patreon.com/posts/79459327

## Version 4.8.1
**NEW SHADERS!**Added bounce and orbit shaders, check out the video!Release: https://www.patreon.com/posts/79230082https://streamable.com/yk09qz

## Version 4.7.6
> - Fixed outlines triggering in wrong layer> - Fixed lights with less than 360 angle not beeing positioned correctly> - Lights now show the wireframe of the light range while in the lighting layer, this can be disabled in the settings> - Lights can now be tiltedhttps://www.patreon.com/posts/77902321

## Version 4.7.0
> **Localization update:**> Added localiziations for German, Spanish, French, Italian, Japanese. These localizations are machine translated, if you wish to check and correct the localizations you can do so by opening the JSON file with a text editor, feel free to submit the corrected file!>> **Refactor**> A lot of internal refactor of some code and folder structure. Everyhting should be working normally, but if you experience issues let me know and i'll get it fixed as fast as possible!https://www.patreon.com/posts/77522310

## Version 4.6.5
> - Massive performance improvements on the multithreading, it should now handle massive maps without issue (around a 60x perf boost)>> - Map browser will higlight packs in red if they are not installed>> - Clean up on first person modehttps://www.patreon.com/posts/77313660

## Version 4.4.15
- Fixed some small issues with the new Community Maps featurehttps://www.patreon.com/posts/76247017

## Version 2.4
**Added Pre-Loading of scenes.** When preloading a scene normally, if any 3d asset is present it will be preloaded as well, keep in mind that due to how the foundry preloading works the progress of the 3d assets will not be displayed in the bar but the assets will preload in the background.**Door\Walls Separation.** Split the options to render doors\walls so you can disable only the walls while keeping doors visible, especially usefull if you make you map in blender then wall it in foundry!**Bugfix**Lights\Walls\Tiles should no longer appear when moved in the 2d cavas if the rendering of those is disabled in the 3d scene settingsYou can get access to 3D Canvas by subscribing to the early access tier or above https://theripper93.com/https://youtu.be/h_EZ08wD4c4

## Version 2.3
Notes have been added to 3D Canvas

