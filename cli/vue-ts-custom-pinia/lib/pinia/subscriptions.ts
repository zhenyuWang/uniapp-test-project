import { getCurrentScope, onScopeDispose } from 'vue-demi'
import { _Method } from './types'

export const noop = () => {}

export function addSubscription<T extends _Method>(
  subscriptions: T[],
  callback: T,
  detached?: boolean,
  onCleanup: () => void = noop
) {
  subscriptions.push(callback)

  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback)
    if (idx > -1) {
      subscriptions.splice(idx, 1)
      onCleanup()
    }
  }

  if (!detached && getCurrentScope()) {
    onScopeDispose(removeSubscription)
  }

  return removeSubscription
}

export function triggerSubscriptions(
  subscriptions: _Method[],
  ...args: Parameters<_Method>
) {
  subscriptions.slice().forEach((callback) => {
    callback(...args)
  })
}
