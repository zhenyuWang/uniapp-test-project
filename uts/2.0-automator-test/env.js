module.exports = {
    "is-custom-runtime": false,
    "compile": true,
    "h5": {
        "options": {
            "headless": false
        },
        // "executablePath": "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
        "executablePath": ""
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
            "id": "",
            "executablePath": ""
        },
        "version": "",
        "ios": {
            "id": "",
            "executablePath": ""
        },
        "uni-app-x": {
            "version": "/Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniappx-launcher/base/version.txt",
            "android": {
                "id": "emulator-5554",
                "executablePath": "/Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniappx-launcher/base/android_base.apk"
            }
        }
    }
}