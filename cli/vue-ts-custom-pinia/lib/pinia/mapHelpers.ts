import type { ComponentPublicInstance } from 'vue-demi'
import type {
  _GettersTree,
  _Method,
  StateTree,
  Store,
  StoreDefinition,
} from './types'

/**
 * Interface to allow customizing map helpers. Extend this interface with the
 * following properties:
 *
 * - `suffix`: string. Affects the suffix of `mapStores()`, defaults to `Store`.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MapStoresCustomization {
  // cannot be added or it wouldn't be able to be extended
  // suffix?: string
}

export let mapStoreSuffix = 'Store'

/**
 * Changes the suffix added by `mapStores()`. Can be set to an empty string.
 * Defaults to `"Store"`. Make sure to extend the MapStoresCustomization
 * interface if you are using TypeScript.
 *
 * @param suffix - new suffix
 */
export function setMapStoreSuffix(
  suffix: string
): void {
  mapStoreSuffix = suffix
}

/**
 * Allows using stores without the composition API (`setup()`) by generating an
 * object to be spread in the `computed` field of a component. It accepts a list
 * of store definitions.
 *
 * @example
 * ```js
 * export default {
 *   computed: {
 *     // other computed properties
 *     ...mapStores(useUserStore, useCartStore)
 *   },
 *
 *   created() {
 *     this.userStore // store with id "user"
 *     this.cartStore // store with id "cart"
 *   }
 * }
 * ```
 *
 * @param stores - list of stores to map to an object
 */
export function mapStores<Stores extends any[]>(
  ...stores: [...Stores]
): Stores {
  return stores.reduce((reduced, useStore) => {
    const key = `${useStore.$id}${mapStoreSuffix}`
    reduced[key as any] = function (
      this: ComponentPublicInstance
    ) {
      // @ts-expect-error
      return useStore(this.$pinia)
    }
    return reduced
  }, {} as Stores)
}

/**
 * For internal use **only**
 */
export type _MapStateReturn = Record<string, any>

/**
 * For internal use **only**
 */
export type _MapStateObjectReturn = Record<string, any>

/**
 * Allows using state and getters from one store without using the composition
 * API (`setup()`) by generating an object to be spread in the `computed` field
 * of a component. The values of the object are the state properties/getters
 * while the keys are the names of the resulting computed properties.
 * Optionally, you can also pass a custom function that will receive the store
 * as its first argument. Note that while it has access to the component
 * instance via `this`, it won't be typed.
 *
 * @example
 * ```js
 * export default {
 *   computed: {
 *     // other computed properties
 *     // useCounterStore has a state property named `count` and a getter `double`
 *     ...mapState(useCounterStore, {
 *       n: 'count',
 *       triple: store => store.n * 3,
 *       // note we can't use an arrow function if we want to use `this`
 *       custom(store) {
 *         return this.someComponentValue + store.n
 *       },
 *       doubleN: 'double'
 *     })
 *   },
 *
 *   created() {
 *     this.n // 2
 *     this.doubleN // 4
 *   }
 * }
 * ```
 *
 * @param useStore - store to map from
 * @param keyMapper - object of state properties or getters
 */
/**
 * Allows using state and getters from one store without using the composition
 * API (`setup()`) by generating an object to be spread in the `computed` field
 * of a component.
 *
 * @example
 * ```js
 * export default {
 *   computed: {
 *     // other computed properties
 *     ...mapState(useCounterStore, ['count', 'double'])
 *   },
 *
 *   created() {
 *     this.count // 2
 *     this.double // 4
 *   }
 * }
 * ```
 *
 * @param useStore - store to map from
 * @param keys - array of state properties or getters
 */
export function mapState(
  useStore: StoreDefinition,
  keys: string[]
): _MapStateReturn

/**
 * Allows using state and getters from one store without using the composition
 * API (`setup()`) by generating an object to be spread in the `computed` field
 * of a component.
 *
 * @param useStore - store to map from
 * @param keysOrMapper - array or object
 */
export function mapState(
  useStore: StoreDefinition,
  keysOrMapper: any
): _MapStateReturn {
  return Array.isArray(keysOrMapper)
    ? keysOrMapper.reduce((reduced, key) => {
      reduced[key] = function (this: ComponentPublicInstance) {
        // @ts-expect-error
        return useStore(this.$pinia)[key]
      } as () => any
      return reduced
    }, {} as _MapStateReturn)
    : Object.keys(keysOrMapper).reduce((reduced, key: string) => {
      reduced[key] = function (this: ComponentPublicInstance) {
        // @ts-expect-error
        const store = useStore(this.$pinia)
        const storeKey = keysOrMapper[key]
        // for some reason TS is unable to infer the type of storeKey to be a
        // function
        return typeof storeKey === 'function'
          ? (storeKey as (store: Store) => any).call(this, store)
          // @ts-expect-error
          : store[storeKey]
      }
      return reduced
    }, {} as _MapStateObjectReturn)
}

/**
 * Alias for `mapState()`. You should use `mapState()` instead.
 * @deprecated use `mapState()` instead.
 */
export const mapGetters = mapState

/**
 * For internal use **only**
 */
export type _MapActionsReturn<A> = {
  [key in keyof A]: A[key]
}

/**
 * For internal use **only**
 */
export type _MapActionsObjectReturn<A, T extends Record<string, keyof A>> = {
  [key in keyof T]: A[T[key]]
}

