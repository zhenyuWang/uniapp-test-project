58.048 [hello-uni-app-x:ios-F01B89..] › 79 snapshots written.
21:50:58.048 [hello-uni-app-x:ios-F01B89..] 
21:50:58.048 [hello-uni-app-x:ios-F01B89..] Summary of all failing tests
21:50:58.048 [hello-uni-app-x:ios-F01B89..] FAIL pages/API/nodes-info/nodes-info.test.js
21:50:58.048 [hello-uni-app-x:ios-F01B89..] 
21:50:58.048 [hello-uni-app-x:ios-F01B89..] ● nodes-info › get-root-node-info
21:50:58.048 [hello-uni-app-x:ios-F01B89..] 
21:50:58.048 [hello-uni-app-x:ios-F01B89..] 
21:50:58.048 [hello-uni-app-x:ios-F01B89..] 
21:50:58.048 [hello-uni-app-x:ios-F01B89..] at Q.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:3259)
21:50:58.048 [hello-uni-app-x:ios-F01B89..] at WebSocket.<anonymous> (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:1092)
21:50:58.049 [hello-uni-app-x:ios-F01B89..] at WebSocket.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/event-target.js:199:18)
21:50:58.049 [hello-uni-app-x:ios-F01B89..] at Receiver.receiverOnMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1137:20)
21:50:58.049 [hello-uni-app-x:ios-F01B89..] at Receiver.dataMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:528:14)
21:50:58.049 [hello-uni-app-x:ios-F01B89..] at Receiver.getData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:446:17)
21:50:58.049 [hello-uni-app-x:ios-F01B89..] at Receiver.startLoop (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:148:22)
21:50:58.049 [hello-uni-app-x:ios-F01B89..] at Receiver._write (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:83:10)
21:50:58.050 [hello-uni-app-x:ios-F01B89..] at Socket.socketOnData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1231:35)
21:50:58.050 [hello-uni-app-x:ios-F01B89..] 
21:50:58.050 [hello-uni-app-x:ios-F01B89..] ● nodes-info › get-node-info
21:50:58.050 [hello-uni-app-x:ios-F01B89..] 
21:50:58.050 [hello-uni-app-x:ios-F01B89..] TypeError: Cannot read properties of undefined (reading 'left')
21:50:58.050 [hello-uni-app-x:ios-F01B89..] 
21:50:58.050 [hello-uni-app-x:ios-F01B89..] 
21:50:58.050 [hello-uni-app-x:ios-F01B89..] 31 
21:50:58.050 [hello-uni-app-x:ios-F01B89..]      // TODO 和浏览器的计算存在差异
21:50:58.050 [hello-uni-app-x:ios-F01B89..] 32 
21:50:58.051 [hello-uni-app-x:ios-F01B89..]      const nodeInfo = data.nodeInfoList[0]
21:50:58.051 [hello-uni-app-x:ios-F01B89..] > 33 
21:50:58.051 [hello-uni-app-x:ios-F01B89..]      expect(Math.round(nodeInfo.left)).toBe(RECT_LEFT)
21:50:58.051 [hello-uni-app-x:ios-F01B89..] 
21:50:58.051 [hello-uni-app-x:ios-F01B89..]                                 ^
21:50:58.051 [hello-uni-app-x:ios-F01B89..] 34 
21:50:58.051 [hello-uni-app-x:ios-F01B89..]      expect(Math.round(nodeInfo.width)).toBe(RECT_WIDTH)
21:50:58.051 [hello-uni-app-x:ios-F01B89..] 35 
21:50:58.051 [hello-uni-app-x:ios-F01B89..]      expect(Math.round(nodeInfo.height)).toBe(RECT_HEIGHT)
21:50:58.051 [hello-uni-app-x:ios-F01B89..] 36 
21:50:58.051 [hello-uni-app-x:ios-F01B89..]    })
21:50:58.051 [hello-uni-app-x:ios-F01B89..] 
21:50:58.051 [hello-uni-app-x:ios-F01B89..] at Object.<anonymous> (pages/API/nodes-info/nodes-info.test.js:33:32)
21:50:58.051 [hello-uni-app-x:ios-F01B89..] 
21:50:58.051 [hello-uni-app-x:ios-F01B89..] ● nodes-info › get-all-node-info
21:50:58.052 [hello-uni-app-x:ios-F01B89..] 
21:50:58.052 [hello-uni-app-x:ios-F01B89..] TypeError: Cannot read properties of undefined (reading 'left')
21:50:58.052 [hello-uni-app-x:ios-F01B89..] 
21:50:58.052 [hello-uni-app-x:ios-F01B89..] 
21:50:58.052 [hello-uni-app-x:ios-F01B89..] 44 
21:50:58.052 [hello-uni-app-x:ios-F01B89..] 
21:50:58.052 [hello-uni-app-x:ios-F01B89..] 45 
21:50:58.052 [hello-uni-app-x:ios-F01B89..]      const nodeInfo1 = data.nodeInfoList[0]
21:50:58.052 [hello-uni-app-x:ios-F01B89..] > 46 
21:50:58.052 [hello-uni-app-x:ios-F01B89..]      expect(Math.round(nodeInfo1.left)).toBe(RECT_LEFT)
21:50:58.052 [hello-uni-app-x:ios-F01B89..] 
21:50:58.052 [hello-uni-app-x:ios-F01B89..]                                  ^
21:50:58.052 [hello-uni-app-x:ios-F01B89..] 47 
21:50:58.052 [hello-uni-app-x:ios-F01B89..]      expect(nodeInfo1.top > 220).toBe(true)
21:50:58.052 [hello-uni-app-x:ios-F01B89..] 48 
21:50:58.053 [hello-uni-app-x:ios-F01B89..]      expect(Math.round(nodeInfo1.width)).toBe(RECT_WIDTH)
21:50:58.053 [hello-uni-app-x:ios-F01B89..] 49 
21:50:58.053 [hello-uni-app-x:ios-F01B89..]      expect(Math.round(nodeInfo1.height)).toBe(RECT_HEIGHT)
21:50:58.053 [hello-uni-app-x:ios-F01B89..] 
21:50:58.053 [hello-uni-app-x:ios-F01B89..] at Object.<anonymous> (pages/API/nodes-info/nodes-info.test.js:46:33)
21:50:58.053 [hello-uni-app-x:ios-F01B89..] 
21:50:58.053 [hello-uni-app-x:ios-F01B89..] FAIL pages/API/element-takesnapshot/element-takesnapshot.test.js
21:50:58.053 [hello-uni-app-x:ios-F01B89..] 
21:50:58.053 [hello-uni-app-x:ios-F01B89..] ● element-takesnapshot › takeSnapshot
21:50:58.053 [hello-uni-app-x:ios-F01B89..] 
21:50:58.053 [hello-uni-app-x:ios-F01B89..] page `/pages/API/element-takesnapshot/element-takesnapshot` is not found
21:50:58.053 [hello-uni-app-x:ios-F01B89..] 
21:50:58.053 [hello-uni-app-x:ios-F01B89..] at Q.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:3259)
21:50:58.053 [hello-uni-app-x:ios-F01B89..] at WebSocket.<anonymous> (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:1092)
21:50:58.053 [hello-uni-app-x:ios-F01B89..] at WebSocket.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/event-target.js:199:18)
21:50:58.054 [hello-uni-app-x:ios-F01B89..] at Receiver.receiverOnMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1137:20)
21:50:58.054 [hello-uni-app-x:ios-F01B89..] at Receiver.dataMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:528:14)
21:50:58.054 [hello-uni-app-x:ios-F01B89..] at Receiver.getData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:446:17)
21:50:58.054 [hello-uni-app-x:ios-F01B89..] at Receiver.startLoop (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:148:22)
21:50:58.054 [hello-uni-app-x:ios-F01B89..] at Receiver._write (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:83:10)
21:50:58.054 [hello-uni-app-x:ios-F01B89..] at Socket.socketOnData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1231:35)
21:50:58.054 [hello-uni-app-x:ios-F01B89..] 
21:50:58.054 [hello-uni-app-x:ios-F01B89..] FAIL pages/API/download-file/download-file.test.js
21:50:58.054 [hello-uni-app-x:ios-F01B89..] 
21:50:58.054 [hello-uni-app-x:ios-F01B89..] ● ExtApi-DownloadFile › Check
21:50:58.054 [hello-uni-app-x:ios-F01B89..] 
21:50:58.054 [hello-uni-app-x:ios-F01B89..] 
21:50:58.054 [hello-uni-app-x:ios-F01B89..] 
21:50:58.054 [hello-uni-app-x:ios-F01B89..] at Q.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:3259)
21:50:58.054 [hello-uni-app-x:ios-F01B89..] at WebSocket.<anonymous> (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:1092)
21:50:58.055 [hello-uni-app-x:ios-F01B89..] at WebSocket.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/event-target.js:199:18)
21:50:58.055 [hello-uni-app-x:ios-F01B89..] at Receiver.receiverOnMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1137:20)
21:50:58.055 [hello-uni-app-x:ios-F01B89..] at Receiver.dataMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:528:14)
21:50:58.055 [hello-uni-app-x:ios-F01B89..] at Receiver.getData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:446:17)
21:50:58.055 [hello-uni-app-x:ios-F01B89..] at Receiver.startLoop (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:148:22)
21:50:58.055 [hello-uni-app-x:ios-F01B89..] at Receiver._write (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:83:10)
21:50:58.055 [hello-uni-app-x:ios-F01B89..] at Socket.socketOnData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1231:35)
21:50:58.055 [hello-uni-app-x:ios-F01B89..] 
21:50:58.055 [hello-uni-app-x:ios-F01B89..] FAIL pages/API/unicloud-import-object/unicloud-import-object.test.js
21:50:58.055 [hello-uni-app-x:ios-F01B89..] 
21:50:58.055 [hello-uni-app-x:ios-F01B89..] ● unicloud-import-object › importObject
21:50:58.055 [hello-uni-app-x:ios-F01B89..] 
21:50:58.055 [hello-uni-app-x:ios-F01B89..] page `/pages/API/unicloud-import-object/unicloud-import-object` is not found
21:50:58.055 [hello-uni-app-x:ios-F01B89..] 
21:50:58.056 [hello-uni-app-x:ios-F01B89..] at Q.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:3259)
21:50:58.056 [hello-uni-app-x:ios-F01B89..] at WebSocket.<anonymous> (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:1092)
21:50:58.056 [hello-uni-app-x:ios-F01B89..] at WebSocket.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/event-target.js:199:18)
21:50:58.056 [hello-uni-app-x:ios-F01B89..] at Receiver.receiverOnMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1137:20)
21:50:58.056 [hello-uni-app-x:ios-F01B89..] at Receiver.dataMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:528:14)
21:50:58.056 [hello-uni-app-x:ios-F01B89..] at Receiver.getData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:446:17)
21:50:58.056 [hello-uni-app-x:ios-F01B89..] at Receiver.startLoop (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:148:22)
21:50:58.056 [hello-uni-app-x:ios-F01B89..] at Receiver._write (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:83:10)
21:50:58.056 [hello-uni-app-x:ios-F01B89..] at Socket.socketOnData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1231:35)
21:50:58.056 [hello-uni-app-x:ios-F01B89..] 
21:50:58.056 [hello-uni-app-x:ios-F01B89..] FAIL pages/API/get-battery-info/get-battery-info.test.js
21:50:58.056 [hello-uni-app-x:ios-F01B89..] 
21:50:58.056 [hello-uni-app-x:ios-F01B89..] ● ExtApi-GetBatteryInfo › Check properties
21:50:58.057 [hello-uni-app-x:ios-F01B89..] 
21:50:58.057 [hello-uni-app-x:ios-F01B89..] page `/pages/API/get-battery-info/get-battery-info` is not found
21:50:58.057 [hello-uni-app-x:ios-F01B89..] 
21:50:58.057 [hello-uni-app-x:ios-F01B89..] at Q.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:3259)
21:50:58.057 [hello-uni-app-x:ios-F01B89..] at WebSocket.<anonymous> (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:1092)
21:50:58.057 [hello-uni-app-x:ios-F01B89..] at WebSocket.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/event-target.js:199:18)
21:50:58.057 [hello-uni-app-x:ios-F01B89..] at Receiver.receiverOnMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1137:20)
21:50:58.057 [hello-uni-app-x:ios-F01B89..] at Receiver.dataMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:528:14)
21:50:58.057 [hello-uni-app-x:ios-F01B89..] at Receiver.getData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:446:17)
21:50:58.057 [hello-uni-app-x:ios-F01B89..] at Receiver.startLoop (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:148:22)
21:50:58.057 [hello-uni-app-x:ios-F01B89..] at Receiver._write (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:83:10)
21:50:58.057 [hello-uni-app-x:ios-F01B89..] at Socket.socketOnData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1231:35)
21:50:58.058 [hello-uni-app-x:ios-F01B89..] 
21:50:58.058 [hello-uni-app-x:ios-F01B89..] FAIL pages/API/navigator/new-page/onLoad.test.js (34.459 s)
21:50:58.058 [hello-uni-app-x:ios-F01B89..] 
21:50:58.058 [hello-uni-app-x:ios-F01B89..] ● onLoad › showToast
21:50:58.058 [hello-uni-app-x:ios-F01B89..] 
21:50:58.058 [hello-uni-app-x:ios-F01B89..] thrown: "Exceeded timeout of 20000 ms for a test.
21:50:58.058 [hello-uni-app-x:ios-F01B89..] Use jest.setTimeout(newTimeout) to increase the timeout value, if this is a long-running test."
21:50:58.058 [hello-uni-app-x:ios-F01B89..] 
21:50:58.058 [hello-uni-app-x:ios-F01B89..] 56 
21:50:58.058 [hello-uni-app-x:ios-F01B89..]      expect(page.path).toBe("pages/tabBar/component");
21:50:58.058 [hello-uni-app-x:ios-F01B89..] 57 
21:50:58.058 [hello-uni-app-x:ios-F01B89..]    });
21:50:58.059 [hello-uni-app-x:ios-F01B89..] > 58 
21:50:58.059 [hello-uni-app-x:ios-F01B89..]    it("showToast", async () => {
21:50:58.059 [hello-uni-app-x:ios-F01B89..] 
21:50:58.059 [hello-uni-app-x:ios-F01B89..]    ^
21:50:58.059 [hello-uni-app-x:ios-F01B89..] 59 
21:50:58.059 [hello-uni-app-x:ios-F01B89..]      page = await program.reLaunch(INTERMEDIATE_PAGE_PATH);
21:50:58.059 [hello-uni-app-x:ios-F01B89..] 60 
21:50:58.059 [hello-uni-app-x:ios-F01B89..]      await page.waitFor("view");
21:50:58.059 [hello-uni-app-x:ios-F01B89..] 61 
21:50:58.059 [hello-uni-app-x:ios-F01B89..]      await page.callMethod("navigateToOnLoadWithType", "showToast");
21:50:58.059 [hello-uni-app-x:ios-F01B89..] 
21:50:58.059 [hello-uni-app-x:ios-F01B89..] at pages/API/navigator/new-page/onLoad.test.js:58:3
21:50:58.060 [hello-uni-app-x:ios-F01B89..] at Object.<anonymous> (pages/API/navigator/new-page/onLoad.test.js:7:1)
21:50:58.060 [hello-uni-app-x:ios-F01B89..] 
21:50:58.060 [hello-uni-app-x:ios-F01B89..] FAIL pages/API/page-scroll-to/page-scroll-to.test.js
21:50:58.060 [hello-uni-app-x:ios-F01B89..] 
21:50:58.060 [hello-uni-app-x:ios-F01B89..] ● page-scroll-to › scroll-to-element
21:50:58.060 [hello-uni-app-x:ios-F01B89..] 
21:50:58.060 [hello-uni-app-x:ios-F01B89..] expect(received).toBe(expected) // Object.is equality
21:50:58.060 [hello-uni-app-x:ios-F01B89..] 
21:50:58.060 [hello-uni-app-x:ios-F01B89..] Expected: true
21:50:58.060 [hello-uni-app-x:ios-F01B89..] Received: false
21:50:58.060 [hello-uni-app-x:ios-F01B89..] 
21:50:58.060 [hello-uni-app-x:ios-F01B89..] 27 
21:50:58.060 [hello-uni-app-x:ios-F01B89..]      // android 6 分辨率为 720*1280，需要调整期望数值
21:50:58.060 [hello-uni-app-x:ios-F01B89..] 28 
21:50:58.060 [hello-uni-app-x:ios-F01B89..]      if (!process.env.uniTestPlatformInfo.startsWith('android 6')) {
21:50:58.061 [hello-uni-app-x:ios-F01B89..] > 29 
21:50:58.061 [hello-uni-app-x:ios-F01B89..]        expect(offset.top >= 1180).toBe(true)
21:50:58.061 [hello-uni-app-x:ios-F01B89..] 
21:50:58.061 [hello-uni-app-x:ios-F01B89..]                                   ^
21:50:58.061 [hello-uni-app-x:ios-F01B89..] 30 
21:50:58.061 [hello-uni-app-x:ios-F01B89..]      }
21:50:58.061 [hello-uni-app-x:ios-F01B89..] 31 
21:50:58.061 [hello-uni-app-x:ios-F01B89..]    })
21:50:58.061 [hello-uni-app-x:ios-F01B89..] 32 
21:50:58.061 [hello-uni-app-x:ios-F01B89..]  })
21:50:58.061 [hello-uni-app-x:ios-F01B89..] 
21:50:58.061 [hello-uni-app-x:ios-F01B89..] at Object.<anonymous> (pages/API/page-scroll-to/page-scroll-to.test.js:29:34)
21:50:58.061 [hello-uni-app-x:ios-F01B89..] 
21:50:58.061 [hello-uni-app-x:ios-F01B89..] FAIL pages/API/upload-file/upload-file.test.js
21:50:58.061 [hello-uni-app-x:ios-F01B89..] 
21:50:58.061 [hello-uni-app-x:ios-F01B89..] ● ExtApi-UploadFile › Check
21:50:58.062 [hello-uni-app-x:ios-F01B89..] 
21:50:58.062 [hello-uni-app-x:ios-F01B89..] 
21:50:58.062 [hello-uni-app-x:ios-F01B89..] 
21:50:58.062 [hello-uni-app-x:ios-F01B89..] at Q.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:3259)
21:50:58.062 [hello-uni-app-x:ios-F01B89..] at WebSocket.<anonymous> (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:1092)
21:50:58.062 [hello-uni-app-x:ios-F01B89..] at WebSocket.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/event-target.js:199:18)
21:50:58.062 [hello-uni-app-x:ios-F01B89..] at Receiver.receiverOnMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1137:20)
21:50:58.062 [hello-uni-app-x:ios-F01B89..] at Receiver.dataMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:528:14)
21:50:58.062 [hello-uni-app-x:ios-F01B89..] at Receiver.getData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:446:17)
21:50:58.062 [hello-uni-app-x:ios-F01B89..] at Receiver.startLoop (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:148:22)
21:50:58.062 [hello-uni-app-x:ios-F01B89..] at Receiver._write (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:83:10)
21:50:58.062 [hello-uni-app-x:ios-F01B89..] at Socket.socketOnData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1231:35)
21:50:58.062 [hello-uni-app-x:ios-F01B89..] 
21:50:58.062 [hello-uni-app-x:ios-F01B89..] ● ExtApi-UploadFile › Check files upload
21:50:58.062 [hello-uni-app-x:ios-F01B89..] 
21:50:58.063 [hello-uni-app-x:ios-F01B89..] 
21:50:58.063 [hello-uni-app-x:ios-F01B89..] 
21:50:58.063 [hello-uni-app-x:ios-F01B89..] at Q.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:3259)
21:50:58.063 [hello-uni-app-x:ios-F01B89..] at WebSocket.<anonymous> (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:1092)
21:50:58.063 [hello-uni-app-x:ios-F01B89..] at WebSocket.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/event-target.js:199:18)
21:50:58.063 [hello-uni-app-x:ios-F01B89..] at Receiver.receiverOnMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1137:20)
21:50:58.063 [hello-uni-app-x:ios-F01B89..] at Receiver.dataMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:528:14)
21:50:58.063 [hello-uni-app-x:ios-F01B89..] at Receiver.getData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:446:17)
21:50:58.063 [hello-uni-app-x:ios-F01B89..] at Receiver.startLoop (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:148:22)
21:50:58.063 [hello-uni-app-x:ios-F01B89..] at Receiver._write (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:83:10)
21:50:58.063 [hello-uni-app-x:ios-F01B89..] at Socket.socketOnData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1231:35)
21:50:58.063 [hello-uni-app-x:ios-F01B89..] 
21:50:58.063 [hello-uni-app-x:ios-F01B89..] FAIL pages/API/get-window-info/get-window-info.test.js
21:50:58.063 [hello-uni-app-x:ios-F01B89..] 
21:50:58.064 [hello-uni-app-x:ios-F01B89..] ● ExtApi-GetWindowInfo › Check GetWindowInfo
21:50:58.064 [hello-uni-app-x:ios-F01B89..] 
21:50:58.064 [hello-uni-app-x:ios-F01B89..] 
21:50:58.064 [hello-uni-app-x:ios-F01B89..] 
21:50:58.064 [hello-uni-app-x:ios-F01B89..] at Q.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:3259)
21:50:58.064 [hello-uni-app-x:ios-F01B89..] at WebSocket.<anonymous> (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:1092)
21:50:58.064 [hello-uni-app-x:ios-F01B89..] at WebSocket.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/event-target.js:199:18)
21:50:58.064 [hello-uni-app-x:ios-F01B89..] at Receiver.receiverOnMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1137:20)
21:50:58.064 [hello-uni-app-x:ios-F01B89..] at Receiver.dataMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:528:14)
21:50:58.064 [hello-uni-app-x:ios-F01B89..] at Receiver.getData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:446:17)
21:50:58.064 [hello-uni-app-x:ios-F01B89..] at Receiver.startLoop (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:148:22)
21:50:58.064 [hello-uni-app-x:ios-F01B89..] at Receiver._write (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:83:10)
21:50:58.064 [hello-uni-app-x:ios-F01B89..] at Socket.socketOnData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1231:35)
21:50:58.064 [hello-uni-app-x:ios-F01B89..] 
21:50:58.065 [hello-uni-app-x:ios-F01B89..] FAIL pages/API/unicloud-database/unicloud-database.test.js
21:50:58.065 [hello-uni-app-x:ios-F01B89..] 
21:50:58.065 [hello-uni-app-x:ios-F01B89..] ● unicloud-database › databaseBasic
21:50:58.065 [hello-uni-app-x:ios-F01B89..] 
21:50:58.065 [hello-uni-app-x:ios-F01B89..] page `/pages/API/unicloud-database/unicloud-database` is not found
21:50:58.065 [hello-uni-app-x:ios-F01B89..] 
21:50:58.065 [hello-uni-app-x:ios-F01B89..] at Q.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:3259)
21:50:58.065 [hello-uni-app-x:ios-F01B89..] at WebSocket.<anonymous> (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:1092)
21:50:58.065 [hello-uni-app-x:ios-F01B89..] at WebSocket.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/event-target.js:199:18)
21:50:58.065 [hello-uni-app-x:ios-F01B89..] at Receiver.receiverOnMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1137:20)
21:50:58.065 [hello-uni-app-x:ios-F01B89..] at Receiver.dataMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:528:14)
21:50:58.065 [hello-uni-app-x:ios-F01B89..] at Receiver.getData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:446:17)
21:50:58.065 [hello-uni-app-x:ios-F01B89..] at Receiver.startLoop (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:148:22)
21:50:58.065 [hello-uni-app-x:ios-F01B89..] at Receiver._write (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:83:10)
21:50:58.066 [hello-uni-app-x:ios-F01B89..] at Socket.socketOnData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1231:35)
21:50:58.066 [hello-uni-app-x:ios-F01B89..] 
21:50:58.066 [hello-uni-app-x:ios-F01B89..] ● unicloud-database › databaseLookup
21:50:58.066 [hello-uni-app-x:ios-F01B89..] 
21:50:58.066 [hello-uni-app-x:ios-F01B89..] page `/pages/API/unicloud-database/unicloud-database` is not found
21:50:58.066 [hello-uni-app-x:ios-F01B89..] 
21:50:58.066 [hello-uni-app-x:ios-F01B89..] at Q.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:3259)
21:50:58.066 [hello-uni-app-x:ios-F01B89..] at WebSocket.<anonymous> (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:1092)
21:50:58.066 [hello-uni-app-x:ios-F01B89..] at WebSocket.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/event-target.js:199:18)
21:50:58.066 [hello-uni-app-x:ios-F01B89..] at Receiver.receiverOnMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1137:20)
21:50:58.066 [hello-uni-app-x:ios-F01B89..] at Receiver.dataMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:528:14)
21:50:58.066 [hello-uni-app-x:ios-F01B89..] at Receiver.getData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:446:17)
21:50:58.066 [hello-uni-app-x:ios-F01B89..] at Receiver.startLoop (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:148:22)
21:50:58.066 [hello-uni-app-x:ios-F01B89..] at Receiver._write (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:83:10)
21:50:58.067 [hello-uni-app-x:ios-F01B89..] at Socket.socketOnData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1231:35)
21:50:58.067 [hello-uni-app-x:ios-F01B89..] 
21:50:58.067 [hello-uni-app-x:ios-F01B89..] FAIL pages/API/get-system-info/get-system-info.test.js
21:50:58.067 [hello-uni-app-x:ios-F01B89..] 
21:50:58.067 [hello-uni-app-x:ios-F01B89..] ● ExtApi-GetSystemInfo › Check GetSystemInfoSync
21:50:58.067 [hello-uni-app-x:ios-F01B89..] 
21:50:58.067 [hello-uni-app-x:ios-F01B89..] expect(received).not.toBe(expected) // Object.is equality
21:50:58.067 [hello-uni-app-x:ios-F01B89..] 
21:50:58.067 [hello-uni-app-x:ios-F01B89..] Expected: not ""
21:50:58.067 [hello-uni-app-x:ios-F01B89..] 
21:50:58.067 [hello-uni-app-x:ios-F01B89..] 34 
21:50:58.067 [hello-uni-app-x:ios-F01B89..]        if (stringProperties.indexOf(key) != -1) {
21:50:58.067 [hello-uni-app-x:ios-F01B89..] 35 
21:50:58.067 [hello-uni-app-x:ios-F01B89..]          expect(value).not.toBeNull();
21:50:58.067 [hello-uni-app-x:ios-F01B89..] > 36 
21:50:58.067 [hello-uni-app-x:ios-F01B89..]          expect(value).not.toBe("");
21:50:58.068 [hello-uni-app-x:ios-F01B89..] 
21:50:58.068 [hello-uni-app-x:ios-F01B89..]                            ^
21:50:58.068 [hello-uni-app-x:ios-F01B89..] 37 
21:50:58.068 [hello-uni-app-x:ios-F01B89..]        }
21:50:58.068 [hello-uni-app-x:ios-F01B89..] 38 
21:50:58.068 [hello-uni-app-x:ios-F01B89..]        if (numberProperties.indexOf(key) != -1) {
21:50:58.068 [hello-uni-app-x:ios-F01B89..] 39 
21:50:58.068 [hello-uni-app-x:ios-F01B89..]          expect(value).not.toBeNull();
21:50:58.068 [hello-uni-app-x:ios-F01B89..] 
21:50:58.068 [hello-uni-app-x:ios-F01B89..] at Object.<anonymous> (pages/API/get-system-info/get-system-info.test.js:36:27)
21:50:58.068 [hello-uni-app-x:ios-F01B89..] 
21:50:58.068 [hello-uni-app-x:ios-F01B89..] FAIL pages/API/get-network-type/get-network-type.test.js
21:50:58.068 [hello-uni-app-x:ios-F01B89..] 
21:50:58.068 [hello-uni-app-x:ios-F01B89..] ● ExtApi-GetNetworkType › Check
21:50:58.068 [hello-uni-app-x:ios-F01B89..] 
21:50:58.069 [hello-uni-app-x:ios-F01B89..] 
21:50:58.069 [hello-uni-app-x:ios-F01B89..] 
21:50:58.069 [hello-uni-app-x:ios-F01B89..] at Q.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:3259)
21:50:58.069 [hello-uni-app-x:ios-F01B89..] at WebSocket.<anonymous> (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:1092)
21:50:58.069 [hello-uni-app-x:ios-F01B89..] at WebSocket.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/event-target.js:199:18)
21:50:58.069 [hello-uni-app-x:ios-F01B89..] at Receiver.receiverOnMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1137:20)
21:50:58.069 [hello-uni-app-x:ios-F01B89..] at Receiver.dataMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:528:14)
21:50:58.069 [hello-uni-app-x:ios-F01B89..] at Receiver.getData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:446:17)
21:50:58.069 [hello-uni-app-x:ios-F01B89..] at Receiver.startLoop (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:148:22)
21:50:58.069 [hello-uni-app-x:ios-F01B89..] at Receiver._write (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:83:10)
21:50:58.069 [hello-uni-app-x:ios-F01B89..] at Socket.socketOnData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1231:35)
21:50:58.069 [hello-uni-app-x:ios-F01B89..] 
21:50:58.069 [hello-uni-app-x:ios-F01B89..] FAIL pages/API/storage/storage.test.js (20.229 s)
21:50:58.070 [hello-uni-app-x:ios-F01B89..] 
21:50:58.070 [hello-uni-app-x:ios-F01B89..] ● ExtApi-StorageInfoTest › Check async properties
21:50:58.070 [hello-uni-app-x:ios-F01B89..] 
21:50:58.070 [hello-uni-app-x:ios-F01B89..] expect(received).toEqual(expected) // deep equality
21:50:58.070 [hello-uni-app-x:ios-F01B89..] 
21:50:58.070 [hello-uni-app-x:ios-F01B89..] Expected: 0
21:50:58.070 [hello-uni-app-x:ios-F01B89..] Received: 2
21:50:58.070 [hello-uni-app-x:ios-F01B89..] 
21:50:58.070 [hello-uni-app-x:ios-F01B89..] 47 
21:50:58.070 [hello-uni-app-x:ios-F01B89..]      await page.waitFor(600)
21:50:58.070 [hello-uni-app-x:ios-F01B89..] 48 
21:50:58.070 [hello-uni-app-x:ios-F01B89..]      storageInfoRet = await getData('apiGetData')
21:50:58.070 [hello-uni-app-x:ios-F01B89..] > 49 
21:50:58.071 [hello-uni-app-x:ios-F01B89..]      expect(storageInfoRet.keys.length).toEqual(0)
21:50:58.071 [hello-uni-app-x:ios-F01B89..] 
21:50:58.071 [hello-uni-app-x:ios-F01B89..]                                         ^
21:50:58.071 [hello-uni-app-x:ios-F01B89..] 50 
21:50:58.071 [hello-uni-app-x:ios-F01B89..] 
21:50:58.071 [hello-uni-app-x:ios-F01B89..] 51 
21:50:58.071 [hello-uni-app-x:ios-F01B89..] 
21:50:58.071 [hello-uni-app-x:ios-F01B89..] 52 
21:50:58.071 [hello-uni-app-x:ios-F01B89..]      await page.setData({
21:50:58.071 [hello-uni-app-x:ios-F01B89..] 
21:50:58.071 [hello-uni-app-x:ios-F01B89..] at Object.<anonymous> (pages/API/storage/storage.test.js:49:40)
21:50:58.071 [hello-uni-app-x:ios-F01B89..] 
21:50:58.071 [hello-uni-app-x:ios-F01B89..] FAIL pages/API/get-app-base-info/get-app-base-info.test.js
21:50:58.071 [hello-uni-app-x:ios-F01B89..] 
21:50:58.071 [hello-uni-app-x:ios-F01B89..] ● ExtApi-GetAppBaseInfo › Check properties
21:50:58.071 [hello-uni-app-x:ios-F01B89..] 
21:50:58.072 [hello-uni-app-x:ios-F01B89..] expect(received).not.toBe(expected) // Object.is equality
21:50:58.072 [hello-uni-app-x:ios-F01B89..] 
21:50:58.072 [hello-uni-app-x:ios-F01B89..] Expected: not ""
21:50:58.072 [hello-uni-app-x:ios-F01B89..] 
21:50:58.072 [hello-uni-app-x:ios-F01B89..] 26 
21:50:58.072 [hello-uni-app-x:ios-F01B89..]        if (stringProperties.indexOf(key) != -1) {
21:50:58.072 [hello-uni-app-x:ios-F01B89..] 27 
21:50:58.072 [hello-uni-app-x:ios-F01B89..]          expect(value).not.toBeNull();
21:50:58.072 [hello-uni-app-x:ios-F01B89..] > 28 
21:50:58.072 [hello-uni-app-x:ios-F01B89..]          expect(value).not.toBe("");
21:50:58.072 [hello-uni-app-x:ios-F01B89..] 
21:50:58.072 [hello-uni-app-x:ios-F01B89..]                            ^
21:50:58.072 [hello-uni-app-x:ios-F01B89..] 29 
21:50:58.072 [hello-uni-app-x:ios-F01B89..]        }
21:50:58.072 [hello-uni-app-x:ios-F01B89..] 30 
21:50:58.073 [hello-uni-app-x:ios-F01B89..]        if (numberProperties.indexOf(key) != -1) {
21:50:58.073 [hello-uni-app-x:ios-F01B89..] 31 
21:50:58.073 [hello-uni-app-x:ios-F01B89..]          expect(value).not.toBeNull();
21:50:58.073 [hello-uni-app-x:ios-F01B89..] 
21:50:58.073 [hello-uni-app-x:ios-F01B89..] at Object.<anonymous> (pages/API/get-app-base-info/get-app-base-info.test.js:28:27)
21:50:58.073 [hello-uni-app-x:ios-F01B89..] 
21:50:58.073 [hello-uni-app-x:ios-F01B89..] FAIL pages/API/action-sheet/action-sheet.test.js
21:50:58.073 [hello-uni-app-x:ios-F01B89..] 
21:50:58.073 [hello-uni-app-x:ios-F01B89..] ● API-loading › action-sheet-test-current-0
21:50:58.073 [hello-uni-app-x:ios-F01B89..] 
21:50:58.073 [hello-uni-app-x:ios-F01B89..] 
21:50:58.073 [hello-uni-app-x:ios-F01B89..] 
21:50:58.073 [hello-uni-app-x:ios-F01B89..] at Q.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:3259)
21:50:58.073 [hello-uni-app-x:ios-F01B89..] at WebSocket.<anonymous> (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:1092)
21:50:58.073 [hello-uni-app-x:ios-F01B89..] at WebSocket.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/event-target.js:199:18)
21:50:58.074 [hello-uni-app-x:ios-F01B89..] at Receiver.receiverOnMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1137:20)
21:50:58.074 [hello-uni-app-x:ios-F01B89..] at Receiver.dataMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:528:14)
21:50:58.074 [hello-uni-app-x:ios-F01B89..] at Receiver.getData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:446:17)
21:50:58.074 [hello-uni-app-x:ios-F01B89..] at Receiver.startLoop (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:148:22)
21:50:58.074 [hello-uni-app-x:ios-F01B89..] at Receiver._write (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:83:10)
21:50:58.074 [hello-uni-app-x:ios-F01B89..] at Socket.socketOnData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1231:35)
21:50:58.074 [hello-uni-app-x:ios-F01B89..] 
21:50:58.074 [hello-uni-app-x:ios-F01B89..] ● API-loading › action-sheet-test-current-0-largeContent
21:50:58.074 [hello-uni-app-x:ios-F01B89..] 
21:50:58.074 [hello-uni-app-x:ios-F01B89..] 
21:50:58.074 [hello-uni-app-x:ios-F01B89..] 
21:50:58.074 [hello-uni-app-x:ios-F01B89..] at Q.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:3259)
21:50:58.074 [hello-uni-app-x:ios-F01B89..] at WebSocket.<anonymous> (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:1092)
21:50:58.074 [hello-uni-app-x:ios-F01B89..] at WebSocket.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/event-target.js:199:18)
21:50:58.075 [hello-uni-app-x:ios-F01B89..] at Receiver.receiverOnMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1137:20)
21:50:58.075 [hello-uni-app-x:ios-F01B89..] at Receiver.dataMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:528:14)
21:50:58.075 [hello-uni-app-x:ios-F01B89..] at Receiver.getData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:446:17)
21:50:58.075 [hello-uni-app-x:ios-F01B89..] at Receiver.startLoop (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:148:22)
21:50:58.075 [hello-uni-app-x:ios-F01B89..] at Receiver._write (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:83:10)
21:50:58.075 [hello-uni-app-x:ios-F01B89..] at Socket.socketOnData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1231:35)
21:50:58.075 [hello-uni-app-x:ios-F01B89..] 
21:50:58.075 [hello-uni-app-x:ios-F01B89..] ● API-loading › action-sheet-test-current-0-largeContent-largeNum
21:50:58.075 [hello-uni-app-x:ios-F01B89..] 
21:50:58.075 [hello-uni-app-x:ios-F01B89..] 
21:50:58.075 [hello-uni-app-x:ios-F01B89..] 
21:50:58.075 [hello-uni-app-x:ios-F01B89..] at Q.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:3259)
21:50:58.075 [hello-uni-app-x:ios-F01B89..] at WebSocket.<anonymous> (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:1092)
21:50:58.075 [hello-uni-app-x:ios-F01B89..] at WebSocket.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/event-target.js:199:18)
21:50:58.076 [hello-uni-app-x:ios-F01B89..] at Receiver.receiverOnMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1137:20)
21:50:58.076 [hello-uni-app-x:ios-F01B89..] at Receiver.dataMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:528:14)
21:50:58.076 [hello-uni-app-x:ios-F01B89..] at Receiver.getData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:446:17)
21:50:58.076 [hello-uni-app-x:ios-F01B89..] at Receiver.startLoop (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:148:22)
21:50:58.076 [hello-uni-app-x:ios-F01B89..] at Receiver._write (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:83:10)
21:50:58.076 [hello-uni-app-x:ios-F01B89..] at Socket.socketOnData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1231:35)
21:50:58.076 [hello-uni-app-x:ios-F01B89..] 
21:50:58.076 [hello-uni-app-x:ios-F01B89..] ● API-loading › action-sheet-test-current-0-largeContent-largeNum-customColor
21:50:58.076 [hello-uni-app-x:ios-F01B89..] 
21:50:58.076 [hello-uni-app-x:ios-F01B89..] 
21:50:58.077 [hello-uni-app-x:ios-F01B89..] 
21:50:58.077 [hello-uni-app-x:ios-F01B89..] at Q.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:3259)
21:50:58.077 [hello-uni-app-x:ios-F01B89..] at WebSocket.<anonymous> (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:1092)
21:50:58.077 [hello-uni-app-x:ios-F01B89..] at WebSocket.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/event-target.js:199:18)
21:50:58.077 [hello-uni-app-x:ios-F01B89..] at Receiver.receiverOnMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1137:20)
21:50:58.077 [hello-uni-app-x:ios-F01B89..] at Receiver.dataMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:528:14)
21:50:58.077 [hello-uni-app-x:ios-F01B89..] at Receiver.getData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:446:17)
21:50:58.077 [hello-uni-app-x:ios-F01B89..] at Receiver.startLoop (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:148:22)
21:50:58.077 [hello-uni-app-x:ios-F01B89..] at Receiver._write (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:83:10)
21:50:58.077 [hello-uni-app-x:ios-F01B89..] at Socket.socketOnData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1231:35)
21:50:58.077 [hello-uni-app-x:ios-F01B89..] 
21:50:58.077 [hello-uni-app-x:ios-F01B89..] ● API-loading › action-sheet-test-current-1
21:50:58.077 [hello-uni-app-x:ios-F01B89..] 
21:50:58.077 [hello-uni-app-x:ios-F01B89..] 
21:50:58.077 [hello-uni-app-x:ios-F01B89..] 
21:50:58.078 [hello-uni-app-x:ios-F01B89..] at Q.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:3259)
21:50:58.078 [hello-uni-app-x:ios-F01B89..] at WebSocket.<anonymous> (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:1092)
21:50:58.078 [hello-uni-app-x:ios-F01B89..] at WebSocket.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/event-target.js:199:18)
21:50:58.078 [hello-uni-app-x:ios-F01B89..] at Receiver.receiverOnMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1137:20)
21:50:58.078 [hello-uni-app-x:ios-F01B89..] at Receiver.dataMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:528:14)
21:50:58.078 [hello-uni-app-x:ios-F01B89..] at Receiver.getData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:446:17)
21:50:58.078 [hello-uni-app-x:ios-F01B89..] at Receiver.startLoop (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:148:22)
21:50:58.078 [hello-uni-app-x:ios-F01B89..] at Receiver._write (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:83:10)
21:50:58.078 [hello-uni-app-x:ios-F01B89..] at Socket.socketOnData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1231:35)
21:50:58.078 [hello-uni-app-x:ios-F01B89..] 
21:50:58.078 [hello-uni-app-x:ios-F01B89..] ● API-loading › action-sheet-test-current-1-largeContent
21:50:58.078 [hello-uni-app-x:ios-F01B89..] 
21:50:58.078 [hello-uni-app-x:ios-F01B89..] 
21:50:58.078 [hello-uni-app-x:ios-F01B89..] 
21:50:58.078 [hello-uni-app-x:ios-F01B89..] at Q.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:3259)
21:50:58.079 [hello-uni-app-x:ios-F01B89..] at WebSocket.<anonymous> (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:1092)
21:50:58.079 [hello-uni-app-x:ios-F01B89..] at WebSocket.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/event-target.js:199:18)
21:50:58.079 [hello-uni-app-x:ios-F01B89..] at Receiver.receiverOnMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1137:20)
21:50:58.079 [hello-uni-app-x:ios-F01B89..] at Receiver.dataMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:528:14)
21:50:58.079 [hello-uni-app-x:ios-F01B89..] at Receiver.getData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:446:17)
21:50:58.079 [hello-uni-app-x:ios-F01B89..] at Receiver.startLoop (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:148:22)
21:50:58.079 [hello-uni-app-x:ios-F01B89..] at Receiver._write (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:83:10)
21:50:58.079 [hello-uni-app-x:ios-F01B89..] at Socket.socketOnData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1231:35)
21:50:58.079 [hello-uni-app-x:ios-F01B89..] 
21:50:58.079 [hello-uni-app-x:ios-F01B89..] ● API-loading › action-sheet-test-current-1-largeContent-largeNum
21:50:58.079 [hello-uni-app-x:ios-F01B89..] 
21:50:58.079 [hello-uni-app-x:ios-F01B89..] 
21:50:58.079 [hello-uni-app-x:ios-F01B89..] 
21:50:58.079 [hello-uni-app-x:ios-F01B89..] at Q.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:3259)
21:50:58.080 [hello-uni-app-x:ios-F01B89..] at WebSocket.<anonymous> (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:1092)
21:50:58.080 [hello-uni-app-x:ios-F01B89..] at WebSocket.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/event-target.js:199:18)
21:50:58.080 [hello-uni-app-x:ios-F01B89..] at Receiver.receiverOnMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1137:20)
21:50:58.080 [hello-uni-app-x:ios-F01B89..] at Receiver.dataMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:528:14)
21:50:58.080 [hello-uni-app-x:ios-F01B89..] at Receiver.getData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:446:17)
21:50:58.086 [hello-uni-app-x:ios-F01B89..] at Receiver.startLoop (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:148:22)
21:50:58.086 [hello-uni-app-x:ios-F01B89..] at Receiver._write (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:83:10)
21:50:58.086 [hello-uni-app-x:ios-F01B89..] at Socket.socketOnData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1231:35)
21:50:58.086 [hello-uni-app-x:ios-F01B89..] 
21:50:58.086 [hello-uni-app-x:ios-F01B89..] ● API-loading › action-sheet-test-current-1-largeContent-largeNum-customColor
21:50:58.086 [hello-uni-app-x:ios-F01B89..] 
21:50:58.086 [hello-uni-app-x:ios-F01B89..] 
21:50:58.086 [hello-uni-app-x:ios-F01B89..] 
21:50:58.086 [hello-uni-app-x:ios-F01B89..] at Q.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:3259)
21:50:58.086 [hello-uni-app-x:ios-F01B89..] at WebSocket.<anonymous> (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:1092)
21:50:58.086 [hello-uni-app-x:ios-F01B89..] at WebSocket.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/event-target.js:199:18)
21:50:58.087 [hello-uni-app-x:ios-F01B89..] at Receiver.receiverOnMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1137:20)
21:50:58.087 [hello-uni-app-x:ios-F01B89..] at Receiver.dataMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:528:14)
21:50:58.087 [hello-uni-app-x:ios-F01B89..] at Receiver.getData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:446:17)
21:50:58.087 [hello-uni-app-x:ios-F01B89..] at Receiver.startLoop (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:148:22)
21:50:58.087 [hello-uni-app-x:ios-F01B89..] at Receiver._write (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:83:10)
21:50:58.087 [hello-uni-app-x:ios-F01B89..] at Socket.socketOnData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1231:35)
21:50:58.087 [hello-uni-app-x:ios-F01B89..] 
21:50:58.087 [hello-uni-app-x:ios-F01B89..] ● API-loading › action-sheet-test-current-2
21:50:58.087 [hello-uni-app-x:ios-F01B89..] 
21:50:58.087 [hello-uni-app-x:ios-F01B89..] 
21:50:58.087 [hello-uni-app-x:ios-F01B89..] 
21:50:58.087 [hello-uni-app-x:ios-F01B89..] at Q.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:3259)
21:50:58.087 [hello-uni-app-x:ios-F01B89..] at WebSocket.<anonymous> (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:1092)
21:50:58.088 [hello-uni-app-x:ios-F01B89..] at WebSocket.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/event-target.js:199:18)
21:50:58.088 [hello-uni-app-x:ios-F01B89..] at Receiver.receiverOnMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1137:20)
21:50:58.088 [hello-uni-app-x:ios-F01B89..] at Receiver.dataMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:528:14)
21:50:58.088 [hello-uni-app-x:ios-F01B89..] at Receiver.getData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:446:17)
21:50:58.088 [hello-uni-app-x:ios-F01B89..] at Receiver.startLoop (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:148:22)
21:50:58.088 [hello-uni-app-x:ios-F01B89..] at Receiver._write (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:83:10)
21:50:58.088 [hello-uni-app-x:ios-F01B89..] at Socket.socketOnData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1231:35)
21:50:58.088 [hello-uni-app-x:ios-F01B89..] 
21:50:58.088 [hello-uni-app-x:ios-F01B89..] ● API-loading › action-sheet-test-current-2-largeContent
21:50:58.088 [hello-uni-app-x:ios-F01B89..] 
21:50:58.088 [hello-uni-app-x:ios-F01B89..] 
21:50:58.088 [hello-uni-app-x:ios-F01B89..] 
21:50:58.088 [hello-uni-app-x:ios-F01B89..] at Q.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:3259)
21:50:58.089 [hello-uni-app-x:ios-F01B89..] at WebSocket.<anonymous> (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:1092)
21:50:58.089 [hello-uni-app-x:ios-F01B89..] at WebSocket.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/event-target.js:199:18)
21:50:58.089 [hello-uni-app-x:ios-F01B89..] at Receiver.receiverOnMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1137:20)
21:50:58.089 [hello-uni-app-x:ios-F01B89..] at Receiver.dataMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:528:14)
21:50:58.089 [hello-uni-app-x:ios-F01B89..] at Receiver.getData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:446:17)
21:50:58.089 [hello-uni-app-x:ios-F01B89..] at Receiver.startLoop (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:148:22)
21:50:58.089 [hello-uni-app-x:ios-F01B89..] at Receiver._write (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:83:10)
21:50:58.089 [hello-uni-app-x:ios-F01B89..] at Socket.socketOnData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1231:35)
21:50:58.089 [hello-uni-app-x:ios-F01B89..] 
21:50:58.089 [hello-uni-app-x:ios-F01B89..] ● API-loading › action-sheet-test-current-2-largeContent-largeNum
21:50:58.089 [hello-uni-app-x:ios-F01B89..] 
21:50:58.089 [hello-uni-app-x:ios-F01B89..] 
21:50:58.089 [hello-uni-app-x:ios-F01B89..] 
21:50:58.090 [hello-uni-app-x:ios-F01B89..] at Q.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:3259)
21:50:58.090 [hello-uni-app-x:ios-F01B89..] at WebSocket.<anonymous> (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:1092)
21:50:58.090 [hello-uni-app-x:ios-F01B89..] at WebSocket.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/event-target.js:199:18)
21:50:58.090 [hello-uni-app-x:ios-F01B89..] at Receiver.receiverOnMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1137:20)
21:50:58.090 [hello-uni-app-x:ios-F01B89..] at Receiver.dataMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:528:14)
21:50:58.090 [hello-uni-app-x:ios-F01B89..] at Receiver.getData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:446:17)
21:50:58.090 [hello-uni-app-x:ios-F01B89..] at Receiver.startLoop (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:148:22)
21:50:58.090 [hello-uni-app-x:ios-F01B89..] at Receiver._write (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:83:10)
21:50:58.090 [hello-uni-app-x:ios-F01B89..] at Socket.socketOnData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1231:35)
21:50:58.091 [hello-uni-app-x:ios-F01B89..] 
21:50:58.091 [hello-uni-app-x:ios-F01B89..] ● API-loading › action-sheet-test-current-2-largeContent-largeNum-customColor
21:50:58.091 [hello-uni-app-x:ios-F01B89..] 
21:50:58.091 [hello-uni-app-x:ios-F01B89..] 
21:50:58.091 [hello-uni-app-x:ios-F01B89..] 
21:50:58.091 [hello-uni-app-x:ios-F01B89..] at Q.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:3259)
21:50:58.091 [hello-uni-app-x:ios-F01B89..] at WebSocket.<anonymous> (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:1092)
21:50:58.091 [hello-uni-app-x:ios-F01B89..] at WebSocket.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/event-target.js:199:18)
21:50:58.091 [hello-uni-app-x:ios-F01B89..] at Receiver.receiverOnMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1137:20)
21:50:58.091 [hello-uni-app-x:ios-F01B89..] at Receiver.dataMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:528:14)
21:50:58.091 [hello-uni-app-x:ios-F01B89..] at Receiver.getData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:446:17)
21:50:58.091 [hello-uni-app-x:ios-F01B89..] at Receiver.startLoop (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:148:22)
21:50:58.091 [hello-uni-app-x:ios-F01B89..] at Receiver._write (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:83:10)
21:50:58.092 [hello-uni-app-x:ios-F01B89..] at Socket.socketOnData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1231:35)
21:50:58.092 [hello-uni-app-x:ios-F01B89..] 
21:50:58.092 [hello-uni-app-x:ios-F01B89..] FAIL pages/API/get-app-authorize-setting/get-app-authorize-setting.test.js
21:50:58.092 [hello-uni-app-x:ios-F01B89..] 
21:50:58.092 [hello-uni-app-x:ios-F01B89..] ● ExtApi-GetAppAuthorizeSetting › Check locationAccuracy
21:50:58.092 [hello-uni-app-x:ios-F01B89..] 
21:50:58.092 [hello-uni-app-x:ios-F01B89..] expect(received).toContain(expected) // indexOf
21:50:58.092 [hello-uni-app-x:ios-F01B89..] 
21:50:58.092 [hello-uni-app-x:ios-F01B89..] Expected value: "config error"
21:50:58.093 [hello-uni-app-x:ios-F01B89..] Received array: ["reduced", "full", "unsupported"]
21:50:58.093 [hello-uni-app-x:ios-F01B89..] 
21:50:58.093 [hello-uni-app-x:ios-F01B89..] 30 
21:50:58.093 [hello-uni-app-x:ios-F01B89..]    });
21:50:58.093 [hello-uni-app-x:ios-F01B89..] 31 
21:50:58.093 [hello-uni-app-x:ios-F01B89..]    it('Check locationAccuracy', async () => {
21:50:58.093 [hello-uni-app-x:ios-F01B89..] > 32 
21:50:58.093 [hello-uni-app-x:ios-F01B89..]      expect(locationAccuracySupportList).toContain(res.locationAccuracy)
21:50:58.093 [hello-uni-app-x:ios-F01B89..] 
21:50:58.093 [hello-uni-app-x:ios-F01B89..]                                          ^
21:50:58.093 [hello-uni-app-x:ios-F01B89..] 33 
21:50:58.093 [hello-uni-app-x:ios-F01B89..]    });
21:50:58.093 [hello-uni-app-x:ios-F01B89..] 34 
21:50:58.093 [hello-uni-app-x:ios-F01B89..]    it('Check microphoneAuthorized', async () => {
21:50:58.093 [hello-uni-app-x:ios-F01B89..] 35 
21:50:58.093 [hello-uni-app-x:ios-F01B89..]      expect(commonSupportList).toContain(res.microphoneAuthorized)
21:50:58.094 [hello-uni-app-x:ios-F01B89..] 
21:50:58.094 [hello-uni-app-x:ios-F01B89..] at Object.<anonymous> (pages/API/get-app-authorize-setting/get-app-authorize-setting.test.js:32:41)
21:50:58.094 [hello-uni-app-x:ios-F01B89..] 
21:50:58.094 [hello-uni-app-x:ios-F01B89..] FAIL pages/API/get-file-system-manager/get-file-system-manager.test.js
21:50:58.094 [hello-uni-app-x:ios-F01B89..] 
21:50:58.094 [hello-uni-app-x:ios-F01B89..] ● ExtApi-FileManagerTest › USER_DATA_PATH test
21:50:58.094 [hello-uni-app-x:ios-F01B89..] 
21:50:58.094 [hello-uni-app-x:ios-F01B89..] undefined is not an object (evaluating 'uni.env.USER_DATA_PATH')
21:50:58.094 [hello-uni-app-x:ios-F01B89..] 
21:50:58.094 [hello-uni-app-x:ios-F01B89..] at Q.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:3259)
21:50:58.094 [hello-uni-app-x:ios-F01B89..] at WebSocket.<anonymous> (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:1092)
21:50:58.094 [hello-uni-app-x:ios-F01B89..] at WebSocket.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/event-target.js:199:18)
21:50:58.094 [hello-uni-app-x:ios-F01B89..] at Receiver.receiverOnMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1137:20)
21:50:58.094 [hello-uni-app-x:ios-F01B89..] at Receiver.dataMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:528:14)
21:50:58.094 [hello-uni-app-x:ios-F01B89..] at Receiver.getData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:446:17)
21:50:58.094 [hello-uni-app-x:ios-F01B89..] at Receiver.startLoop (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:148:22)
21:50:58.095 [hello-uni-app-x:ios-F01B89..] at Receiver._write (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:83:10)
21:50:58.095 [hello-uni-app-x:ios-F01B89..] at Socket.socketOnData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1231:35)
21:50:58.095 [hello-uni-app-x:ios-F01B89..] 
21:50:58.095 [hello-uni-app-x:ios-F01B89..] ● ExtApi-FileManagerTest › TEMP_PATH test
21:50:58.095 [hello-uni-app-x:ios-F01B89..] 
21:50:58.095 [hello-uni-app-x:ios-F01B89..] undefined is not an object (evaluating 'uni.env.USER_DATA_PATH')
21:50:58.095 [hello-uni-app-x:ios-F01B89..] 
21:50:58.095 [hello-uni-app-x:ios-F01B89..] at Q.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:3259)
21:50:58.095 [hello-uni-app-x:ios-F01B89..] at WebSocket.<anonymous> (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:1092)
21:50:58.095 [hello-uni-app-x:ios-F01B89..] at WebSocket.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/event-target.js:199:18)
21:50:58.095 [hello-uni-app-x:ios-F01B89..] at Receiver.receiverOnMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1137:20)
21:50:58.095 [hello-uni-app-x:ios-F01B89..] at Receiver.dataMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:528:14)
21:50:58.095 [hello-uni-app-x:ios-F01B89..] at Receiver.getData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:446:17)
21:50:58.095 [hello-uni-app-x:ios-F01B89..] at Receiver.startLoop (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:148:22)
21:50:58.095 [hello-uni-app-x:ios-F01B89..] at Receiver._write (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:83:10)
21:50:58.096 [hello-uni-app-x:ios-F01B89..] at Socket.socketOnData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1231:35)
21:50:58.096 [hello-uni-app-x:ios-F01B89..] 
21:50:58.096 [hello-uni-app-x:ios-F01B89..] ● ExtApi-FileManagerTest › CROSS DIR test
21:50:58.096 [hello-uni-app-x:ios-F01B89..] 
21:50:58.096 [hello-uni-app-x:ios-F01B89..] undefined is not an object (evaluating 'uni.env.USER_DATA_PATH')
21:50:58.096 [hello-uni-app-x:ios-F01B89..] 
21:50:58.096 [hello-uni-app-x:ios-F01B89..] at Q.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:3259)
21:50:58.096 [hello-uni-app-x:ios-F01B89..] at WebSocket.<anonymous> (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:1092)
21:50:58.096 [hello-uni-app-x:ios-F01B89..] at WebSocket.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/event-target.js:199:18)
21:50:58.096 [hello-uni-app-x:ios-F01B89..] at Receiver.receiverOnMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1137:20)
21:50:58.096 [hello-uni-app-x:ios-F01B89..] at Receiver.dataMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:528:14)
21:50:58.096 [hello-uni-app-x:ios-F01B89..] at Receiver.getData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:446:17)
21:50:58.096 [hello-uni-app-x:ios-F01B89..] at Receiver.startLoop (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:148:22)
21:50:58.096 [hello-uni-app-x:ios-F01B89..] at Receiver._write (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:83:10)
21:50:58.096 [hello-uni-app-x:ios-F01B89..] at Socket.socketOnData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1231:35)
21:50:58.097 [hello-uni-app-x:ios-F01B89..] 
21:50:58.097 [hello-uni-app-x:ios-F01B89..] ● ExtApi-FileManagerTest › write and read
21:50:58.097 [hello-uni-app-x:ios-F01B89..] 
21:50:58.097 [hello-uni-app-x:ios-F01B89..] undefined is not an object (evaluating 'uni.env.USER_DATA_PATH')
21:50:58.097 [hello-uni-app-x:ios-F01B89..] 
21:50:58.097 [hello-uni-app-x:ios-F01B89..] at Q.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:3259)
21:50:58.097 [hello-uni-app-x:ios-F01B89..] at WebSocket.<anonymous> (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:1092)
21:50:58.097 [hello-uni-app-x:ios-F01B89..] at WebSocket.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/event-target.js:199:18)
21:50:58.097 [hello-uni-app-x:ios-F01B89..] at Receiver.receiverOnMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1137:20)
21:50:58.097 [hello-uni-app-x:ios-F01B89..] at Receiver.dataMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:528:14)
21:50:58.097 [hello-uni-app-x:ios-F01B89..] at Receiver.getData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:446:17)
21:50:58.097 [hello-uni-app-x:ios-F01B89..] at Receiver.startLoop (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:148:22)
21:50:58.098 [hello-uni-app-x:ios-F01B89..] at Receiver._write (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:83:10)
21:50:58.098 [hello-uni-app-x:ios-F01B89..] at Socket.socketOnData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1231:35)
21:50:58.098 [hello-uni-app-x:ios-F01B89..] 
21:50:58.098 [hello-uni-app-x:ios-F01B89..] ● ExtApi-FileManagerTest › stat and asset test
21:50:58.098 [hello-uni-app-x:ios-F01B89..] 
21:50:58.098 [hello-uni-app-x:ios-F01B89..] undefined is not an object (evaluating 'uni.env.USER_DATA_PATH')
21:50:58.098 [hello-uni-app-x:ios-F01B89..] 
21:50:58.098 [hello-uni-app-x:ios-F01B89..] at Q.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:3259)
21:50:58.098 [hello-uni-app-x:ios-F01B89..] at WebSocket.<anonymous> (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:1092)
21:50:58.098 [hello-uni-app-x:ios-F01B89..] at WebSocket.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/event-target.js:199:18)
21:50:58.098 [hello-uni-app-x:ios-F01B89..] at Receiver.receiverOnMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1137:20)
21:50:58.098 [hello-uni-app-x:ios-F01B89..] at Receiver.dataMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:528:14)
21:50:58.098 [hello-uni-app-x:ios-F01B89..] at Receiver.getData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:446:17)
21:50:58.098 [hello-uni-app-x:ios-F01B89..] at Receiver.startLoop (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:148:22)
21:50:58.099 [hello-uni-app-x:ios-F01B89..] at Receiver._write (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:83:10)
21:50:58.099 [hello-uni-app-x:ios-F01B89..] at Socket.socketOnData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1231:35)
21:50:58.099 [hello-uni-app-x:ios-F01B89..] 
21:50:58.099 [hello-uni-app-x:ios-F01B89..] FAIL pages/API/unicloud-call-function/unicloud-call-function.test.js
21:50:58.099 [hello-uni-app-x:ios-F01B89..] 
21:50:58.099 [hello-uni-app-x:ios-F01B89..] ● unicloud-call-function › callFunction
21:50:58.099 [hello-uni-app-x:ios-F01B89..] 
21:50:58.099 [hello-uni-app-x:ios-F01B89..] page `/pages/API/unicloud-call-function/unicloud-call-function` is not found
21:50:58.099 [hello-uni-app-x:ios-F01B89..] 
21:50:58.099 [hello-uni-app-x:ios-F01B89..] at Q.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:3259)
21:50:58.099 [hello-uni-app-x:ios-F01B89..] at WebSocket.<anonymous> (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:1092)
21:50:58.099 [hello-uni-app-x:ios-F01B89..] at WebSocket.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/event-target.js:199:18)
21:50:58.099 [hello-uni-app-x:ios-F01B89..] at Receiver.receiverOnMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1137:20)
21:50:58.099 [hello-uni-app-x:ios-F01B89..] at Receiver.dataMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:528:14)
21:50:58.099 [hello-uni-app-x:ios-F01B89..] at Receiver.getData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:446:17)
21:50:58.100 [hello-uni-app-x:ios-F01B89..] at Receiver.startLoop (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:148:22)
21:50:58.100 [hello-uni-app-x:ios-F01B89..] at Receiver._write (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:83:10)
21:50:58.100 [hello-uni-app-x:ios-F01B89..] at Socket.socketOnData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1231:35)
21:50:58.100 [hello-uni-app-x:ios-F01B89..] 
21:50:58.100 [hello-uni-app-x:ios-F01B89..] FAIL pages/API/rpx2px/rpx2px.test.js
21:50:58.100 [hello-uni-app-x:ios-F01B89..] 
21:50:58.100 [hello-uni-app-x:ios-F01B89..] ● API-rpx2px › rpx2px
21:50:58.100 [hello-uni-app-x:ios-F01B89..] 
21:50:58.100 [hello-uni-app-x:ios-F01B89..] expect(received).toBe(expected) // Object.is equality
21:50:58.100 [hello-uni-app-x:ios-F01B89..] 
21:50:58.100 [hello-uni-app-x:ios-F01B89..] Expected: true
21:50:58.100 [hello-uni-app-x:ios-F01B89..] Received: false
21:50:58.100 [hello-uni-app-x:ios-F01B89..] 
21:50:58.100 [hello-uni-app-x:ios-F01B89..] 12 
21:50:58.100 [hello-uni-app-x:ios-F01B89..] 
21:50:58.100 [hello-uni-app-x:ios-F01B89..] 13 
21:50:58.101 [hello-uni-app-x:ios-F01B89..]      const data = await page.data()
21:50:58.101 [hello-uni-app-x:ios-F01B89..] > 14 
21:50:58.101 [hello-uni-app-x:ios-F01B89..]      expect(data.result).toBe(true)
21:50:58.101 [hello-uni-app-x:ios-F01B89..] 
21:50:58.101 [hello-uni-app-x:ios-F01B89..]                          ^
21:50:58.101 [hello-uni-app-x:ios-F01B89..] 15 
21:50:58.101 [hello-uni-app-x:ios-F01B89..]    });
21:50:58.101 [hello-uni-app-x:ios-F01B89..] 16 
21:50:58.101 [hello-uni-app-x:ios-F01B89..]  });
21:50:58.101 [hello-uni-app-x:ios-F01B89..] 17 
21:50:58.101 [hello-uni-app-x:ios-F01B89..] 
21:50:58.101 [hello-uni-app-x:ios-F01B89..] 
21:50:58.101 [hello-uni-app-x:ios-F01B89..] at Object.<anonymous> (pages/API/rpx2px/rpx2px.test.js:14:25)
21:50:58.101 [hello-uni-app-x:ios-F01B89..] 
21:50:58.101 [hello-uni-app-x:ios-F01B89..] FAIL pages/API/request-payment/reqeust-payment.test.js
21:50:58.101 [hello-uni-app-x:ios-F01B89..] 
21:50:58.102 [hello-uni-app-x:ios-F01B89..] ● payment › errorcode700711
21:50:58.102 [hello-uni-app-x:ios-F01B89..] 
21:50:58.102 [hello-uni-app-x:ios-F01B89..] 
21:50:58.102 [hello-uni-app-x:ios-F01B89..] 
21:50:58.102 [hello-uni-app-x:ios-F01B89..] at Q.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:3259)
21:50:58.102 [hello-uni-app-x:ios-F01B89..] at WebSocket.<anonymous> (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:1092)
21:50:58.102 [hello-uni-app-x:ios-F01B89..] at WebSocket.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/event-target.js:199:18)
21:50:58.102 [hello-uni-app-x:ios-F01B89..] at Receiver.receiverOnMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1137:20)
21:50:58.102 [hello-uni-app-x:ios-F01B89..] at Receiver.dataMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:528:14)
21:50:58.102 [hello-uni-app-x:ios-F01B89..] at Receiver.getData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:446:17)
21:50:58.102 [hello-uni-app-x:ios-F01B89..] at Receiver.startLoop (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:148:22)
21:50:58.102 [hello-uni-app-x:ios-F01B89..] at Receiver._write (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:83:10)
21:50:58.102 [hello-uni-app-x:ios-F01B89..] at Socket.socketOnData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1231:35)
21:50:58.102 [hello-uni-app-x:ios-F01B89..] 
21:50:58.103 [hello-uni-app-x:ios-F01B89..] FAIL pages/API/get-element-by-id/get-element-by-id.test.js (30.082 s)
21:50:58.103 [hello-uni-app-x:ios-F01B89..] 
21:50:58.103 [hello-uni-app-x:ios-F01B89..] ● getElementById › getElementByNotExistId
21:50:58.103 [hello-uni-app-x:ios-F01B89..] 
21:50:58.103 [hello-uni-app-x:ios-F01B89..] thrown: "Exceeded timeout of 30000 ms for a hook.
21:50:58.103 [hello-uni-app-x:ios-F01B89..] Use jest.setTimeout(newTimeout) to increase the timeout value, if this is a long-running test."
21:50:58.103 [hello-uni-app-x:ios-F01B89..] 
21:50:58.103 [hello-uni-app-x:ios-F01B89..] 3 
21:50:58.103 [hello-uni-app-x:ios-F01B89..] 
21:50:58.103 [hello-uni-app-x:ios-F01B89..] 4 
21:50:58.103 [hello-uni-app-x:ios-F01B89..]  describe("getElementById", () => {
21:50:58.103 [hello-uni-app-x:ios-F01B89..] > 5 
21:50:58.103 [hello-uni-app-x:ios-F01B89..]    beforeAll(async () => {
21:50:58.103 [hello-uni-app-x:ios-F01B89..] 
21:50:58.103 [hello-uni-app-x:ios-F01B89..]    ^
21:50:58.103 [hello-uni-app-x:ios-F01B89..] 6 
21:50:58.104 [hello-uni-app-x:ios-F01B89..]      page = await program.reLaunch(PAGE_PATH);
21:50:58.104 [hello-uni-app-x:ios-F01B89..] 7 
21:50:58.104 [hello-uni-app-x:ios-F01B89..]      await page.waitFor('view');
21:50:58.104 [hello-uni-app-x:ios-F01B89..] 8 
21:50:58.104 [hello-uni-app-x:ios-F01B89..]    });
21:50:58.104 [hello-uni-app-x:ios-F01B89..] 
21:50:58.104 [hello-uni-app-x:ios-F01B89..] at pages/API/get-element-by-id/get-element-by-id.test.js:5:3
21:50:58.104 [hello-uni-app-x:ios-F01B89..] at Object.<anonymous> (pages/API/get-element-by-id/get-element-by-id.test.js:4:1)
21:50:58.104 [hello-uni-app-x:ios-F01B89..] 
21:50:58.104 [hello-uni-app-x:ios-F01B89..] ● getElementById › changeStyle
21:50:58.104 [hello-uni-app-x:ios-F01B89..] 
21:50:58.104 [hello-uni-app-x:ios-F01B89..] thrown: "Exceeded timeout of 30000 ms for a hook.
21:50:58.104 [hello-uni-app-x:ios-F01B89..] Use jest.setTimeout(newTimeout) to increase the timeout value, if this is a long-running test."
21:50:58.104 [hello-uni-app-x:ios-F01B89..] 
21:50:58.104 [hello-uni-app-x:ios-F01B89..] 3 
21:50:58.105 [hello-uni-app-x:ios-F01B89..] 
21:50:58.105 [hello-uni-app-x:ios-F01B89..] 4 
21:50:58.105 [hello-uni-app-x:ios-F01B89..]  describe("getElementById", () => {
21:50:58.105 [hello-uni-app-x:ios-F01B89..] > 5 
21:50:58.105 [hello-uni-app-x:ios-F01B89..]    beforeAll(async () => {
21:50:58.105 [hello-uni-app-x:ios-F01B89..] 
21:50:58.105 [hello-uni-app-x:ios-F01B89..]    ^
21:50:58.105 [hello-uni-app-x:ios-F01B89..] 6 
21:50:58.105 [hello-uni-app-x:ios-F01B89..]      page = await program.reLaunch(PAGE_PATH);
21:50:58.105 [hello-uni-app-x:ios-F01B89..] 7 
21:50:58.105 [hello-uni-app-x:ios-F01B89..]      await page.waitFor('view');
21:50:58.105 [hello-uni-app-x:ios-F01B89..] 8 
21:50:58.105 [hello-uni-app-x:ios-F01B89..]    });
21:50:58.105 [hello-uni-app-x:ios-F01B89..] 
21:50:58.105 [hello-uni-app-x:ios-F01B89..] at pages/API/get-element-by-id/get-element-by-id.test.js:5:3
21:50:58.105 [hello-uni-app-x:ios-F01B89..] at Object.<anonymous> (pages/API/get-element-by-id/get-element-by-id.test.js:4:1)
21:50:58.106 [hello-uni-app-x:ios-F01B89..] 
21:50:58.106 [hello-uni-app-x:ios-F01B89..] FAIL pages/API/get-launch-options-sync/get-launch-options-sync.test.js
21:50:58.106 [hello-uni-app-x:ios-F01B89..] 
21:50:58.106 [hello-uni-app-x:ios-F01B89..] ● getLaunchOptionsSync › getLaunchOptionsSync
21:50:58.106 [hello-uni-app-x:ios-F01B89..] 
21:50:58.106 [hello-uni-app-x:ios-F01B89..] 
21:50:58.106 [hello-uni-app-x:ios-F01B89..] 
21:50:58.106 [hello-uni-app-x:ios-F01B89..] at Q.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:3259)
21:50:58.106 [hello-uni-app-x:ios-F01B89..] at WebSocket.<anonymous> (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:1092)
21:50:58.106 [hello-uni-app-x:ios-F01B89..] at WebSocket.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/event-target.js:199:18)
21:50:58.106 [hello-uni-app-x:ios-F01B89..] at Receiver.receiverOnMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1137:20)
21:50:58.106 [hello-uni-app-x:ios-F01B89..] at Receiver.dataMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:528:14)
21:50:58.106 [hello-uni-app-x:ios-F01B89..] at Receiver.getData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:446:17)
21:50:58.106 [hello-uni-app-x:ios-F01B89..] at Receiver.startLoop (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:148:22)
21:50:58.106 [hello-uni-app-x:ios-F01B89..] at Receiver._write (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:83:10)
21:50:58.107 [hello-uni-app-x:ios-F01B89..] at Socket.socketOnData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1231:35)
21:50:58.107 [hello-uni-app-x:ios-F01B89..] 
21:50:58.107 [hello-uni-app-x:ios-F01B89..] FAIL pages/component/text/text-props.test.js
21:50:58.107 [hello-uni-app-x:ios-F01B89..] 
21:50:58.107 [hello-uni-app-x:ios-F01B89..] ● text-props › text nested
21:50:58.107 [hello-uni-app-x:ios-F01B89..] 
21:50:58.107 [hello-uni-app-x:ios-F01B89..] 
21:50:58.107 [hello-uni-app-x:ios-F01B89..] 
21:50:58.107 [hello-uni-app-x:ios-F01B89..] at Q.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:3259)
21:50:58.107 [hello-uni-app-x:ios-F01B89..] at WebSocket.<anonymous> (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:1092)
21:50:58.107 [hello-uni-app-x:ios-F01B89..] at WebSocket.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/event-target.js:199:18)
21:50:58.107 [hello-uni-app-x:ios-F01B89..] at Receiver.receiverOnMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1137:20)
21:50:58.107 [hello-uni-app-x:ios-F01B89..] at Receiver.dataMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:528:14)
21:50:58.107 [hello-uni-app-x:ios-F01B89..] at Receiver.getData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:446:17)
21:50:58.107 [hello-uni-app-x:ios-F01B89..] at Receiver.startLoop (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:148:22)
21:50:58.108 [hello-uni-app-x:ios-F01B89..] at Receiver._write (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:83:10)
21:50:58.108 [hello-uni-app-x:ios-F01B89..] at Socket.socketOnData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1231:35)
21:50:58.108 [hello-uni-app-x:ios-F01B89..] 
21:50:58.108 [hello-uni-app-x:ios-F01B89..] ● text-props › text nested
21:50:58.108 [hello-uni-app-x:ios-F01B89..] 
21:50:58.108 [hello-uni-app-x:ios-F01B89..] expect(received).toBe(expected) // Object.is equality
21:50:58.108 [hello-uni-app-x:ios-F01B89..] 
21:50:58.108 [hello-uni-app-x:ios-F01B89..] Expected: "二级节点文字红色且背景色黄色"
21:50:58.108 [hello-uni-app-x:ios-F01B89..] Received: "二级节点红色且背景色黄色 三级节点不继承二级的颜色"
21:50:58.108 [hello-uni-app-x:ios-F01B89..] 
21:50:58.108 [hello-uni-app-x:ios-F01B89..] 30 
21:50:58.108 [hello-uni-app-x:ios-F01B89..]        const element = await page.$('#text-nested')
21:50:58.108 [hello-uni-app-x:ios-F01B89..] 31 
21:50:58.108 [hello-uni-app-x:ios-F01B89..]        if (element != null) {
21:50:58.109 [hello-uni-app-x:ios-F01B89..] > 32 
21:50:58.109 [hello-uni-app-x:ios-F01B89..]          expect(await element.text()).toBe("二级节点文字红色且背景色黄色")
21:50:58.109 [hello-uni-app-x:ios-F01B89..] 
21:50:58.109 [hello-uni-app-x:ios-F01B89..]                                       ^
21:50:58.109 [hello-uni-app-x:ios-F01B89..] 33 
21:50:58.109 [hello-uni-app-x:ios-F01B89..]        }
21:50:58.109 [hello-uni-app-x:ios-F01B89..] 34 
21:50:58.109 [hello-uni-app-x:ios-F01B89..]    })
21:50:58.109 [hello-uni-app-x:ios-F01B89..] 35 
21:50:58.109 [hello-uni-app-x:ios-F01B89..]  })
21:50:58.109 [hello-uni-app-x:ios-F01B89..] 
21:50:58.109 [hello-uni-app-x:ios-F01B89..] at Object.<anonymous> (pages/component/text/text-props.test.js:32:38)
21:50:58.109 [hello-uni-app-x:ios-F01B89..] 
21:50:58.109 [hello-uni-app-x:ios-F01B89..] FAIL pages/component/button/button.test.js
21:50:58.109 [hello-uni-app-x:ios-F01B89..] 
21:50:58.110 [hello-uni-app-x:ios-F01B89..] ● Button.uvue › checkUniButtonElement
21:50:58.110 [hello-uni-app-x:ios-F01B89..] 
21:50:58.110 [hello-uni-app-x:ios-F01B89..] 
21:50:58.110 [hello-uni-app-x:ios-F01B89..] 
21:50:58.110 [hello-uni-app-x:ios-F01B89..] at Q.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:3259)
21:50:58.110 [hello-uni-app-x:ios-F01B89..] at WebSocket.<anonymous> (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:1092)
21:50:58.110 [hello-uni-app-x:ios-F01B89..] at WebSocket.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/event-target.js:199:18)
21:50:58.110 [hello-uni-app-x:ios-F01B89..] at Receiver.receiverOnMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1137:20)
21:50:58.110 [hello-uni-app-x:ios-F01B89..] at Receiver.dataMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:528:14)
21:50:58.110 [hello-uni-app-x:ios-F01B89..] at Receiver.getData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:446:17)
21:50:58.111 [hello-uni-app-x:ios-F01B89..] at Receiver.startLoop (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:148:22)
21:50:58.111 [hello-uni-app-x:ios-F01B89..] at Receiver._write (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:83:10)
21:50:58.111 [hello-uni-app-x:ios-F01B89..] at Socket.socketOnData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1231:35)
21:50:58.111 [hello-uni-app-x:ios-F01B89..] 
21:50:58.111 [hello-uni-app-x:ios-F01B89..] FAIL pages/component/picker-view/picker-view.test.js
21:50:58.111 [hello-uni-app-x:ios-F01B89..] 
21:50:58.111 [hello-uni-app-x:ios-F01B89..] ● PickerView.uvue › value
21:50:58.111 [hello-uni-app-x:ios-F01B89..] 
21:50:58.111 [hello-uni-app-x:ios-F01B89..] TypeError: Cannot read properties of null (reading 'toString')
21:50:58.111 [hello-uni-app-x:ios-F01B89..] 
21:50:58.111 [hello-uni-app-x:ios-F01B89..] 
21:50:58.111 [hello-uni-app-x:ios-F01B89..] 19 
21:50:58.111 [hello-uni-app-x:ios-F01B89..]      const newValue1 = await el.property('value')
21:50:58.111 [hello-uni-app-x:ios-F01B89..] 20 
21:50:58.112 [hello-uni-app-x:ios-F01B89..]      // TODO
21:50:58.112 [hello-uni-app-x:ios-F01B89..] > 21 
21:50:58.112 [hello-uni-app-x:ios-F01B89..]      expect(newValue1.toString()).toEqual('0,0,0')
21:50:58.112 [hello-uni-app-x:ios-F01B89..] 
21:50:58.112 [hello-uni-app-x:ios-F01B89..]                       ^
21:50:58.112 [hello-uni-app-x:ios-F01B89..] 22 
21:50:58.112 [hello-uni-app-x:ios-F01B89..]      if (process.env.UNI_PLATFORM === 'app-android') {
21:50:58.112 [hello-uni-app-x:ios-F01B89..] 23 
21:50:58.112 [hello-uni-app-x:ios-F01B89..]        expect(await getData('result')).toEqual([0, 0, 0])
21:50:58.112 [hello-uni-app-x:ios-F01B89..] 24 
21:50:58.112 [hello-uni-app-x:ios-F01B89..]      }
21:50:58.112 [hello-uni-app-x:ios-F01B89..] 
21:50:58.112 [hello-uni-app-x:ios-F01B89..] at Object.<anonymous> (pages/component/picker-view/picker-view.test.js:21:22)
21:50:58.112 [hello-uni-app-x:ios-F01B89..] 
21:50:58.113 [hello-uni-app-x:ios-F01B89..] ● PickerView.uvue › indicator-style
21:50:58.113 [hello-uni-app-x:ios-F01B89..] 
21:50:58.113 [hello-uni-app-x:ios-F01B89..] expect(received).toBe(expected) // Object.is equality
21:50:58.113 [hello-uni-app-x:ios-F01B89..] 
21:50:58.113 [hello-uni-app-x:ios-F01B89..] Expected: "height: 100px;"
21:50:58.113 [hello-uni-app-x:ios-F01B89..] Received: "null"
21:50:58.113 [hello-uni-app-x:ios-F01B89..] 
21:50:58.113 [hello-uni-app-x:ios-F01B89..] 46 
21:50:58.113 [hello-uni-app-x:ios-F01B89..]      })
21:50:58.113 [hello-uni-app-x:ios-F01B89..] 47 
21:50:58.113 [hello-uni-app-x:ios-F01B89..]      await page.waitFor(500)
21:50:58.113 [hello-uni-app-x:ios-F01B89..] > 48 
21:50:58.113 [hello-uni-app-x:ios-F01B89..]      expect(await el.attribute('indicatorStyle')).toBe('height: 100px;')
21:50:58.114 [hello-uni-app-x:ios-F01B89..] 
21:50:58.114 [hello-uni-app-x:ios-F01B89..]                                                   ^
21:50:58.114 [hello-uni-app-x:ios-F01B89..] 49 
21:50:58.114 [hello-uni-app-x:ios-F01B89..]    })
21:50:58.114 [hello-uni-app-x:ios-F01B89..] 50 
21:50:58.114 [hello-uni-app-x:ios-F01B89..]    it('mask-top-style', async () => {
21:50:58.114 [hello-uni-app-x:ios-F01B89..] 51 
21:50:58.114 [hello-uni-app-x:ios-F01B89..]      const el = await page.$('.picker-view')
21:50:58.114 [hello-uni-app-x:ios-F01B89..] 
21:50:58.114 [hello-uni-app-x:ios-F01B89..] at Object.<anonymous> (pages/component/picker-view/picker-view.test.js:48:50)
21:50:58.114 [hello-uni-app-x:ios-F01B89..] 
21:50:58.114 [hello-uni-app-x:ios-F01B89..] ● PickerView.uvue › mask-top-style
21:50:58.114 [hello-uni-app-x:ios-F01B89..] 
21:50:58.115 [hello-uni-app-x:ios-F01B89..] expect(received).toBe(expected) // Object.is equality
21:50:58.115 [hello-uni-app-x:ios-F01B89..] 
21:50:58.115 [hello-uni-app-x:ios-F01B89..] Expected: "background: #ffffff;"
21:50:58.115 [hello-uni-app-x:ios-F01B89..] Received: "null"
21:50:58.115 [hello-uni-app-x:ios-F01B89..] 
21:50:58.115 [hello-uni-app-x:ios-F01B89..] 53 
21:50:58.115 [hello-uni-app-x:ios-F01B89..]        maskTopStyle: 'background: #ffffff;',
21:50:58.115 [hello-uni-app-x:ios-F01B89..] 54 
21:50:58.115 [hello-uni-app-x:ios-F01B89..]      })
21:50:58.115 [hello-uni-app-x:ios-F01B89..] > 55 
21:50:58.116 [hello-uni-app-x:ios-F01B89..]      expect(await el.attribute('mask-top-style')).toBe('background: #ffffff;')
21:50:58.116 [hello-uni-app-x:ios-F01B89..] 
21:50:58.116 [hello-uni-app-x:ios-F01B89..]                                                   ^
21:50:58.116 [hello-uni-app-x:ios-F01B89..] 56 
21:50:58.116 [hello-uni-app-x:ios-F01B89..]    })
21:50:58.116 [hello-uni-app-x:ios-F01B89..] 57 
21:50:58.116 [hello-uni-app-x:ios-F01B89..]    it('mask-bottom-style', async () => {
21:50:58.116 [hello-uni-app-x:ios-F01B89..] 58 
21:50:58.116 [hello-uni-app-x:ios-F01B89..]      const el = await page.$('.picker-view')
21:50:58.116 [hello-uni-app-x:ios-F01B89..] 
21:50:58.116 [hello-uni-app-x:ios-F01B89..] at Object.<anonymous> (pages/component/picker-view/picker-view.test.js:55:50)
21:50:58.116 [hello-uni-app-x:ios-F01B89..] 
21:50:58.117 [hello-uni-app-x:ios-F01B89..] ● PickerView.uvue › mask-bottom-style
21:50:58.117 [hello-uni-app-x:ios-F01B89..] 
21:50:58.117 [hello-uni-app-x:ios-F01B89..] expect(received).toBe(expected) // Object.is equality
21:50:58.117 [hello-uni-app-x:ios-F01B89..] 
21:50:58.117 [hello-uni-app-x:ios-F01B89..] Expected: "background: #ffffff;"
21:50:58.117 [hello-uni-app-x:ios-F01B89..] Received: "null"
21:50:58.117 [hello-uni-app-x:ios-F01B89..] 
21:50:58.117 [hello-uni-app-x:ios-F01B89..] 60 
21:50:58.117 [hello-uni-app-x:ios-F01B89..]        maskBottomStyle: 'background: #ffffff;',
21:50:58.117 [hello-uni-app-x:ios-F01B89..] 61 
21:50:58.117 [hello-uni-app-x:ios-F01B89..]      })
21:50:58.118 [hello-uni-app-x:ios-F01B89..] > 62 
21:50:58.118 [hello-uni-app-x:ios-F01B89..]      expect(await el.attribute('mask-bottom-style')).toBe('background: #ffffff;')
21:50:58.118 [hello-uni-app-x:ios-F01B89..] 
21:50:58.118 [hello-uni-app-x:ios-F01B89..]                                                      ^
21:50:58.118 [hello-uni-app-x:ios-F01B89..] 63 
21:50:58.118 [hello-uni-app-x:ios-F01B89..]    })
21:50:58.118 [hello-uni-app-x:ios-F01B89..] 64 
21:50:58.119 [hello-uni-app-x:ios-F01B89..]  })
21:50:58.119 [hello-uni-app-x:ios-F01B89..] 65 
21:50:58.119 [hello-uni-app-x:ios-F01B89..] 
21:50:58.119 [hello-uni-app-x:ios-F01B89..] 
21:50:58.119 [hello-uni-app-x:ios-F01B89..] at Object.<anonymous> (pages/component/picker-view/picker-view.test.js:62:53)
21:50:58.119 [hello-uni-app-x:ios-F01B89..] 
21:50:58.119 [hello-uni-app-x:ios-F01B89..] FAIL pages/component/sticky-section/sticky-section.test.js (31.274 s)
21:50:58.119 [hello-uni-app-x:ios-F01B89..] 
21:50:58.119 [hello-uni-app-x:ios-F01B89..] ● component-native-sticky-section › check_sticky_section
21:50:58.119 [hello-uni-app-x:ios-F01B89..] 
21:50:58.119 [hello-uni-app-x:ios-F01B89..] 
21:50:58.119 [hello-uni-app-x:ios-F01B89..] 
21:50:58.119 [hello-uni-app-x:ios-F01B89..] at Q.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:3259)
21:50:58.119 [hello-uni-app-x:ios-F01B89..] at WebSocket.<anonymous> (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:1092)
21:50:58.120 [hello-uni-app-x:ios-F01B89..] at WebSocket.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/event-target.js:199:18)
21:50:58.120 [hello-uni-app-x:ios-F01B89..] at Receiver.receiverOnMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1137:20)
21:50:58.120 [hello-uni-app-x:ios-F01B89..] at Receiver.dataMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:528:14)
21:50:58.120 [hello-uni-app-x:ios-F01B89..] at Receiver.getData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:446:17)
21:50:58.120 [hello-uni-app-x:ios-F01B89..] at Receiver.startLoop (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:148:22)
21:50:58.120 [hello-uni-app-x:ios-F01B89..] at Receiver._write (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:83:10)
21:50:58.120 [hello-uni-app-x:ios-F01B89..] at Socket.socketOnData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1231:35)
21:50:58.120 [hello-uni-app-x:ios-F01B89..] 
21:50:58.120 [hello-uni-app-x:ios-F01B89..] ● component-native-sticky-section › check_goto_sticky_header
21:50:58.120 [hello-uni-app-x:ios-F01B89..] 
21:50:58.120 [hello-uni-app-x:ios-F01B89..] thrown: "Exceeded timeout of 30000 ms for a test.
21:50:58.121 [hello-uni-app-x:ios-F01B89..] Use jest.setTimeout(newTimeout) to increase the timeout value, if this is a long-running test."
21:50:58.121 [hello-uni-app-x:ios-F01B89..] 
21:50:58.121 [hello-uni-app-x:ios-F01B89..] 13 
21:50:58.121 [hello-uni-app-x:ios-F01B89..]    })
21:50:58.121 [hello-uni-app-x:ios-F01B89..] 14 
21:50:58.121 [hello-uni-app-x:ios-F01B89..] 
21:50:58.121 [hello-uni-app-x:ios-F01B89..] > 15 
21:50:58.121 [hello-uni-app-x:ios-F01B89..]    it('check_goto_sticky_header', async () => {
21:50:58.121 [hello-uni-app-x:ios-F01B89..] 
21:50:58.121 [hello-uni-app-x:ios-F01B89..]    ^
21:50:58.121 [hello-uni-app-x:ios-F01B89..] 16 
21:50:58.121 [hello-uni-app-x:ios-F01B89..]      //滚动回顶部
21:50:58.121 [hello-uni-app-x:ios-F01B89..] 17 
21:50:58.121 [hello-uni-app-x:ios-F01B89..]      await page.callMethod('toTop')
21:50:58.122 [hello-uni-app-x:ios-F01B89..] 18 
21:50:58.122 [hello-uni-app-x:ios-F01B89..]      page.waitFor(100)
21:50:58.122 [hello-uni-app-x:ios-F01B89..] 
21:50:58.122 [hello-uni-app-x:ios-F01B89..] at pages/component/sticky-section/sticky-section.test.js:15:3
21:50:58.122 [hello-uni-app-x:ios-F01B89..] at Object.<anonymous> (pages/component/sticky-section/sticky-section.test.js:1:51)
21:50:58.122 [hello-uni-app-x:ios-F01B89..] 
21:50:58.122 [hello-uni-app-x:ios-F01B89..] FAIL pages/component/list-view/list-view.test.js (9.545 s)
21:50:58.122 [hello-uni-app-x:ios-F01B89..] 
21:50:58.122 [hello-uni-app-x:ios-F01B89..] ● component-native-list-view › check_scroll_height
21:50:58.122 [hello-uni-app-x:ios-F01B89..] 
21:50:58.122 [hello-uni-app-x:ios-F01B89..] expect(received).toBe(expected) // Object.is equality
21:50:58.122 [hello-uni-app-x:ios-F01B89..] 
21:50:58.122 [hello-uni-app-x:ios-F01B89..] Expected: true
21:50:58.123 [hello-uni-app-x:ios-F01B89..] Received: false
21:50:58.123 [hello-uni-app-x:ios-F01B89..] 
21:50:58.123 [hello-uni-app-x:ios-F01B89..] 13 
21:50:58.123 [hello-uni-app-x:ios-F01B89..]      await page.waitFor(600)
21:50:58.123 [hello-uni-app-x:ios-F01B89..] 14 
21:50:58.123 [hello-uni-app-x:ios-F01B89..]      const value = await page.callMethod('check_scroll_height')
21:50:58.123 [hello-uni-app-x:ios-F01B89..] > 15 
21:50:58.123 [hello-uni-app-x:ios-F01B89..]      expect(value).toBe(true)
21:50:58.123 [hello-uni-app-x:ios-F01B89..] 
21:50:58.123 [hello-uni-app-x:ios-F01B89..]                    ^
21:50:58.124 [hello-uni-app-x:ios-F01B89..] 16 
21:50:58.124 [hello-uni-app-x:ios-F01B89..]    })
21:50:58.124 [hello-uni-app-x:ios-F01B89..] 17 
21:50:58.124 [hello-uni-app-x:ios-F01B89..] 
21:50:58.124 [hello-uni-app-x:ios-F01B89..] 18 
21:50:58.124 [hello-uni-app-x:ios-F01B89..]    //检测竖向scrolltop属性赋值
21:50:58.124 [hello-uni-app-x:ios-F01B89..] 
21:50:58.124 [hello-uni-app-x:ios-F01B89..] at Object.<anonymous> (pages/component/list-view/list-view.test.js:15:19)
21:50:58.124 [hello-uni-app-x:ios-F01B89..] 
21:50:58.124 [hello-uni-app-x:ios-F01B89..] ● component-native-list-view › check_scroll_width
21:50:58.124 [hello-uni-app-x:ios-F01B89..] 
21:50:58.125 [hello-uni-app-x:ios-F01B89..] expect(received).toBe(expected) // Object.is equality
21:50:58.125 [hello-uni-app-x:ios-F01B89..] 
21:50:58.125 [hello-uni-app-x:ios-F01B89..] Expected: true
21:50:58.125 [hello-uni-app-x:ios-F01B89..] Received: false
21:50:58.125 [hello-uni-app-x:ios-F01B89..] 
21:50:58.125 [hello-uni-app-x:ios-F01B89..] 57 
21:50:58.125 [hello-uni-app-x:ios-F01B89..]      await page.waitFor(600)
21:50:58.125 [hello-uni-app-x:ios-F01B89..] 58 
21:50:58.125 [hello-uni-app-x:ios-F01B89..]      const value = await page.callMethod('check_scroll_width')
21:50:58.125 [hello-uni-app-x:ios-F01B89..] > 59 
21:50:58.126 [hello-uni-app-x:ios-F01B89..]      expect(value).toBe(true)
21:50:58.126 [hello-uni-app-x:ios-F01B89..] 
21:50:58.126 [hello-uni-app-x:ios-F01B89..]                    ^
21:50:58.126 [hello-uni-app-x:ios-F01B89..] 60 
21:50:58.126 [hello-uni-app-x:ios-F01B89..]    })
21:50:58.126 [hello-uni-app-x:ios-F01B89..] 61 
21:50:58.126 [hello-uni-app-x:ios-F01B89..] 
21:50:58.126 [hello-uni-app-x:ios-F01B89..] 62 
21:50:58.126 [hello-uni-app-x:ios-F01B89..]    //检测下拉刷新
21:50:58.126 [hello-uni-app-x:ios-F01B89..] 
21:50:58.126 [hello-uni-app-x:ios-F01B89..] at Object.<anonymous> (pages/component/list-view/list-view.test.js:59:19)
21:50:58.126 [hello-uni-app-x:ios-F01B89..] 
21:50:58.127 [hello-uni-app-x:ios-F01B89..] ● component-native-list-view › check_refresher
21:50:58.127 [hello-uni-app-x:ios-F01B89..] 
21:50:58.127 [hello-uni-app-x:ios-F01B89..] expect(received).toBe(expected) // Object.is equality
21:50:58.127 [hello-uni-app-x:ios-F01B89..] 
21:50:58.127 [hello-uni-app-x:ios-F01B89..] Expected: true
21:50:58.127 [hello-uni-app-x:ios-F01B89..] Received: false
21:50:58.127 [hello-uni-app-x:ios-F01B89..] 
21:50:58.127 [hello-uni-app-x:ios-F01B89..] 72 
21:50:58.127 [hello-uni-app-x:ios-F01B89..]      })
21:50:58.127 [hello-uni-app-x:ios-F01B89..] 73 
21:50:58.127 [hello-uni-app-x:ios-F01B89..]      await page.waitFor(2000)
21:50:58.127 [hello-uni-app-x:ios-F01B89..] > 74 
21:50:58.128 [hello-uni-app-x:ios-F01B89..]      expect(await page.data('refresherrefresh')).toBe(true)
21:50:58.128 [hello-uni-app-x:ios-F01B89..] 
21:50:58.128 [hello-uni-app-x:ios-F01B89..]                                                  ^
21:50:58.128 [hello-uni-app-x:ios-F01B89..] 75 
21:50:58.128 [hello-uni-app-x:ios-F01B89..]    })
21:50:58.128 [hello-uni-app-x:ios-F01B89..] 76 
21:50:58.128 [hello-uni-app-x:ios-F01B89..] 
21:50:58.128 [hello-uni-app-x:ios-F01B89..] 77 
21:50:58.128 [hello-uni-app-x:ios-F01B89..]    //检测竖向scroll_into_view属性赋值
21:50:58.128 [hello-uni-app-x:ios-F01B89..] 
21:50:58.128 [hello-uni-app-x:ios-F01B89..] at Object.<anonymous> (pages/component/list-view/list-view.test.js:74:49)
21:50:58.128 [hello-uni-app-x:ios-F01B89..] 
21:50:58.128 [hello-uni-app-x:ios-F01B89..] ● component-native-list-view › check_scroll_into_view_top
21:50:58.128 [hello-uni-app-x:ios-F01B89..] 
21:50:58.128 [hello-uni-app-x:ios-F01B89..] expect(received).toBeGreaterThanOrEqual(expected)
21:50:58.129 [hello-uni-app-x:ios-F01B89..] 
21:50:58.129 [hello-uni-app-x:ios-F01B89..] Expected: >= 0
21:50:58.129 [hello-uni-app-x:ios-F01B89..] Received:    -90
21:50:58.129 [hello-uni-app-x:ios-F01B89..] 
21:50:58.129 [hello-uni-app-x:ios-F01B89..] 88 
21:50:58.129 [hello-uni-app-x:ios-F01B89..]      console.log("check_scroll_into_view_top--"+scrollTop)
21:50:58.129 [hello-uni-app-x:ios-F01B89..] 89 
21:50:58.129 [hello-uni-app-x:ios-F01B89..]      await page.callMethod('item_change_size_enum', 0)
21:50:58.129 [hello-uni-app-x:ios-F01B89..] > 90 
21:50:58.129 [hello-uni-app-x:ios-F01B89..]      expect(scrollTop-690).toBeGreaterThanOrEqual(0)
21:50:58.129 [hello-uni-app-x:ios-F01B89..] 
21:50:58.129 [hello-uni-app-x:ios-F01B89..]                            ^
21:50:58.129 [hello-uni-app-x:ios-F01B89..] 91 
21:50:58.129 [hello-uni-app-x:ios-F01B89..]    })
21:50:58.129 [hello-uni-app-x:ios-F01B89..] 92 
21:50:58.130 [hello-uni-app-x:ios-F01B89..] 
21:50:58.130 [hello-uni-app-x:ios-F01B89..] 93 
21:50:58.130 [hello-uni-app-x:ios-F01B89..]    //检测横向scroll_into_view属性赋值
21:50:58.130 [hello-uni-app-x:ios-F01B89..] 
21:50:58.130 [hello-uni-app-x:ios-F01B89..] at Object.<anonymous> (pages/component/list-view/list-view.test.js:90:27)
21:50:58.130 [hello-uni-app-x:ios-F01B89..] 
21:50:58.130 [hello-uni-app-x:ios-F01B89..] ● component-native-list-view › check_scroll_into_view_left
21:50:58.130 [hello-uni-app-x:ios-F01B89..] 
21:50:58.130 [hello-uni-app-x:ios-F01B89..] expect(received).toBeGreaterThanOrEqual(expected)
21:50:58.130 [hello-uni-app-x:ios-F01B89..] 
21:50:58.130 [hello-uni-app-x:ios-F01B89..] Expected: >= 0
21:50:58.130 [hello-uni-app-x:ios-F01B89..] Received:    -480
21:50:58.130 [hello-uni-app-x:ios-F01B89..] 
21:50:58.131 [hello-uni-app-x:ios-F01B89..] 104 
21:50:58.131 [hello-uni-app-x:ios-F01B89..]      console.log("check_scroll_into_view_left--"+scrollLeft)
21:50:58.131 [hello-uni-app-x:ios-F01B89..] 105 
21:50:58.131 [hello-uni-app-x:ios-F01B89..]      await page.callMethod('item_change_size_enum', 0)
21:50:58.131 [hello-uni-app-x:ios-F01B89..] > 106 
21:50:58.131 [hello-uni-app-x:ios-F01B89..]      expect(scrollLeft-1080).toBeGreaterThanOrEqual(0)
21:50:58.131 [hello-uni-app-x:ios-F01B89..] 
21:50:58.131 [hello-uni-app-x:ios-F01B89..]                              ^
21:50:58.131 [hello-uni-app-x:ios-F01B89..] 107 
21:50:58.131 [hello-uni-app-x:ios-F01B89..]    })
21:50:58.131 [hello-uni-app-x:ios-F01B89..] 108 
21:50:58.131 [hello-uni-app-x:ios-F01B89..]  })
21:50:58.131 [hello-uni-app-x:ios-F01B89..] 109 
21:50:58.131 [hello-uni-app-x:ios-F01B89..] 
21:50:58.132 [hello-uni-app-x:ios-F01B89..] 
21:50:58.132 [hello-uni-app-x:ios-F01B89..] at Object.<anonymous> (pages/component/list-view/list-view.test.js:106:29)
21:50:58.132 [hello-uni-app-x:ios-F01B89..] 
21:50:58.132 [hello-uni-app-x:ios-F01B89..] FAIL pages/component/list-view/list-view-multiplex.test.js
21:50:58.132 [hello-uni-app-x:ios-F01B89..] 
21:50:58.132 [hello-uni-app-x:ios-F01B89..] ● component-native-list-view › check_list_item_multiplex
21:50:58.132 [hello-uni-app-x:ios-F01B89..] 
21:50:58.132 [hello-uni-app-x:ios-F01B89..] 
21:50:58.132 [hello-uni-app-x:ios-F01B89..] 
21:50:58.132 [hello-uni-app-x:ios-F01B89..] at Q.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:3259)
21:50:58.133 [hello-uni-app-x:ios-F01B89..] at WebSocket.<anonymous> (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:1092)
21:50:58.133 [hello-uni-app-x:ios-F01B89..] at WebSocket.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/event-target.js:199:18)
21:50:58.133 [hello-uni-app-x:ios-F01B89..] at Receiver.receiverOnMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1137:20)
21:50:58.133 [hello-uni-app-x:ios-F01B89..] at Receiver.dataMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:528:14)
21:50:58.133 [hello-uni-app-x:ios-F01B89..] at Receiver.getData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:446:17)
21:50:58.133 [hello-uni-app-x:ios-F01B89..] at Receiver.startLoop (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:148:22)
21:50:58.133 [hello-uni-app-x:ios-F01B89..] at Receiver._write (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:83:10)
21:50:58.133 [hello-uni-app-x:ios-F01B89..] at Socket.socketOnData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1231:35)
21:50:58.133 [hello-uni-app-x:ios-F01B89..] 
21:50:58.133 [hello-uni-app-x:ios-F01B89..] FAIL pages/component/general-event/transition-event.test.js (7.122 s)
21:50:58.134 [hello-uni-app-x:ios-F01B89..] 
21:50:58.134 [hello-uni-app-x:ios-F01B89..] ● transition event › transitionend
21:50:58.134 [hello-uni-app-x:ios-F01B89..] 
21:50:58.134 [hello-uni-app-x:ios-F01B89..] expect(received).toBe(expected) // Object.is equality
21:50:58.134 [hello-uni-app-x:ios-F01B89..] 
21:50:58.134 [hello-uni-app-x:ios-F01B89..] Expected: true
21:50:58.134 [hello-uni-app-x:ios-F01B89..] Received: false
21:50:58.134 [hello-uni-app-x:ios-F01B89..] 
21:50:58.134 [hello-uni-app-x:ios-F01B89..] 11 
21:50:58.134 [hello-uni-app-x:ios-F01B89..]          await page.callMethod('switchBtn')
21:50:58.134 [hello-uni-app-x:ios-F01B89..] 12 
21:50:58.134 [hello-uni-app-x:ios-F01B89..]          await page.waitFor(3000)
21:50:58.135 [hello-uni-app-x:ios-F01B89..] > 13 
21:50:58.135 [hello-uni-app-x:ios-F01B89..]          expect(await page.data("onTransitionEndTriggr")).toBe(true)
21:50:58.135 [hello-uni-app-x:ios-F01B89..] 
21:50:58.135 [hello-uni-app-x:ios-F01B89..]                                                           ^
21:50:58.135 [hello-uni-app-x:ios-F01B89..] 14 
21:50:58.135 [hello-uni-app-x:ios-F01B89..]      });
21:50:58.135 [hello-uni-app-x:ios-F01B89..] 15 
21:50:58.135 [hello-uni-app-x:ios-F01B89..]  });
21:50:58.135 [hello-uni-app-x:ios-F01B89..] 16 
21:50:58.135 [hello-uni-app-x:ios-F01B89..] 
21:50:58.135 [hello-uni-app-x:ios-F01B89..] 
21:50:58.135 [hello-uni-app-x:ios-F01B89..] at Object.<anonymous> (pages/component/general-event/transition-event.test.js:13:58)
21:50:58.135 [hello-uni-app-x:ios-F01B89..] 
21:50:58.135 [hello-uni-app-x:ios-F01B89..] FAIL pages/component/checkbox/checkbox.test.js
21:50:58.136 [hello-uni-app-x:ios-F01B89..] 
21:50:58.136 [hello-uni-app-x:ios-F01B89..] ● Checkbox.uvue › checked
21:50:58.136 [hello-uni-app-x:ios-F01B89..] 
21:50:58.136 [hello-uni-app-x:ios-F01B89..] undefined is not a function (near '...e[t]...')
21:50:58.136 [hello-uni-app-x:ios-F01B89..] 
21:50:58.136 [hello-uni-app-x:ios-F01B89..] at Q.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:3259)
21:50:58.136 [hello-uni-app-x:ios-F01B89..] at WebSocket.<anonymous> (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:1092)
21:50:58.136 [hello-uni-app-x:ios-F01B89..] at WebSocket.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/event-target.js:199:18)
21:50:58.136 [hello-uni-app-x:ios-F01B89..] at Receiver.receiverOnMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1137:20)
21:50:58.136 [hello-uni-app-x:ios-F01B89..] at Receiver.dataMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:528:14)
21:50:58.136 [hello-uni-app-x:ios-F01B89..] at Receiver.getData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:446:17)
21:50:58.136 [hello-uni-app-x:ios-F01B89..] at Receiver.startLoop (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:148:22)
21:50:58.137 [hello-uni-app-x:ios-F01B89..] at Receiver._write (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:83:10)
21:50:58.137 [hello-uni-app-x:ios-F01B89..] at Socket.socketOnData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1231:35)
21:50:58.137 [hello-uni-app-x:ios-F01B89..] 
21:50:58.137 [hello-uni-app-x:ios-F01B89..] ● Checkbox.uvue › color
21:50:58.137 [hello-uni-app-x:ios-F01B89..] 
21:50:58.137 [hello-uni-app-x:ios-F01B89..] expect(received).toBe(expected) // Object.is equality
21:50:58.137 [hello-uni-app-x:ios-F01B89..] 
21:50:58.137 [hello-uni-app-x:ios-F01B89..] Expected: "#007aff"
21:50:58.137 [hello-uni-app-x:ios-F01B89..] Received: "null"
21:50:58.137 [hello-uni-app-x:ios-F01B89..] 
21:50:58.137 [hello-uni-app-x:ios-F01B89..] 55 
21:50:58.137 [hello-uni-app-x:ios-F01B89..]    it('color', async () => {
21:50:58.137 [hello-uni-app-x:ios-F01B89..] 56 
21:50:58.137 [hello-uni-app-x:ios-F01B89..]      const cb = await page.$('.cb')
21:50:58.138 [hello-uni-app-x:ios-F01B89..] > 57 
21:50:58.138 [hello-uni-app-x:ios-F01B89..]      expect(await cb.attribute('color')).toBe('#007aff')
21:50:58.138 [hello-uni-app-x:ios-F01B89..] 
21:50:58.138 [hello-uni-app-x:ios-F01B89..]                                          ^
21:50:58.138 [hello-uni-app-x:ios-F01B89..] 58 
21:50:58.138 [hello-uni-app-x:ios-F01B89..]      await page.setData({
21:50:58.138 [hello-uni-app-x:ios-F01B89..] 59 
21:50:58.138 [hello-uni-app-x:ios-F01B89..]        color: '#63acfc',
21:50:58.138 [hello-uni-app-x:ios-F01B89..] 60 
21:50:58.138 [hello-uni-app-x:ios-F01B89..]      })
21:50:58.138 [hello-uni-app-x:ios-F01B89..] 
21:50:58.139 [hello-uni-app-x:ios-F01B89..] at Object.<anonymous> (pages/component/checkbox/checkbox.test.js:57:41)
21:50:58.139 [hello-uni-app-x:ios-F01B89..] 
21:50:58.139 [hello-uni-app-x:ios-F01B89..] ● Checkbox.uvue › disabled
21:50:58.139 [hello-uni-app-x:ios-F01B89..] 
21:50:58.139 [hello-uni-app-x:ios-F01B89..] expect(received).toBe(expected) // Object.is equality
21:50:58.139 [hello-uni-app-x:ios-F01B89..] 
21:50:58.139 [hello-uni-app-x:ios-F01B89..] Expected: "true"
21:50:58.139 [hello-uni-app-x:ios-F01B89..] Received: "null"
21:50:58.139 [hello-uni-app-x:ios-F01B89..] 
21:50:58.140 [hello-uni-app-x:ios-F01B89..] 63 
21:50:58.140 [hello-uni-app-x:ios-F01B89..]    it('disabled', async () => {
21:50:58.140 [hello-uni-app-x:ios-F01B89..] 64 
21:50:58.140 [hello-uni-app-x:ios-F01B89..]      const cb = await page.$('.cb2')
21:50:58.140 [hello-uni-app-x:ios-F01B89..] > 65 
21:50:58.140 [hello-uni-app-x:ios-F01B89..]      expect(await cb.attribute('disabled')).toBe(true + '')
21:50:58.140 [hello-uni-app-x:ios-F01B89..] 
21:50:58.140 [hello-uni-app-x:ios-F01B89..]                                             ^
21:50:58.140 [hello-uni-app-x:ios-F01B89..] 66 
21:50:58.140 [hello-uni-app-x:ios-F01B89..]      await page.setData({
21:50:58.141 [hello-uni-app-x:ios-F01B89..] 67 
21:50:58.141 [hello-uni-app-x:ios-F01B89..]        disabled: false,
21:50:58.141 [hello-uni-app-x:ios-F01B89..] 68 
21:50:58.141 [hello-uni-app-x:ios-F01B89..]      })
21:50:58.141 [hello-uni-app-x:ios-F01B89..] 
21:50:58.141 [hello-uni-app-x:ios-F01B89..] at Object.<anonymous> (pages/component/checkbox/checkbox.test.js:65:44)
21:50:58.141 [hello-uni-app-x:ios-F01B89..] 
21:50:58.141 [hello-uni-app-x:ios-F01B89..] FAIL pages/component/progress/progress.test.js
21:50:58.141 [hello-uni-app-x:ios-F01B89..] 
21:50:58.141 [hello-uni-app-x:ios-F01B89..] ● Progress.uvue › percent
21:50:58.141 [hello-uni-app-x:ios-F01B89..] 
21:50:58.141 [hello-uni-app-x:ios-F01B89..] expect(received).toEqual(expected) // deep equality
21:50:58.141 [hello-uni-app-x:ios-F01B89..] 
21:50:58.142 [hello-uni-app-x:ios-F01B89..] Expected: "20"
21:50:58.142 [hello-uni-app-x:ios-F01B89..] Received: "null"
21:50:58.142 [hello-uni-app-x:ios-F01B89..] 
21:50:58.142 [hello-uni-app-x:ios-F01B89..] 17 
21:50:58.142 [hello-uni-app-x:ios-F01B89..]      await page.waitFor(1000);
21:50:58.142 [hello-uni-app-x:ios-F01B89..] 18 
21:50:58.142 [hello-uni-app-x:ios-F01B89..]      const p = await page.$('.p')
21:50:58.142 [hello-uni-app-x:ios-F01B89..] > 19 
21:50:58.142 [hello-uni-app-x:ios-F01B89..]      expect(await p.attribute('percent')).toEqual(20 + '')
21:50:58.142 [hello-uni-app-x:ios-F01B89..] 
21:50:58.142 [hello-uni-app-x:ios-F01B89..]                                           ^
21:50:58.142 [hello-uni-app-x:ios-F01B89..] 20 
21:50:58.142 [hello-uni-app-x:ios-F01B89..]      const p1 = await page.$('.p1')
21:50:58.143 [hello-uni-app-x:ios-F01B89..] 21 
21:50:58.143 [hello-uni-app-x:ios-F01B89..]      expect(await p1.attribute('percent')).toEqual(40 + '')
21:50:58.143 [hello-uni-app-x:ios-F01B89..] 22 
21:50:58.143 [hello-uni-app-x:ios-F01B89..]      const p2 = await page.$('.p2')
21:50:58.143 [hello-uni-app-x:ios-F01B89..] 
21:50:58.143 [hello-uni-app-x:ios-F01B89..] at Object.<anonymous> (pages/component/progress/progress.test.js:19:42)
21:50:58.143 [hello-uni-app-x:ios-F01B89..] 
21:50:58.143 [hello-uni-app-x:ios-F01B89..] ● Progress.uvue › show-info
21:50:58.143 [hello-uni-app-x:ios-F01B89..] 
21:50:58.143 [hello-uni-app-x:ios-F01B89..] expect(received).toEqual(expected) // deep equality
21:50:58.143 [hello-uni-app-x:ios-F01B89..] 
21:50:58.143 [hello-uni-app-x:ios-F01B89..] Expected: "true"
21:50:58.144 [hello-uni-app-x:ios-F01B89..] Received: "null"
21:50:58.144 [hello-uni-app-x:ios-F01B89..] 
21:50:58.144 [hello-uni-app-x:ios-F01B89..] 43 
21:50:58.144 [hello-uni-app-x:ios-F01B89..]    it('show-info', async () => {
21:50:58.144 [hello-uni-app-x:ios-F01B89..] 44 
21:50:58.144 [hello-uni-app-x:ios-F01B89..]      const el = await page.$('.p')
21:50:58.144 [hello-uni-app-x:ios-F01B89..] > 45 
21:50:58.144 [hello-uni-app-x:ios-F01B89..]      expect(await el.attribute('show-info')).toEqual(true + '')
21:50:58.144 [hello-uni-app-x:ios-F01B89..] 
21:50:58.144 [hello-uni-app-x:ios-F01B89..]                                              ^
21:50:58.144 [hello-uni-app-x:ios-F01B89..] 46 
21:50:58.144 [hello-uni-app-x:ios-F01B89..]      await page.setData({
21:50:58.144 [hello-uni-app-x:ios-F01B89..] 47 
21:50:58.145 [hello-uni-app-x:ios-F01B89..]        showInfo: false
21:50:58.145 [hello-uni-app-x:ios-F01B89..] 48 
21:50:58.145 [hello-uni-app-x:ios-F01B89..]      })
21:50:58.145 [hello-uni-app-x:ios-F01B89..] 
21:50:58.145 [hello-uni-app-x:ios-F01B89..] at Object.<anonymous> (pages/component/progress/progress.test.js:45:45)
21:50:58.145 [hello-uni-app-x:ios-F01B89..] 
21:50:58.145 [hello-uni-app-x:ios-F01B89..] ● Progress.uvue › border-radius
21:50:58.145 [hello-uni-app-x:ios-F01B89..] 
21:50:58.146 [hello-uni-app-x:ios-F01B89..] expect(received).toEqual(expected) // deep equality
21:50:58.146 [hello-uni-app-x:ios-F01B89..] 
21:50:58.146 [hello-uni-app-x:ios-F01B89..] Expected: "0"
21:50:58.146 [hello-uni-app-x:ios-F01B89..] Received: "null"
21:50:58.146 [hello-uni-app-x:ios-F01B89..] 
21:50:58.146 [hello-uni-app-x:ios-F01B89..] 51 
21:50:58.146 [hello-uni-app-x:ios-F01B89..]    it('border-radius', async () => {
21:50:58.146 [hello-uni-app-x:ios-F01B89..] 52 
21:50:58.146 [hello-uni-app-x:ios-F01B89..]      const el = await page.$('.p')
21:50:58.146 [hello-uni-app-x:ios-F01B89..] > 53 
21:50:58.147 [hello-uni-app-x:ios-F01B89..]      expect(await el.attribute('border-radius')).toEqual(0 + '')
21:50:58.147 [hello-uni-app-x:ios-F01B89..] 
21:50:58.147 [hello-uni-app-x:ios-F01B89..]                                                  ^
21:50:58.147 [hello-uni-app-x:ios-F01B89..] 54 
21:50:58.147 [hello-uni-app-x:ios-F01B89..]      await page.setData({
21:50:58.147 [hello-uni-app-x:ios-F01B89..] 55 
21:50:58.147 [hello-uni-app-x:ios-F01B89..]        borderRadius: 5
21:50:58.147 [hello-uni-app-x:ios-F01B89..] 56 
21:50:58.147 [hello-uni-app-x:ios-F01B89..]      })
21:50:58.147 [hello-uni-app-x:ios-F01B89..] 
21:50:58.147 [hello-uni-app-x:ios-F01B89..] at Object.<anonymous> (pages/component/progress/progress.test.js:53:49)
21:50:58.147 [hello-uni-app-x:ios-F01B89..] 
21:50:58.147 [hello-uni-app-x:ios-F01B89..] ● Progress.uvue › font-size
21:50:58.148 [hello-uni-app-x:ios-F01B89..] 
21:50:58.148 [hello-uni-app-x:ios-F01B89..] expect(received).toEqual(expected) // deep equality
21:50:58.148 [hello-uni-app-x:ios-F01B89..] 
21:50:58.148 [hello-uni-app-x:ios-F01B89..] Expected: "16"
21:50:58.148 [hello-uni-app-x:ios-F01B89..] Received: "null"
21:50:58.148 [hello-uni-app-x:ios-F01B89..] 
21:50:58.148 [hello-uni-app-x:ios-F01B89..] 59 
21:50:58.148 [hello-uni-app-x:ios-F01B89..]    it('font-size', async () => {
21:50:58.148 [hello-uni-app-x:ios-F01B89..] 60 
21:50:58.148 [hello-uni-app-x:ios-F01B89..]      const el = await page.$('.p')
21:50:58.148 [hello-uni-app-x:ios-F01B89..] > 61 
21:50:58.148 [hello-uni-app-x:ios-F01B89..]      expect(await el.attribute('font-size')).toEqual(16 + '')
21:50:58.148 [hello-uni-app-x:ios-F01B89..] 
21:50:58.149 [hello-uni-app-x:ios-F01B89..]                                              ^
21:50:58.149 [hello-uni-app-x:ios-F01B89..] 62 
21:50:58.149 [hello-uni-app-x:ios-F01B89..]      await page.setData({
21:50:58.149 [hello-uni-app-x:ios-F01B89..] 63 
21:50:58.149 [hello-uni-app-x:ios-F01B89..]        fontSize: 18
21:50:58.149 [hello-uni-app-x:ios-F01B89..] 64 
21:50:58.149 [hello-uni-app-x:ios-F01B89..]      })
21:50:58.149 [hello-uni-app-x:ios-F01B89..] 
21:50:58.149 [hello-uni-app-x:ios-F01B89..] at Object.<anonymous> (pages/component/progress/progress.test.js:61:45)
21:50:58.149 [hello-uni-app-x:ios-F01B89..] 
21:50:58.149 [hello-uni-app-x:ios-F01B89..] ● Progress.uvue › stroke-width
21:50:58.149 [hello-uni-app-x:ios-F01B89..] 
21:50:58.150 [hello-uni-app-x:ios-F01B89..] expect(received).toEqual(expected) // deep equality
21:50:58.150 [hello-uni-app-x:ios-F01B89..] 
21:50:58.150 [hello-uni-app-x:ios-F01B89..] Expected: "3"
21:50:58.150 [hello-uni-app-x:ios-F01B89..] Received: "null"
21:50:58.150 [hello-uni-app-x:ios-F01B89..] 
21:50:58.150 [hello-uni-app-x:ios-F01B89..] 67 
21:50:58.150 [hello-uni-app-x:ios-F01B89..]    it('stroke-width', async () => {
21:50:58.150 [hello-uni-app-x:ios-F01B89..] 68 
21:50:58.150 [hello-uni-app-x:ios-F01B89..]      const el = await page.$('.p')
21:50:58.150 [hello-uni-app-x:ios-F01B89..] > 69 
21:50:58.150 [hello-uni-app-x:ios-F01B89..]      expect(await el.attribute('stroke-width')).toEqual(3 + '')
21:50:58.150 [hello-uni-app-x:ios-F01B89..] 
21:50:58.150 [hello-uni-app-x:ios-F01B89..]                                                 ^
21:50:58.151 [hello-uni-app-x:ios-F01B89..] 70 
21:50:58.151 [hello-uni-app-x:ios-F01B89..]      await page.setData({
21:50:58.151 [hello-uni-app-x:ios-F01B89..] 71 
21:50:58.151 [hello-uni-app-x:ios-F01B89..]        strokeWidth: 6
21:50:58.151 [hello-uni-app-x:ios-F01B89..] 72 
21:50:58.151 [hello-uni-app-x:ios-F01B89..]      })
21:50:58.151 [hello-uni-app-x:ios-F01B89..] 
21:50:58.151 [hello-uni-app-x:ios-F01B89..] at Object.<anonymous> (pages/component/progress/progress.test.js:69:48)
21:50:58.151 [hello-uni-app-x:ios-F01B89..] 
21:50:58.151 [hello-uni-app-x:ios-F01B89..] ● Progress.uvue › backgroundColor
21:50:58.152 [hello-uni-app-x:ios-F01B89..] 
21:50:58.152 [hello-uni-app-x:ios-F01B89..] expect(received).toEqual(expected) // deep equality
21:50:58.152 [hello-uni-app-x:ios-F01B89..] 
21:50:58.152 [hello-uni-app-x:ios-F01B89..] Expected: "#EBEBEB"
21:50:58.152 [hello-uni-app-x:ios-F01B89..] Received: "null"
21:50:58.152 [hello-uni-app-x:ios-F01B89..] 
21:50:58.152 [hello-uni-app-x:ios-F01B89..] 75 
21:50:58.152 [hello-uni-app-x:ios-F01B89..]    it('backgroundColor', async () => {
21:50:58.152 [hello-uni-app-x:ios-F01B89..] 76 
21:50:58.152 [hello-uni-app-x:ios-F01B89..]      const el = await page.$('.p')
21:50:58.152 [hello-uni-app-x:ios-F01B89..] > 77 
21:50:58.152 [hello-uni-app-x:ios-F01B89..]      expect(await el.attribute('background-color')).toEqual('#EBEBEB')
21:50:58.152 [hello-uni-app-x:ios-F01B89..] 
21:50:58.153 [hello-uni-app-x:ios-F01B89..]                                                     ^
21:50:58.153 [hello-uni-app-x:ios-F01B89..] 78 
21:50:58.153 [hello-uni-app-x:ios-F01B89..]      await page.setData({
21:50:58.153 [hello-uni-app-x:ios-F01B89..] 79 
21:50:58.153 [hello-uni-app-x:ios-F01B89..]        backgroundColor: "#007aff"
21:50:58.153 [hello-uni-app-x:ios-F01B89..] 80 
21:50:58.153 [hello-uni-app-x:ios-F01B89..]      })
21:50:58.153 [hello-uni-app-x:ios-F01B89..] 
21:50:58.153 [hello-uni-app-x:ios-F01B89..] at Object.<anonymous> (pages/component/progress/progress.test.js:77:52)
21:50:58.153 [hello-uni-app-x:ios-F01B89..] 
21:50:58.153 [hello-uni-app-x:ios-F01B89..] FAIL pages/component/radio/radio.test.js
21:50:58.153 [hello-uni-app-x:ios-F01B89..] 
21:50:58.154 [hello-uni-app-x:ios-F01B89..] ● Radio.uvue › checked
21:50:58.154 [hello-uni-app-x:ios-F01B89..] 
21:50:58.154 [hello-uni-app-x:ios-F01B89..] undefined is not a function (near '...e[t]...')
21:50:58.154 [hello-uni-app-x:ios-F01B89..] 
21:50:58.154 [hello-uni-app-x:ios-F01B89..] at Q.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:3259)
21:50:58.154 [hello-uni-app-x:ios-F01B89..] at WebSocket.<anonymous> (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:1092)
21:50:58.154 [hello-uni-app-x:ios-F01B89..] at WebSocket.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/event-target.js:199:18)
21:50:58.154 [hello-uni-app-x:ios-F01B89..] at Receiver.receiverOnMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1137:20)
21:50:58.154 [hello-uni-app-x:ios-F01B89..] at Receiver.dataMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:528:14)
21:50:58.154 [hello-uni-app-x:ios-F01B89..] at Receiver.getData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:446:17)
21:50:58.162 [hello-uni-app-x:ios-F01B89..] at Receiver.startLoop (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:148:22)
21:50:58.163 [hello-uni-app-x:ios-F01B89..] at Receiver._write (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:83:10)
21:50:58.163 [hello-uni-app-x:ios-F01B89..] at Socket.socketOnData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1231:35)
21:50:58.163 [hello-uni-app-x:ios-F01B89..] 
21:50:58.163 [hello-uni-app-x:ios-F01B89..] ● Radio.uvue › color
21:50:58.163 [hello-uni-app-x:ios-F01B89..] 
21:50:58.163 [hello-uni-app-x:ios-F01B89..] expect(received).toBe(expected) // Object.is equality
21:50:58.163 [hello-uni-app-x:ios-F01B89..] 
21:50:58.163 [hello-uni-app-x:ios-F01B89..] Expected: "#007aff"
21:50:58.163 [hello-uni-app-x:ios-F01B89..] Received: "null"
21:50:58.163 [hello-uni-app-x:ios-F01B89..] 
21:50:58.164 [hello-uni-app-x:ios-F01B89..] 52 
21:50:58.164 [hello-uni-app-x:ios-F01B89..]    it('color', async () => {
21:50:58.164 [hello-uni-app-x:ios-F01B89..] 53 
21:50:58.164 [hello-uni-app-x:ios-F01B89..]      const radio = await page.$('.r')
21:50:58.164 [hello-uni-app-x:ios-F01B89..] > 54 
21:50:58.164 [hello-uni-app-x:ios-F01B89..]      expect(await radio.attribute('color')).toBe('#007aff')
21:50:58.164 [hello-uni-app-x:ios-F01B89..] 
21:50:58.164 [hello-uni-app-x:ios-F01B89..]                                             ^
21:50:58.164 [hello-uni-app-x:ios-F01B89..] 55 
21:50:58.164 [hello-uni-app-x:ios-F01B89..]      await page.setData({
21:50:58.164 [hello-uni-app-x:ios-F01B89..] 56 
21:50:58.164 [hello-uni-app-x:ios-F01B89..]        color: '#63acfc',
21:50:58.164 [hello-uni-app-x:ios-F01B89..] 57 
21:50:58.165 [hello-uni-app-x:ios-F01B89..]      })
21:50:58.165 [hello-uni-app-x:ios-F01B89..] 
21:50:58.165 [hello-uni-app-x:ios-F01B89..] at Object.<anonymous> (pages/component/radio/radio.test.js:54:44)
21:50:58.165 [hello-uni-app-x:ios-F01B89..] 
21:50:58.165 [hello-uni-app-x:ios-F01B89..] ● Radio.uvue › disabled
21:50:58.165 [hello-uni-app-x:ios-F01B89..] 
21:50:58.165 [hello-uni-app-x:ios-F01B89..] expect(received).toBe(expected) // Object.is equality
21:50:58.165 [hello-uni-app-x:ios-F01B89..] 
21:50:58.165 [hello-uni-app-x:ios-F01B89..] Expected: "true"
21:50:58.165 [hello-uni-app-x:ios-F01B89..] Received: "null"
21:50:58.165 [hello-uni-app-x:ios-F01B89..] 
21:50:58.165 [hello-uni-app-x:ios-F01B89..] 60 
21:50:58.165 [hello-uni-app-x:ios-F01B89..]    it('disabled', async () => {
21:50:58.165 [hello-uni-app-x:ios-F01B89..] 61 
21:50:58.166 [hello-uni-app-x:ios-F01B89..]      const radio = await page.$('.r2')
21:50:58.166 [hello-uni-app-x:ios-F01B89..] > 62 
21:50:58.166 [hello-uni-app-x:ios-F01B89..]      expect(await radio.attribute('disabled')).toBe(true + '')
21:50:58.166 [hello-uni-app-x:ios-F01B89..] 
21:50:58.167 [hello-uni-app-x:ios-F01B89..]                                                ^
21:50:58.167 [hello-uni-app-x:ios-F01B89..] 63 
21:50:58.167 [hello-uni-app-x:ios-F01B89..]      await page.setData({
21:50:58.167 [hello-uni-app-x:ios-F01B89..] 64 
21:50:58.167 [hello-uni-app-x:ios-F01B89..]        disabled: false,
21:50:58.167 [hello-uni-app-x:ios-F01B89..] 65 
21:50:58.167 [hello-uni-app-x:ios-F01B89..]      })
21:50:58.167 [hello-uni-app-x:ios-F01B89..] 
21:50:58.167 [hello-uni-app-x:ios-F01B89..] at Object.<anonymous> (pages/component/radio/radio.test.js:62:47)
21:50:58.167 [hello-uni-app-x:ios-F01B89..] 
21:50:58.167 [hello-uni-app-x:ios-F01B89..] FAIL pages/component/swiper/swiper.test.js (11.087 s)
21:50:58.167 [hello-uni-app-x:ios-F01B89..] 
21:50:58.168 [hello-uni-app-x:ios-F01B89..] ● test swiper › check autoplay loop
21:50:58.168 [hello-uni-app-x:ios-F01B89..] 
21:50:58.168 [hello-uni-app-x:ios-F01B89..] expect(received).toEqual(expected) // deep equality
21:50:58.168 [hello-uni-app-x:ios-F01B89..] 
21:50:58.168 [hello-uni-app-x:ios-F01B89..] Expected: 0
21:50:58.168 [hello-uni-app-x:ios-F01B89..] Received: 2
21:50:58.168 [hello-uni-app-x:ios-F01B89..] 
21:50:58.168 [hello-uni-app-x:ios-F01B89..] 42 
21:50:58.168 [hello-uni-app-x:ios-F01B89..]      expect(await getData('currentValChange')).toEqual(2)
21:50:58.168 [hello-uni-app-x:ios-F01B89..] 43 
21:50:58.168 [hello-uni-app-x:ios-F01B89..]      await page.waitFor(2000)
21:50:58.168 [hello-uni-app-x:ios-F01B89..] > 44 
21:50:58.168 [hello-uni-app-x:ios-F01B89..]      expect(await getData('currentValChange')).toEqual(0)
21:50:58.168 [hello-uni-app-x:ios-F01B89..] 
21:50:58.169 [hello-uni-app-x:ios-F01B89..]                                                ^
21:50:58.169 [hello-uni-app-x:ios-F01B89..] 45 
21:50:58.169 [hello-uni-app-x:ios-F01B89..]      await page.setData({
21:50:58.169 [hello-uni-app-x:ios-F01B89..] 46 
21:50:58.169 [hello-uni-app-x:ios-F01B89..]        circularSelect: true,
21:50:58.169 [hello-uni-app-x:ios-F01B89..] 47 
21:50:58.169 [hello-uni-app-x:ios-F01B89..]        currentValChange: 0,
21:50:58.169 [hello-uni-app-x:ios-F01B89..] 
21:50:58.169 [hello-uni-app-x:ios-F01B89..] at Object.<anonymous> (pages/component/swiper/swiper.test.js:44:47)
21:50:58.169 [hello-uni-app-x:ios-F01B89..] 
21:50:58.169 [hello-uni-app-x:ios-F01B89..] ● test swiper › check currentId
21:50:58.169 [hello-uni-app-x:ios-F01B89..] 
21:50:58.169 [hello-uni-app-x:ios-F01B89..] expect(received).toEqual(expected) // deep equality
21:50:58.170 [hello-uni-app-x:ios-F01B89..] 
21:50:58.170 [hello-uni-app-x:ios-F01B89..] Expected: 2
21:50:58.170 [hello-uni-app-x:ios-F01B89..] Received: 0
21:50:58.170 [hello-uni-app-x:ios-F01B89..] 
21:50:58.170 [hello-uni-app-x:ios-F01B89..] 81 
21:50:58.170 [hello-uni-app-x:ios-F01B89..]      })
21:50:58.170 [hello-uni-app-x:ios-F01B89..] 82 
21:50:58.170 [hello-uni-app-x:ios-F01B89..]      await page.waitFor(600)
21:50:58.170 [hello-uni-app-x:ios-F01B89..] > 83 
21:50:58.170 [hello-uni-app-x:ios-F01B89..]      expect(await getData('currentValChange')).toEqual(2)
21:50:58.170 [hello-uni-app-x:ios-F01B89..] 
21:50:58.171 [hello-uni-app-x:ios-F01B89..]                                                ^
21:50:58.171 [hello-uni-app-x:ios-F01B89..] 84 
21:50:58.171 [hello-uni-app-x:ios-F01B89..] 
21:50:58.171 [hello-uni-app-x:ios-F01B89..] 85 
21:50:58.171 [hello-uni-app-x:ios-F01B89..]      await page.setData({
21:50:58.171 [hello-uni-app-x:ios-F01B89..] 86 
21:50:58.171 [hello-uni-app-x:ios-F01B89..]        currentItemIdVal: 'A',
21:50:58.171 [hello-uni-app-x:ios-F01B89..] 
21:50:58.171 [hello-uni-app-x:ios-F01B89..] at Object.<anonymous> (pages/component/swiper/swiper.test.js:83:47)
21:50:58.171 [hello-uni-app-x:ios-F01B89..] 
21:50:58.171 [hello-uni-app-x:ios-F01B89..] FAIL pages/component/form/form.test.js
21:50:58.172 [hello-uni-app-x:ios-F01B89..] 
21:50:58.172 [hello-uni-app-x:ios-F01B89..] ● form › submit
21:50:58.172 [hello-uni-app-x:ios-F01B89..] 
21:50:58.172 [hello-uni-app-x:ios-F01B89..] expect(received).toBe(expected) // Object.is equality
21:50:58.172 [hello-uni-app-x:ios-F01B89..] 
21:50:58.172 [hello-uni-app-x:ios-F01B89..] Expected: "hello"
21:50:58.172 [hello-uni-app-x:ios-F01B89..] Received: undefined
21:50:58.172 [hello-uni-app-x:ios-F01B89..] 
21:50:58.172 [hello-uni-app-x:ios-F01B89..] 30 
21:50:58.172 [hello-uni-app-x:ios-F01B89..]      } = await page.data()
21:50:58.173 [hello-uni-app-x:ios-F01B89..] 31 
21:50:58.173 [hello-uni-app-x:ios-F01B89..] 
21:50:58.173 [hello-uni-app-x:ios-F01B89..] > 32 
21:50:58.173 [hello-uni-app-x:ios-F01B89..]      expect(formData['nickname']).toBe(CHANGE_NICK_NAME)
21:50:58.173 [hello-uni-app-x:ios-F01B89..] 
21:50:58.173 [hello-uni-app-x:ios-F01B89..]                                   ^
21:50:58.173 [hello-uni-app-x:ios-F01B89..] 33 
21:50:58.173 [hello-uni-app-x:ios-F01B89..]      expect(formData['gender']).toBe(CHANGE_GENDER)
21:50:58.173 [hello-uni-app-x:ios-F01B89..] 34 
21:50:58.173 [hello-uni-app-x:ios-F01B89..]      expect(formData['loves'][0]).toBe(CHANGE_LOVES[0])
21:50:58.174 [hello-uni-app-x:ios-F01B89..] 35 
21:50:58.174 [hello-uni-app-x:ios-F01B89..]      expect(formData['loves'][1]).toBe(CHANGE_LOVES[1])
21:50:58.174 [hello-uni-app-x:ios-F01B89..] 
21:50:58.174 [hello-uni-app-x:ios-F01B89..] at Object.<anonymous> (pages/component/form/form.test.js:32:34)
21:50:58.174 [hello-uni-app-x:ios-F01B89..] 
21:50:58.174 [hello-uni-app-x:ios-F01B89..] ● form › reset
21:50:58.174 [hello-uni-app-x:ios-F01B89..] 
21:50:58.174 [hello-uni-app-x:ios-F01B89..] expect(received).toBe(expected) // Object.is equality
21:50:58.175 [hello-uni-app-x:ios-F01B89..] 
21:50:58.175 [hello-uni-app-x:ios-F01B89..] Expected: ""
21:50:58.175 [hello-uni-app-x:ios-F01B89..] Received: undefined
21:50:58.175 [hello-uni-app-x:ios-F01B89..] 
21:50:58.175 [hello-uni-app-x:ios-F01B89..] 52 
21:50:58.175 [hello-uni-app-x:ios-F01B89..]      } = await page.data()
21:50:58.175 [hello-uni-app-x:ios-F01B89..] 53 
21:50:58.175 [hello-uni-app-x:ios-F01B89..] 
21:50:58.175 [hello-uni-app-x:ios-F01B89..] > 54 
21:50:58.175 [hello-uni-app-x:ios-F01B89..]      expect(formData['nickname']).toBe(DEFAULT_NICK_NAME)
21:50:58.176 [hello-uni-app-x:ios-F01B89..] 
21:50:58.176 [hello-uni-app-x:ios-F01B89..]                                   ^
21:50:58.176 [hello-uni-app-x:ios-F01B89..] 55 
21:50:58.176 [hello-uni-app-x:ios-F01B89..]      expect(formData['gender']).toBe(DEFAULT_GENDER)
21:50:58.176 [hello-uni-app-x:ios-F01B89..] 56 
21:50:58.176 [hello-uni-app-x:ios-F01B89..]      expect(formData['loves'][0]).toBe(DEFAULT_LOVES[0])
21:50:58.176 [hello-uni-app-x:ios-F01B89..] 57 
21:50:58.176 [hello-uni-app-x:ios-F01B89..]      expect(formData['age']).toBe(DEFAULT_AGE)
21:50:58.176 [hello-uni-app-x:ios-F01B89..] 
21:50:58.176 [hello-uni-app-x:ios-F01B89..] at Object.<anonymous> (pages/component/form/form.test.js:54:34)
21:50:58.176 [hello-uni-app-x:ios-F01B89..] 
21:50:58.176 [hello-uni-app-x:ios-F01B89..] FAIL pages/component/video/video.test.js (23.575 s)
21:50:58.177 [hello-uni-app-x:ios-F01B89..] 
21:50:58.177 [hello-uni-app-x:ios-F01B89..] ● component-native-video › test API
21:50:58.177 [hello-uni-app-x:ios-F01B89..] 
21:50:58.177 [hello-uni-app-x:ios-F01B89..] thrown: "Exceeded timeout of 20000 ms for a test.
21:50:58.177 [hello-uni-app-x:ios-F01B89..] Use jest.setTimeout(newTimeout) to increase the timeout value, if this is a long-running test."
21:50:58.177 [hello-uni-app-x:ios-F01B89..] 
21:50:58.177 [hello-uni-app-x:ios-F01B89..] 17 
21:50:58.177 [hello-uni-app-x:ios-F01B89..]    });
21:50:58.177 [hello-uni-app-x:ios-F01B89..] 18 
21:50:58.177 [hello-uni-app-x:ios-F01B89..] 
21:50:58.177 [hello-uni-app-x:ios-F01B89..] > 19 
21:50:58.177 [hello-uni-app-x:ios-F01B89..]    it('test API', async () => {
21:50:58.178 [hello-uni-app-x:ios-F01B89..] 
21:50:58.178 [hello-uni-app-x:ios-F01B89..]    ^
21:50:58.178 [hello-uni-app-x:ios-F01B89..] 20 
21:50:58.178 [hello-uni-app-x:ios-F01B89..]      // play
21:50:58.178 [hello-uni-app-x:ios-F01B89..] 21 
21:50:58.178 [hello-uni-app-x:ios-F01B89..]      await page.callMethod('play');
21:50:58.178 [hello-uni-app-x:ios-F01B89..] 22 
21:50:58.178 [hello-uni-app-x:ios-F01B89..]      await page.waitFor(async () => {
21:50:58.178 [hello-uni-app-x:ios-F01B89..] 
21:50:58.178 [hello-uni-app-x:ios-F01B89..] at pages/component/video/video.test.js:19:3
21:50:58.178 [hello-uni-app-x:ios-F01B89..] at Object.<anonymous> (pages/component/video/video.test.js:3:1)
21:50:58.178 [hello-uni-app-x:ios-F01B89..] 
21:50:58.179 [hello-uni-app-x:ios-F01B89..] FAIL pages/component/mixin-datacom/mixin-datacom.test.js
21:50:58.179 [hello-uni-app-x:ios-F01B89..] 
21:50:58.179 [hello-uni-app-x:ios-F01B89..] ● mixin-datacom › mixinDatacomGet
21:50:58.179 [hello-uni-app-x:ios-F01B89..] 
21:50:58.179 [hello-uni-app-x:ios-F01B89..] page `/pages/component/mixin-datacom/mixin-datacom` is not found
21:50:58.179 [hello-uni-app-x:ios-F01B89..] 
21:50:58.179 [hello-uni-app-x:ios-F01B89..] at Q.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:3259)
21:50:58.179 [hello-uni-app-x:ios-F01B89..] at WebSocket.<anonymous> (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-automator/dist/index.js:1:1092)
21:50:58.179 [hello-uni-app-x:ios-F01B89..] at WebSocket.onMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/event-target.js:199:18)
21:50:58.179 [hello-uni-app-x:ios-F01B89..] at Receiver.receiverOnMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1137:20)
21:50:58.179 [hello-uni-app-x:ios-F01B89..] at Receiver.dataMessage (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:528:14)
21:50:58.179 [hello-uni-app-x:ios-F01B89..] at Receiver.getData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:446:17)
21:50:58.179 [hello-uni-app-x:ios-F01B89..] at Receiver.startLoop (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:148:22)
21:50:58.180 [hello-uni-app-x:ios-F01B89..] at Receiver._write (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/receiver.js:83:10)
21:50:58.180 [hello-uni-app-x:ios-F01B89..] at Socket.socketOnData (../../../../../../Applications/HBuilderX-Dev.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/ws/lib/websocket.js:1231:35)
21:50:58.180 [hello-uni-app-x:ios-F01B89..] 
21:50:58.180 [hello-uni-app-x:ios-F01B89..] 
21:50:58.180 [hello-uni-app-x:ios-F01B89..] Snapshot Summary
21:50:58.180 [hello-uni-app-x:ios-F01B89..] › 127 snapshots written from 22 test suites.
21:50:58.180 [hello-uni-app-x:ios-F01B89..] 
21:50:58.180 [hello-uni-app-x:ios-F01B89..] Test Suites: 36 failed, 39 passed, 75 total
21:50:58.180 [hello-uni-app-x:ios-F01B89..] Tests:       75 failed, 223 passed, 298 total
21:50:58.180 [hello-uni-app-x:ios-F01B89..] Snapshots:   127 written, 3 passed, 130 total
21:50:58.180 [hello-uni-app-x:ios-F01B89..] Time:        677.533 s
21:50:58.180 [hello-uni-app-x:ios-F01B89..] Ran all test suites.