## Version 2.2.5
- Update CN localization

## Version 2.2.4
- Fixed duplication of page inputs when switching between windowed and fullscreen
- Fixed issue when deleting achievements after creating one or more

## Version 2.2.3
- Fixed updated quest notification not showing

## Version 2.2.2
- Achievements will only show players with assigned characters
- Added check to internal api to verify an entry is not from a compendium when cheking if it's a simple quest page

## Version 2.2.1
- Fix achievement creation when no achievements are present

## Version 2.2.0
- Added new Achievements Tab!

## Version 2.1.1
- Fixed notifications shown when they should not

## Version 2.1.0
- Lore: Revealing lore now shows a notification
- Lore: Unread lore now has a question mark icon
- Map: Added option for fixed marker size
- Journals: New NPC and Location Callouts
- Journals: Added PDF page support

## Version 2.0.6
- updated pt-BR translation, thanks `@kharmans`

## Version 2.0.5
- Fixed prosemirror styles not working correctly

## Version 2.0.4
- Fixed right side timeline events missing some visual indicators

## Version 2.0.3
- Fixed mermaid dynamic import not beeing dynamic

## Version 2.0.2
- `.` characters at the end of an objective no longer trip up the data structure

## Version 2.0.1
- Fixed issue that would keep remaking party folders due to a v12 change

## Version 2.0.0
- V12 Update

## Version 1.5.9
- Images in quest and lore tabs are now clickable to pop out  in the same way as core journals

## Version 1.5.8
- Fixed scroll position persistence in some tabs
- Fixed styling issues in Bar type reputation for improved text contrast

## Version 1.5.7
- Reputation can now be displayed as a bar

## Version 1.5.6
- Reputation enricher now supports a range instead of just a max value

## Version 1.5.5
- Font awesome icons will be autocompleted if the FA syntax is missing

## Version 1.5.4
- Reputation enricher now supports font awesome icons

## Version 1.5.3
- More style fixes (whops)

## Version 1.5.2
- Fix to the new faction styles to make them scale based on font size

## Version 1.5.1
- Mermaid graphs now match your chosen theme
- Added new @REPUTATION enricher - which is basically a fancy @COUNT enricher

## Version 1.5.0
- Simple Quest now includes a mindmap and charting library (Mermaid) - See the wiki for links on how to use the system!

## Version 1.4.1
- Reduced padding in the Map section to have more space for the map
- Quest and journals tabs can now be disabled
- Mask image for image pages can now be globally removed or customized

## Version 1.4.0
- Added toggle to hide completed quests

## Version 1.3.9
- Fixed lists not beeing correctly displayed in Personal\Shared journals
- Added checkbox to ignore data validation in timelines in the event that you need to reorganize Eras after the fact

## Version 1.3.8
- Added new Label field for Timeline which can be used to add arbitrary information (such as an exact Date)

## Version 1.3.7
- Quests are now correctly indented based on the page level

## Version 1.3.6
- Added duration to timeline events
- Changed "-" year separator to "to" to avoid confusion with negative years
- Timeline is no longer BETA
- Added Timeline Tab Tour

## Version 1.3.5
- Fixed some issues with timeline data validation
- Added new option to flip an event for space management
- Added offset option to events to manually offset the position of an event
- Improved configuration screen

## Version 1.3.4
- Fixed issues with eras added not at the end
- improved era data validation
- descriptions can now be collapsed
- Minus sign can now be preserved on negative years when abbreviations are present

## Version 1.3.2
- Added better data validation for timeline
- Adjusted some styles for better layout
- Contents of events\eras now have a maximum height
- Added new Dynamic Scale option

## Version 1.3.1
- Fixed pages uuid links from compendiums not working
- Timeline Updates:
- Events can now be hidden
- Cleaned up what is shown to players
- Added custom scrollbar for better navigation
- Addedd events dots and (optionally) icons
- Improved left bar navigation
- Improved clarity on configuration screen
- Editing an event is now done using the top right cog icon
- Added time scale setting
- Events now have an era label which can be clicked to jump up to the era
- better error handling that could crash the timeline
- Events\Eras can now be edited also by right clicking left navigation entries in case something goes wrong

## Version 1.3.0
- Headers within secrets will no longer show in the lore tab table of contents
- new Timeline feature (beta)