/**
 * Allows directly using actions from your store without using the composition
 * API (`setup()`) by generating an object to be spread in the `methods` field
 * of a component. The values of the object are the actions while the keys are
 * the names of the resulting methods.
 *
 * @example
 * ```js
 * export default {
 *   methods: {
 *     // other methods properties
 *     // useCounterStore has two actions named `increment` and `setCount`
 *     ...mapActions(useCounterStore, { moar: 'increment', setIt: 'setCount' })
 *   },
 *
 *   created() {
 *     this.moar()
 *     this.setIt(2)
 *   }
 * }
 * ```
 *
 * @param useStore - store to map from
 * @param keyMapper - object to define new names for the actions
 */
export function mapActions<
  Id extends string,
  S extends StateTree,
  G extends _GettersTree,
  A,
  KeyMapper extends Record<string, keyof A>
>(
  useStore: StoreDefinition,
  keyMapper: KeyMapper
): _MapActionsObjectReturn<A, KeyMapper>
/**
 * Allows directly using actions from your store without using the composition
 * API (`setup()`) by generating an object to be spread in the `methods` field
 * of a component.
 *
 * @example
 * ```js
 * export default {
 *   methods: {
 *     // other methods properties
 *     ...mapActions(useCounterStore, ['increment', 'setCount'])
 *   },
 *
 *   created() {
 *     this.increment()
 *     this.setCount(2) // pass arguments as usual
 *   }
 * }
 * ```
 *
 * @param useStore - store to map from
 * @param keys - array of action names to map
 */
export function mapActions<
  Id extends string,
  S extends StateTree,
  G extends _GettersTree,
  A
>(
  useStore: StoreDefinition,
  keys: Array<keyof A>
): _MapActionsReturn<A>
/**
 * Allows directly using actions from your store without using the composition
 * API (`setup()`) by generating an object to be spread in the `methods` field
 * of a component.
 *
 * @param useStore - store to map from
 * @param keysOrMapper - array or object
 */
export function mapActions<
  A,
  KeyMapper extends Record<string, keyof A>
>(
  useStore: StoreDefinition,
  keysOrMapper: Array<keyof A> | KeyMapper
): _MapActionsReturn<A> | _MapActionsObjectReturn<A, KeyMapper> {
  return Array.isArray(keysOrMapper)
    ? keysOrMapper.reduce((reduced, key) => {
      // @ts-expect-error
      reduced[key] = function (
        this: ComponentPublicInstance,
        ...args: any[]
      ) {
        // @ts-expect-error
        return useStore(this.$pinia)[key](...args)
      }
      return reduced
    }, {} as _MapActionsReturn<A>)
    : Object.keys(keysOrMapper).reduce((reduced, key: keyof KeyMapper) => {
      // @ts-expect-error
      reduced[key] = function (
        this: ComponentPublicInstance,
        ...args: any[]
      ) {
        // @ts-expect-error
        return useStore(this.$pinia)[keysOrMapper[key]](...args)
      }
      return reduced
    }, {} as _MapActionsObjectReturn<A, KeyMapper>)
}

/**
 * For internal use **only**
 */
export type _MapWritableStateReturn = Record<string, any>

// /**
//  * For internal use **only**
//  */
export type _MapWritableStateObjectReturn = Record<string, any>

/**
 * Same as `mapState()` but creates computed setters as well so the state can be
 * modified. Differently from `mapState()`, only `state` properties can be
 * added.
 *
 * @param useStore - store to map from
 * @param keyMapper - object of state properties
 */
export function mapWritableState(
  useStore: StoreDefinition,
  keyMapper: string[]
): Record<string, any>
/**
 * Allows using state and getters from one store without using the composition
 * API (`setup()`) by generating an object to be spread in the `computed` field
 * of a component.
 *
 * @param useStore - store to map from
 * @param keys - array of state properties
 */
export function mapWritableState(
  useStore: StoreDefinition,
  keys: string[]
): Record<string, any>
/**
 * Allows using state and getters from one store without using the composition
 * API (`setup()`) by generating an object to be spread in the `computed` field
 * of a component.
 *
 * @param useStore - store to map from
 * @param keysOrMapper - array or object
 */
export function mapWritableState(
  useStore: StoreDefinition,
  keysOrMapper: string[]
): _MapWritableStateReturn {
  return Array.isArray(keysOrMapper)
    ? keysOrMapper.reduce((reduced, key) => {
      // @ts-ignore
      reduced[key] = {
        get(this: ComponentPublicInstance) {
          // @ts-expect-error
          return useStore(this.$pinia)[key]
        },
        // @ts-expect-error
        set(this: ComponentPublicInstance, value) {
          // @ts-expect-error
          return (useStore(this.$pinia)[key] = value as any)
        },
      }
      return reduced
    }, {} as _MapWritableStateReturn)
    : Object.keys(keysOrMapper).reduce((reduced, key: string) => {
      // @ts-ignore
      reduced[key] = {
        get(this: ComponentPublicInstance) {
          // @ts-expect-error
          return useStore(this.$pinia)[keysOrMapper[key]]
        },
        // @ts-expect-error
        set(this: ComponentPublicInstance, value) {
          // @ts-expect-error
          return (useStore(this.$pinia)[keysOrMapper[key]] = value as any)
        },
      }
      return reduced
    }, {} as _MapWritableStateObjectReturn)
}
