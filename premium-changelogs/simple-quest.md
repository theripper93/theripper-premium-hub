## Version 0.9.35
- Fixed quest document links borken with last patch
- Added new Theme menu

## Version 0.9.34
- Added one missing permission check

## Version 0.9.33
- Added permission checking for page opening
- Every tab now has a searchbar

## Version 0.9.32
- More NUE updates, sample Lore, Page Templates tour

## Version 0.9.31
- Added tours

## Version 0.9.30
- Right clicking a Tab will open the Tab configuration where you can rename tabs
- Fixed marker preview when placing not working
- When clicking a marker linked to a macro, the macro will be executed
- Added new helper macro command ui.simpleQuest.sceneToMap() that will make the currently viewed scene into a Map page
- Added "Move to" dropdown to lore pages

## Version 0.9.29
- Party\Shared journal now correctly save scroll position
- Fixed clicking on markers activating drag
- Added method to open simple quest to tab which was documented in the wiki but not in the actual code

## Version 0.9.28
- Added new character grid templates
- Simple quest will now intercept content links and open them within simple quest if they are a simple quest document - you can hold CTRL to open a content link normally
- Clicking content links in modals will open the target as a modal

## Version 0.9.27
- Added more journal templates
- Added ruler line to map measurement tool

## Version 0.9.26
- Added more journal templates
- journal templates now ask for the image for better user experience

## Version 0.9.25
- Fixed issue with font setting
- Added hide\unhide buttons to Lore tab that will toggle user permission on the page
- New Lore items will now be created with default observer permission

## Version 0.9.24
- Fixed critical issue that would leave new install in a state where new quests would be created in the Lore section if the user deleted the welcome quest then created a lore page with no other quests existing

## Version 0.9.23
- Added ruler tool to map tab
- Added marker lock button to map tab
- Quests containing Headers will now be indented in the quest list

## Version 0.9.22
- Added new Lore tab
- Added safeguards against map zoom locking
- changed underlying logic for right click map interactions to be less janky

## Version 0.9.21
- Added new Page Templates - You can access them from the `Page Template` button in the edit journal page header buttons!

## Version 0.9.20
- Journal pages linked to Map Markers will be opened as modals within the map (you can disable this in the settings)

## Version 0.9.19
- Fix for some theme modules breaking simple quest dialog themes
- Fixed odd behaviour of callouts\inserts
- Changed proportions of simple quest grid layout in tabs other than quest
- Improved some apis
- Added @QUEST content link to link directly to quests

## Version 0.9.18
- Setting Levels in Maps journal pages will mirror the indentation in the simple quest map tab

## Version 0.9.17
- Fixes on marker interactions
- Added some extra icons

## Version 0.9.16
- Added icon set to the module
- Map icons now support images
- Added scale option to map icons
- Drag and dropping basically anything onto the map will create a pin linked to that object (eg, iamges, actors, scenes, quests)

## Version 0.9.15
- The Callouts, Page inserts and future extra journal styles have been added to the Prosemirror Menu
- Added optional sound effects for a new quest\quest update (no sound is set by default)

## Version 0.9.14
- The Callouts, Page inserts and future extra journal styles have been added to the Prosemirror Menu
- Added optional sound effects for a new quest\quest update (no sound is set by default)

## Version 0.9.14
- added new custom inserts for your journals!

## Version 0.9.13
- Removed flickering when editing something on a map due to saves
- Fow now saves instantly upon mouse release instead that using a timer
- Added custom callouts you can use to enrich your quests!

## Version 0.9.12
- Update for 3D Portraits support

## Version 0.9.11
- Fog of war should now handle an unlimited amount of nested holes
- When holding shift, the fow brush will appear instead of the cursor
- Alt clicking a marker will toggle the Hidden state
- FoW is now semi transparent for GMs
- While holding shift to draw FOW, scroll wheel will change brush size

## Version 0.9.10
- Added Fog of War capabilities to the map tab

## Version 0.9.9
- Added capability for Super resolution maps, see the wiki for the how to

## Version 0.9.8
- Fixed bug that deleted map markers on left click

## Version 0.9.7
- Fixed issue with Map Marker repositioning
- Maps can now be set to Secret

## Version 0.9.6
- Replaced close button with button to toggle windowed mode
- Holding right click on a map will show a preview of the marker position which will be created when releasing
- Right click drag on an existing marker will grab and move the marker

## Version 0.9.5
- Fixed deletion of markers not working
- If a marker points to another Map, the map will be opened instead of opening it as a popup

## Version 0.9.4
- If a marker uuid object is a Scene, Simple Quest will view that scene
- If a marker is a quest journal, Simple quest will switch to the appropriate quest in the quest tab

## Version 0.9.3
- Changed internal data structure for map markers, any markers you have will be deleted

## Version 0.9.2
- Added new Map tab!

## Version 0.9.1
- Polished some styles 
- Moved the create quest button to a single button on top of the quest list
- Added a create category button
- Right clicking a category will open it's journal page
- The setting to disable notifications now actually does something

## Version 0.9
- @time enricher now requires exact date time syntax using the international time format @time[yyyy/mm/dd, hh:mm]
- Added new Notification system, whenever a quest objective is updated or a hidden objective is revealed every user will recive a toast notification. This can be disabled in the settings

## Version 0.8.3
- Attempt fix at date again

## Version 0.8.2
- Fix fo the previous time fix

## Version 0.8.1
- Possible fix for time parsing\calculations on the @time tag

## Version 0.8
- Sub-quests can now be hidden
- Added new "!" marker to indicate new quests - the GM can manually mark a quest as "updated\new" and the updated status will be automatically added when an objective is checked\unchecked or an objective is un-hidden

## Version 0.7
- Collapsed\Expanded status of Categories or Multiquests is now preserved
- Added better error handling for missing party\personal journal

## Version 0.6
- Added new custom time enricher to add timestamps to your journals

## Version 0.5
- Adjusted some styles
- Added welcome screen
- Added button to Post a quest to chat as a "New Quest" notification
- Added demo quest with tutorial, this is only created the first time you enable the module, you can add the demo quest manually with the `ui.simpleQuest.createDemoQuest()` macro
- Added "subquests", when a quest contains Headings 1 or 2 they will be shown also in the quest list
- Minor fixes

## Version 0.4
- Fixed bug with hidden objectives counting towards quest count
- Fixed sorting bug with both categories (journals) and quests (pages) order not beein correctly mirrored
- Added font size buttons at the bottom right of Simple Quest
- Added setting to chose the default font for Simple Quest
- Pressing the Escape key now closes Simple Quest

## Version 0.3
- Fixed issue with marking objectives as hidden

## Version 0.2
- Added Delete quest and duplicate quest to the quest control buttons
- You can now right click a quest objective checkbox to mark it as failed
- Added Add quest and hide quest buttons to the quest list
- Adjusted some styles
- By default the Quests folder will be hidden from players

## Version 0.1


## Version 0.1


## Version 0.1
- Initial Release

