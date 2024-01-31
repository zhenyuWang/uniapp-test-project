### UTS 源代码

```ts
/**
 * 导出一个带callback的同步方法
 * @param opts
 */
export function testSyncWithCallback(opts: AsyncOptions) {
  if (opts.type == "success") {
    opts.success("success");
  } else {
    opts.fail("fail");
  }
  opts.complete("complete");
  return { name: "testSyncWithCallback" };
}
```

### 编译后的 kt 代码

```kotlin
fun testSyncWithCallback(opts: AsyncOptions): UtsJSONObject {
    if (opts.type == "success") opts.success("success"); //utsCallback
    else opts.fail("fail");
    opts.complete("complete");
    return object : UtsJSONObject() {
        var name = "testSyncWithCallback"
    };
}
```

### js 端调用示例

```js
/**
 * jsonObject: {"id":1,"method":"preparePermission","params":[{"name":"foo","age":10,"success":7,"fail":8},9]} 
 * callback: JSCallback
 * 
 * var utsCallback = new UTSCallback(7)
 
 */
test.testSyncWithCallback({
  type: "success",
  success(res: any) {
    console.log("success", res);
    // TODO
  },
  fail(res: any) {
    console.log("fail", res);
  },
});
```
