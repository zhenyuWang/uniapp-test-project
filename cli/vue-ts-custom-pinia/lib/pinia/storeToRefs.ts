import {
  ComputedRef,
  isReactive,
  isRef,
  Ref,
  toRaw,
  ToRef,
  toRef,
  ToRefs,
} from 'vue-demi'
import type { Store } from './types'

type ToComputedRefs<T> = {
  [K in keyof T]: ToRef<T[K]> extends Ref<infer U>
  ? ComputedRef<U>
  : ToRef<T[K]>
}

/**
 * Extracts the return type for `storeToRefs`.
 * Will convert any `getters` into `ComputedRef`.
 */
export type StoreToRefs<T> = ToRefs<T> & ToComputedRefs<T>

/**
 * Creates an object of references with all the state, getters, and plugin-added
 * state properties of the store. Similar to `toRefs()` but specifically
 * designed for Pinia stores so methods and non reactive properties are
 * completely ignored.
 *
 * @param store - store to extract the refs from
 */
export function storeToRefs<T extends Store>(
  store: T
): StoreToRefs<T> {
  store = toRaw(store)

  const refs = {} as StoreToRefs<T>
  for (const key in store) {
    const value = store[key]
    if (isRef(value) || isReactive(value)) {
      // @ts-expect-error: the key is state or getter
      refs[key] = toRef(store, key)
    }
  }

  return refs
}
