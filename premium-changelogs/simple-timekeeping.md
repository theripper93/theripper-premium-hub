## Version 1.1.2
- Clarified wording on PF2 warning

## Version 1.1.1
- Fixed 1 day offset in day picker
- Fixed gregorian calendar day of the week matching

## Version 1.1.0
- Updated time logic for v13 update. WARNING, BREAKING: Due to core changes this will shift timestamps, unfortunatelly there is no solution or migration besides fixing the dates manually, sorry for the inconvinience

## Version 1.0.6
- Improved darnkess curve so that dawn time is already bright and dusk is already dark
- Added plain style visual setting
- Dawn\dusk settings are now hidden if a climate zone is selected

## Version 1.0.5
- Fixed disaply issue in date picker
- Fixed issues with month repeating events
- Fixed issues with leap year calculations

## Version 1.0.4
- Corrected starting weekday for gregorian calendar

## Version 1.0.3
- Switched calendar calculations to slower but more exact logic

## Version 1.0.2
- Added barovian calendar
- Fixed weekdays in Harptos calendar
- Fixed day of week calculation under some circumstances

## Version 1.0.1
- Fixed some issue with some calendar data added by simple timekeeping not beein validated correctly
- Added top offset setting to move the widget vertically
- Moved days offset under days display setting since they are related and added hint

## Version 1.0.0
- Supporter release
- Added configure menu button in module settings in the event that the configure button in the module becomes unreachable

## Version 0.7.18
- Darkness update is now limited only to viewed and active scenes

## Version 0.7.17
- Added data validation for custom moons

## Version 0.7.16
- fixed issue with darkness syncronization not working after one scene was found with syncronization disabled
- fixed issue with year calculations on calendars with no leap yeras

## Version 0.7.15
- Fixed issue with custom moons not working correctly

## Version 0.7.14
- Fixed error thrown when no moons are present on the calendar

## Version 0.7.13


## Version 0.7.12
- Fixed validation issue

## Version 0.7.11
- Added further data validation

## Version 0.7.10
- Added data validation for calendar to prevent the module from locking up due to bad data
- Added setting to force simple timekeeping to be always at max width

## Version 0.7.9
- Added PF2 warning
- Fixed typo

## Version 0.7.8
- Added option to separate darkness and weather sync

## Version 0.7.6
- Time badge now blinks if time is paused
- Clicking the time badge now manually pauses time

## Version 0.7.6
- Fixed some in-progress event not highlighted

## Version 0.7.5
- Reverted last change
- In progress events now show in progress text instead of start date

## Version 0.7.4
- Localization fix

## Version 0.7.3
- Removed event end and replaced it with an event duration

## Version 0.7.2
- Fixed issues with repeated events not working correctly

## Version 0.7.1
- Fixed issue with first time setup setting causing error
- removed unecessary libwrapper dependency

## Version 0.7.0
- Added first time setup window
- Renamed latitude to climate zone and change it to a select dropdown instead of a range slider

## Version 0.6.4
- Fixed moon phase calculation not checking if user was gm when setting the moon badge

## Version 0.6.3
- Clicking on a custom badge will open a quick edit dialog
- Shift clicking on a custom badge will increase or (right click) decrease the last number in the badge, if any
- Latitude based dawn\dusk calculations improved for more realism
- Events name are now updated immediatelly after changing them instead of beein updated on the next time update

## Version 0.6.2
- Improved support in case of system defined calendar
- Added separate moon customization json to settings in case user is using the system provided calendar
- Darkness is now synced across all viewed scenes by all users
- Other minor fixes

## Version 0.6.1
- Added button to weather list to regenerate weather
- Added more localizations

## Version 0.6.0
- Clicking a custom badge now brings up a quick edit menu
- Custom badges now support HTML which means you can use custom images as icons and so on
- Added more automation macros for different times of day

## Version 0.5.7
- Removed some season override code that was causing issue now that seasons calculations are fixed in core foundry

## Version 0.5.6
- Added option for AM/PM time display

## Version 0.5.5
- Fixed date-time picker beeing one day off from current date

## Version 0.5.4
- Hiding simple timekeeping in combat is now an option (default off)

## Version 0.5.3
- Added and fixed dragonlance calendars
- Weather menu now renders in two columns so that lower resolution screens don't have issues with the context menu rendering upwards due to a core context menu bug

## Version 0.5.2
- Added alt\shift\ctrl modifiers to time advancement for different increments

## Version 0.5.1
- Style fix for badges

## Version 0.5.0
- Added new settings to customize the font to make it more compact for users that want a lot of badges on at the same time
- Seasons tab renamed to aspect tab
- Added new day macros field where macros can be run automatically when a new day starts 

## Version 0.4.1
- Fixed weekday display for intercalary

## Version 0.4.0
- Added support for intercalary days (as months) and updated the harptos calendar

## Version 0.3.1
- Added more calendars and fixed some broken ones

## Version 0.3.0
- Added built in calendars

## Version 0.2.1
- Fixed default not grabbed correctly in weather genratio

## Version 0.2.0
- Added weather customization for advanced users

## Version 0.1.8
- Fixed moon offset beeing wrongly read
- Changed sheet creation method to support any journal sheet

## Version 0.1.7
- Fixed date picker returnig a date one off by one day
- Badges will now wrap to a new line if they don't fit instead of overflowing

## Version 0.1.6
- Improved error handling in case of bad data so that you can always edit the calendar json
- Added custom badge setting api

## Version 0.1.5
- Added macro command to reset custom calendar

## Version 0.1.4
- Fixed issue with weather effect applications

## Version 0.1.3
- Season are now correctly determined instead of beeing shifted by 1
- Day of month is now correctly displayed instead of beeing 1 behind
- Changing calendar json no longer requires a refresh

## Version 0.1.2
- Fixed issue when setting weather badge

## Version 0.1.1
- Fixed issue of module crashing when no seasons are present in the calendar

## Version 0.1.0
- Initial release

