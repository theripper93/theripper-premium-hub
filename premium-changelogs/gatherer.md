## Version 4.1.2
- Changed buttons handling for increased module compatibility
- Readded header in edit window
- Improved edit window styling

## Version 4.1.1
- Fixed compendium migration not working

## Version 4.1.0
- Updated to AppV2
- Migrated from using Text journal page to Custom Gatherer Type journal page
- Added support for nested tables
- Added support for non-item table results (eg: actors, text)
- Added option to alter quantity based on DC result

## Version 4.0.2
- Fix ability checks in dnd5e

## Version 4.0.1
- Fixed issue with roll table results not in compendiums

## Version 4.0.0
- V13 Update

## Version 3.0.9
- updated roll tool logic for latest dnd version

## Version 3.0.8
- added gathering api

## Version 3.0.7
- Expression field will use an existing macro if a macro name is provided

## Version 3.0.6
- Fixed harmless error upon gathering

## Version 3.0.5
- Fixed some issues with GM data forwarding which failed to update the remaining draws on harvestable tokens

## Version 3.0.4
- Fixed issue with harvesting logic running for both player and gm causing an (harmless) error

## Version 3.0.3
- Forgot to remove dependency from manifest

## Version 3.0.2
- Removed socketlib dependency in favor of internal library

## Version 3.0.1
- Added workaround for rolling module bugs

## Version 3.0.0
- V12 update

## Version 2.3.7
- Fixed quotes in image css

## Version 2.3.6
- Fixed missing quotes in image url preventing files with spaces from working

## Version 2.3.5
- Added setting to configure system item quantity

## Version 2.3.4
- updated tool check logic

## Version 2.3.3
- Fixed issue with image path with special characters not showing

## Version 2.3.2
- updated for new better rolltables version

## Version 2.3.1
- added CN translation

## Version 2.3
- Fixed resource path for harvesting creatures not working correctly

## Version 2.2
- Small fix for deprecated method

## Version 2.1
- When harvesting, if no resource path is set , gatherer will allow the harvest operation

## Version 2.0
- Added new `Gatherer` header button to non-player-owned actors
- You can now assign a gatherer page to an actor, if the actor can be harvested players will be able to gather resources from it
- Added hotkey (Shift+G) to gather resources from an actor

## Version 1.6
- Added pre gather hook

