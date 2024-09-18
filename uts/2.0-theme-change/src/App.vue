import { onThemeChange } from '@dcloudio/types/uni-app/uni/base/ThemeChange';

<script lang="uts">
export default {
  onShow: function (options: OnShowOptions) {
    console.error("wzf App onShow ---",options);
  },
  onError: function (err:any) {
    console.error('wzf app onError ---')
    console.error('wzf app onError ---error', err)
  }
};
</script>
S
