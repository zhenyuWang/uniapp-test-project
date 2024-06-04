module.exports = {
    "is-custom-runtime": false,
    "compile": true,
    "h5": {
        "options": {
            "headless": false
        },
    },
    "mp-weixin": {
        "port": 9420,
        "account": "",
        "args": "",
        "cwd": "",
        "launch": true,
        "teardown": "disconnect",
        "remote": false,
        "executablePath": "/Applications/wechatwebdevtools.app/Contents/MacOS/cli"
    },
    "app-plus": {
        "android": {
            "id": "emulator-5554",
            "executablePath": "/Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/launcher/base/android_base.apk"
        },
        "version": "/Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/launcher/base/version.txt",
        "ios": {
            "id": "F01B89BE-6BA8-43FA-AC54-442BC6BD4937",
            "executablePath": "/Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/launcher/base/Pandora_simulator.app"
        }
    }
}