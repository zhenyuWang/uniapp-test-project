declare namespace UniNamespace {
  interface ShowActionSheet2Success {
    // 用户点击的按钮，从上到下的顺序，从0开始
    tapIndex : number
    errMsg : string
    errSubject : string
  }
  
  interface ShowActionSheet2Options {
    // 菜单标题
    title ?: string | null
    // 按钮的文字数组
    itemList : string[]
    // 按钮的文字颜色
    itemColor ?: string.ColorString | null
    // popover 暂不处理
    // 取消按钮文本
    cancelText ?: string | null
    /**
      * 接口调用结束的回调函数（调用成功、失败都会执行）
      */
    success ?: (res : ShowActionSheet2Success) => void
    /**
      * 接口调用失败的回调函数
      */
    fail ?: (res : UniError) => void
    /**
      * 接口调用成功的回调
      */
    complete ?: (res : any) => void
  }
}

declare interface Uni {
  showActionSheet2 (options: ShowActionSheet2Options) : void
}
