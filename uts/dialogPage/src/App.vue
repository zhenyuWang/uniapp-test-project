import { onError } from '@dcloudio/types/uni-app/uni/base/Error';

<script lang="uts">
export default {
  onLaunch: function (options) {
    console.log("wzf App Launch ---", options);
    uni.openDialogPage({url: '/pages/dialog2/index?test=111', animationType: 'fade-in'})
  },
  onShow: function () {
    console.log("wzf App Show ---")
  },
  onHide: function () {
    console.log("wzf App Hide ---")
  },
  onError: function (error: any) {
    console.log("wzf App Error ---", error)
  }
};
</script>
