# uni-showActionSheet2

## 使用文档

```ts
uni.showActionSheet2({
    success(res) {
        console.log(res);
    }
})
```



### 参数

Object object

|属性|类型|必填|说明|
|----|---|----|----|
|success|function|否|接口调用成功的回调函数|
|fail|function|否|接口调用失败的回调函数|
|complete|function|否|接口调用结束的回调函数（调用成功、失败都会执行）|



object.success 回调函数


|属性|类型|说明|
|----|---|----|
|tapIndex|number|用户点击的按钮，从上到下的顺序，从0开始|
