## Version 1.1.2
- Fixed some skills prevented from removing poitns incorrectly
- Added extra wait times between adding\removing skill points to prevent database inconsistency
- Fixed display of total points occasionally glitching out due to missing string parsing

## Version 1.1.1
- Fixed single item multiple items rule not working as intended

## Version 1.1.0
- Added new "allow incomplete progression" option which if set will allow continuing on the tree even if a skill is not fully unlocked

## Version 1.0.2
- Fixed linked skill rule override not working correctly
- UUID document fields will now accept only the right type of document

## Version 1.0.1
- Removed leftovers of test fullscreen feature

## Version 1.0.0
- Fixed some layout and style issues
- Supporter release

## Version 0.4.6
- Fixed lockout property not correctly saving

## Version 0.4.5
- Fixed incorrect error handling of faulty drawn links
- Fixed migration to also include lockout skills

## Version 0.4.4
- Skill Trees now match the same sort order of the journal sidebar
- Switched item creation to item implementation to maximize system integration
- Showing skill points per group is now optional (default off) you can change it in the skill tree configuration

## Version 0.4.3
- Edit Skill form now has edit tooltip button
- Journals which are Skill Trees now have a Skill tree button in their header to open the skill tree editor for that journal

## Version 0.4.2
- Fixed onunlock script not beeing correctly assigned a name in the skill config form making it not fire

## Version 0.4.1
- Interface will now show total points in the tree (spent + current)
- Interface will now show points spent in each group

## Version 0.4.0
- Restored settings explanation in skill tree configuration
- Trees can now have skill points handled indipendently
- Skills have a new Lockout option, any unlocked skill in the lockout list will prevent the skill to be unlocked

## Version 0.3.4
- Clicking on an empty slot will now create a skill with no items connected
- Drag and dropping a skill into another skill will now set the dropped on skill as requirement for the dragged one (or remove it if it's already a requirement)
- Edit mode now has arrows that show directionality of skill links

## Version 0.3.3
- Fixed title line height in tooltips
- Fixed issues with skill tree header icon not showing under various circumstances
- Added new setting to prevent players from changing amount of points
- Added new setting to prevent players from removing points from an unlocked skill

## Version 0.3.2
- Fixed issue with skil shapes under some circumstances

## Version 0.3.1
- Fixed issue with requirements data handling

## Version 0.3.0
- Added new requirements tab to skill configuration

## Version 0.2.2
- Moved skill tree config into it's separate window for more working space
- Layout improvements
- Internal data improvements
- Warning is now displayed if actor has access to no skill trees and none is selected
- Fixed issue with granting items upon leveling a skill

## Version 0.2.1
- Fixed macro condition evaluation
- Changing skill style will now reflect in edit mode

## Version 0.2.0
- Fixed many layout issues, specifically related to scrolling on multiple applications
- Reworked skill configuration to have tabs
- Color\shape can now be customized per skill by overriding the global config
- Skill trees will now show for players depending on their permissions on the corresponding journal, they will need observer permission
- Added setting to not display the header button on non player owned actors
- Fixed issue preventing groups from beeing deleted
- Fixed close button not closing the application

## Version 0.1.1
- Configuration forms are now scrollable
- Implemented workaround for MEJ breaking core journal creation dialog

## Version 0.1
- Initial Release

