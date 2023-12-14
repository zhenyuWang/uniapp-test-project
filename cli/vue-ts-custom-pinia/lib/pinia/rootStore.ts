import {
  App,
  EffectScope,
  inject,
  hasInjectionContext,
  Ref,
} from 'vue-demi'
import {
  StateTree,
  _Method,
  Store,
  _GettersTree,
  _ActionsTree,
  PiniaCustomStateProperties,
  DefineStoreOptionsInPlugin,
  _StoreWithState
} from './types'

// 当前 Pinia
export let activePinia: Pinia | null = null

export const setActivePinia = (pinia: Pinia | null) => { activePinia = pinia }

export const getActivePinia = () => {
  if (hasInjectionContext() && inject(piniaSymbol)) {
    return inject(piniaSymbol)
  }
  return activePinia
}

/**
 * Every application must own its own pinia to be able to create stores
 */
export interface Pinia {
  install: (app: App) => void

  /**
   * root state
   */
  state: Ref<Record<string, StateTree>>

  /**
   * Adds a store plugin to extend every store
   *
   * @param plugin - store plugin to add
   */
  use(plugin: PiniaPlugin): Pinia

  /**
   * Installed store plugins
   *
   * @internal
   */
  _p: PiniaPlugin[]

  /**
   * App linked to this Pinia instance
   *
   * @internal
   */
  _a: App

  /**
   * Effect scope the pinia is attached to
   *
   * @internal
   */
  _e: EffectScope

  /**
   * Registry of stores used by this pinia.
   *
   * @internal
   */
  _s: Map<string, _StoreWithState>
}

export const piniaSymbol = 'pinia'

/**
 * Context argument passed to Pinia plugins.
 */
export interface PiniaPluginContext {
  /**
   * pinia instance.
   */
  pinia: Pinia

  /**
   * Current app created with `Vue.createApp()`.
   */
  app: App

  /**
   * Current store being extended.
   */
  store: Store

  /**
   * Initial options defining the store when calling `defineStore()`.
   */
  options: DefineStoreOptionsInPlugin
}

/**
 * Plugin to extend every store.
 */
export interface PiniaPlugin {
  /**
   * Plugin to extend every store. Returns an object to extend the store or
   * nothing.
   *
   * @param context - Context
   */
  (context: PiniaPluginContext): PiniaCustomStateProperties | void
}

/**
 * Plugin to extend every store.
 * @deprecated use PiniaPlugin instead
 */
export type PiniaStorePlugin = PiniaPlugin
