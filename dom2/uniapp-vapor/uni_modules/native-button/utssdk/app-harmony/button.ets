// import { ComponentBuilderOptions } from "@dcloudio/uni-app-x-runtime"
//
// interface ButtonBuilderOptions extends ComponentBuilderOptions {
//   label: string
// }

interface ButtonBuilderOptions {
  label: string
}

@Builder
export function ButtonBuilder(options: ButtonBuilderOptions) {
  Button(options.label)
    .width('100%')
    .height('100%')
}
