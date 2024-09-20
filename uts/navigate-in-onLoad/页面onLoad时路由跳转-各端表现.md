# 页面 onLoad 时路由跳转各端表现

## 2.0 多个页面 onLoad 期间

### navigateTo 到新页面

web 没有动画

ios 多个页面动画一起向左滑动

android 多个页面动画依次向左滑动

### navigateTo 到新页面并最后一个页面 onLoad navigateBack

web 没有动画

ios 多个页面动画一起出现

android 多个页面动画依次向左滑动（没有进入最后页面并返回的两个动画）

### redirectTo 到新页面

web 直接进入最后页面

ios onLoad redirectTo 一次可以，如果第一次目标页面也存在 onLoad redirectTo, 则会导致两次都无效

android 会依次进入页面

### reLaunch 到新页面

web 直接进入最后页面

ios 直接进入最后页面

android 会依次进入页面



## 1.0 vue3 多个页面 onLoad 期间

### navigateTo 到新页面

web 没有动画

ios  多个页面动画依次向左滑动

android 多个页面动画依次向左滑动

微信小程序 多个页面动画依次向左滑动（小程序动画更快）

### navigateTo 到新页面并最后一个页面 onLoad navigateBack

web 没有动画

ios 多个页面动画依次向左滑动

android 多个页面动画依次向左滑动（没有进入最后页面并返回的两个动画）

微信小程序 多个页面一次进入，但看起来 navigateBack 的目标页面进入两次
即（a→b→c→d d back c 表现为 b 进入，c 进入，c 进入）

### redirectTo 到新页面

web 直接进入最后页面

ios 依次进入页面，无动画

android 依次进入页面，无动画

微信小程序一次进入页面，有动画

### reLaunch 到新页面

web 直接进入最后页面

ios 依次进入页面，无动画

android 依次进入页面，无动画

微信小程序标题依次切换页面，中间空白，最后一个页面动画进入

