import { defineCustomElement } from 'vue'
import MyVueComponent from './my-vue-component.vue'

// 注册自定义元素
// 注册完成后，此页面上的所有的 `<my-vue-component>` 标签会被更新
customElements.define('my-vue-component', defineCustomElement(MyVueComponent))
