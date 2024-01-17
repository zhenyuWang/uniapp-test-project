import { Pinia, PiniaPlugin, setActivePinia, piniaSymbol } from './rootStore'
import { ref, App, markRaw, effectScope, Ref } from 'vue-demi'
import { StateTree, _StoreWithState } from './types'

/**
 * Creates a Pinia instance to be used by the application
 */
export function createPinia(): Pinia {
  const scope = effectScope(true)
  const state = scope.run<Ref<Record<string, StateTree>>>(() =>
    ref<Record<string, StateTree>>({})
  )!

  let _p: Pinia['_p'] = []
  // plugins added before calling app.use(pinia)
  let toBeInstalled: PiniaPlugin[] = []

  const pinia: Pinia = markRaw({
    install(app: App) {
      // 设置 activePinia
      setActivePinia(pinia)
      pinia._a = app
      app.provide(piniaSymbol, pinia)
      app.config.globalProperties.$pinia = pinia
      toBeInstalled.forEach((plugin) => _p.push(plugin))
      toBeInstalled = []
    },

    use(plugin: any) {
      if (!this._a) {
        toBeInstalled.push(plugin)
      } else {
        _p.push(plugin)
      }
      return this
    },

    // pinia 插件集合
    _p,
    // app 实例
    _a: null,
    // 当前 effect scope
    _e: scope,
    // 所有 store 实例
    _s: new Map<string, _StoreWithState>(),
    // 所有 store 的 state
    state,
  })

  return pinia
}
