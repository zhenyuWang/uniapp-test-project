import { window } from "@kit.ArkUI";

export type DispatchInput = (value: string, cursor?: number) => void

export interface UniTextareaOptions {
	controller: TextAreaController
  key: string
  value: string
	placeholder: string
	enterKeyType?: EnterKeyType,
	enabled?: boolean
	maxLength?: number
	caretColor?: ResourceColor
	confirmHold?: boolean
	autoHeight?: boolean
	textAreaHeight: number,
	handleMountedFocus?: Function
	dispatchInput?: DispatchInput
	handleFocus?: Function
	handleBlur?: Function
	dispatchConfirm?: Function
}

@Builder
export function TextareaBuilder(options: UniTextareaOptions) {
  TextArea({ text: options.value, placeholder: options.placeholder, controller: options.controller })
		.width('100%')
		.height(options.textAreaHeight)
		.key(options.key)
		.padding(0)
    .borderRadius(0)
		.backgroundColor(Color.Transparent)
		.enterKeyType(options.enterKeyType)
		.enabled(options.enabled)
		.maxLength(options.maxLength)
		.caretColor(options.caretColor)
		.barState(options.autoHeight ? BarState.Off : BarState.Auto)
		.onFocus(() => {
			options.handleFocus?.()
		})
		.onBlur(() => {
			options.handleBlur?.()
		})
		.onChange((value, previewText, opt) => {
			options.dispatchInput?.(value, opt?.rangeAfter?.end)
		})
		.onAppear(() => {
			options.handleMountedFocus?.()
		})
		.onSubmit((_: EnterKeyType, event: SubmitEvent) => {
      if (options.confirmHold) {
        event.keepEditableState()
      }
      options.dispatchConfirm?.()
    })
}
