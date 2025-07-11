## Version 5.0.2
- Fixed issue causing all images to be duplicated when uploading multiple images that are oversized and needed shrinking

## Version 5.0.1
- Fixed file upload

## Version 5.0.0
- V13 update

## Version 4.0.3
- Rewritten sorting logic that could result at times in sorting errors when combining tiles

## Version 4.0.2
- Fixed issue with tile combiner not opening 

## Version 4.0.0
- Revamped module with new Appv2 for a fresh interface and dark mode support

## Version 3.0.3
- Fixed tile combiner not reading modified file name if clean name option is enabled

## Version 3.0.2
- Added api endpoint to call the merge tiles function

## Version 3.0.1
- Added `CONFIG.SUPPRESS_MEDIA_OPTIMIZER` check for module developers to temporarelly suppress all media optimizer features if they wish to do so

## Version 3.0.0
- V12 release

## Version 2.0.4
- ignore background if user selects to include the background but no background is set in the scene

## Version 2.0.3
- Added flag checking to Bloat detector

## Version 2.0.2
- Added document inspection to bloat detector

## Version 2.0.1
- Added suggestion for large collections

## Version 2.0
- Added new Bloat Detector feature, you can access it in the settings

## Version 1.9.1
- Clean file name now works even if the file is not converted

## Version 1.9
- Fixed tint and scale non working correctly in the tile combiner

## Version 1.8
- GIF is now converted to WebM (video) instead of WebP (image)

## Version 1.7
- Media Optimizer is now able to load images larger than your GPU supported resolution and resize them accordingly- Mergin tiles\scenes larger than max resolution will now work and resize the combined image down to a usable resolution

## Version 1.5
- Fixed folder with spaces failing uploads- Fixed mass converter always throwing a "wrong extension" error at the end (it was harmless)- Added new option to slugify names on upload (eg "My !($FIL)è that will%BReak mods.jpeg" -> "my-file-that-will-break-mods.jpeg") This is ON by default

## Version 1.4
- Added new Mass Optimizer, to convert existing files

## Version 1.3
- Added new Tile Combiner feature which is able to merge multiple tiles and the scene background into a single image.