## Version 1.2.1
- Move To which was not working after last update is now fixed
- Dropping headers onto the Map or onto the Marker config will now correctly add headers to the UUID, The modals will also correctly open onto the specified anchor
- The new player folder journals structure no longer requires a second reload on first initialization

## Version 1.2.0
- Party and Shared journal now have a multi-journal structure akin to the Lore tab. This is a big update- make sure all the data was migrated successfully!
- Refactored a lot of code to allow for the new party\personal journal tabs, do not update right before a session

## Version 1.1.5
- TTM remote urls will now work as long as the https:// part is removed from the link
- same-name headers will can now be navigated to

## Version 1.1.4


## Version 1.1.3
- Category quest count should now take into consideration the "use journal permission" setting correctly

## Version 1.1.3
- party journal is now created correctly in the event that it's missing

## Version 1.1.2
- Reverted latest breaking change as it had too many implications compared to the benefits

## Version 1.1.1
- Added localization for the default journals as well

## Version 1.1.0
- BREAKING: Default names for quests forlder\lore\party are now localized, if you were using the module in a non-english language and didn't change these defaults, you might have to tweak them in the settings!
- Party Journal now automatically updates if new players are added to the game and will still be created during initialization if you already had a Quests folder

## Version 1.0.6
- Fix for TOC links 

## Version 1.0.5
- Videos in TTM now loop as intended

## Version 1.0.4
- Fixed issue with some images not loading in TTM enricher

## Version 1.0.3
- small hotfix for possible interface locking up

## Version 1.0.2
- Fixed issue with files with spaces in the TTM enricher
- Added CN translation

## Version 1.0.1
- Small fixes and improvements to the TTM enricher

## Version 1.0.0
- Added max zoom for maps
- Various smaller bug fixes
- Added new @TTM enricher

## Version 0.9.63
- Fixed lists not displayed correctly in party\personal journals

## Version 0.9.62
- Fixed font not beeing applied correctly

## Version 0.9.61
- Fixed custom tab names that were mistakenly set as a client setting instead of a world setting

## Version 0.9.60
- Added image page support for map modals

## Version 0.9.59
- Added video support for markers

## Version 0.9.58
- Added support for image type pages

## Version 0.9.57
- Fixed journal templates with no image not working correctly

## Version 0.9.56
- Fixed keybinding priority

## Version 0.9.55
- Content links with headers now work correctly
- Auto scrolling to headers now aligns to the top

## Version 0.9.54
- Fixed scene to map macro not bringing over pages

## Version 0.9.53
- You can now set a Fog of War image in the Map tab, you can do so in the Image Journal page of the corresponding map

## Version 0.9.52
- Changed requiremts for a marker movement to count as such to allow for more fine movements

## Version 0.9.51
- Fix for scene to map macro

## Version 0.9.50
- Fixed multi image support issue

## Version 0.9.49
- Better handling in the event that no quests are present
- Fixed maps with special symbols in the names not working correctly

## Version 0.9.48
- Fixed issue with players not beeing able to pan the map or see measurement units

## Version 0.9.47
- Inverted Left\Right click behaviour on map tab to match Scene behavour
- Selected tab now persists between refreshes

## Version 0.9.46
- More fixes to scroll position restoring

## Version 0.9.45
- Fixed some issues with scroll restoring
- Markers with visible label and no description will not display tooltips
- Added setting to globally override the color of Labels

## Version 0.9.44
- added new @COUNT[id]{max} enricher
- small fixes to styles

## Version 0.9.43
- Fixed some issues related to windowed mode

## Version 0.9.42
- Quests or subquests with all objectives completed will be styled with a strike through in the quest list

## Version 0.9.41
- Added global lore search
- Fixed theme inversion not working in widowed mode
- Added setting to attempt to inherit core\system journal styling

## Version 0.9.40
- Added new DnD5e theme, if you have dnd5e 3.0 installed
- Modified background color logic to accept css stings for advanced users
- Added option to invert the theme

## Version 0.9.39
- Changed content link styling to be more in line with the overall simple quest ui
- Macros executed via markers will recive the markers data as arguments, more info in the wiki

## Version 0.9.38
- New `Wiki` and `Event` templates

## Version 0.9.37
- Fixed character template

## Version 0.9.36
- Fixed measurement tool working only for GMs
- small tweaks to NUE
- Added open for players button

## Version 0.9.36
- Fixes to some animations
- Added theme button in the font size area

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

