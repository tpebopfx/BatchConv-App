[app]
title = BatchConv
package.name = batchconv
package.domain = org.batchconv
source.dir = .
source.include_exts = py,png,jpg,jpeg,webp,gif,bmp,svg,ico,html,css,js,md,json,txt
source.exclude_dirs = .git, __pycache__, output, uploads, logs, TempUploads, bin
version = 1.0.0
requirements = python3,kivy,flask,pillow,pyjnius
orientation = portrait
fullscreen = 1
exit_on_escape = 0
presplash.filename = ui/assets/icon.png
android.presplash_color = #0d0d10
icon.filename = ui/assets/icon.png
android.api = 34
android.minapi = 24
android.ndk = 25b
android.archs = arm64-v8a, armeabi-v7a
android.permissions = INTERNET,ACCESS_NETWORK_STATE,READ_EXTERNAL_STORAGE,WRITE_EXTERNAL_STORAGE,READ_MEDIA_IMAGES,READ_MEDIA_VIDEO,READ_MEDIA_AUDIO

[buildozer]
log_level = 2
warn_on_root = 1

[packages]
# keep empty
