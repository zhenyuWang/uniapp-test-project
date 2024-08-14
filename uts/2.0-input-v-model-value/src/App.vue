<script lang="uts">
let firstBackTime = 0
export default {
  onLaunch: function (options) {
    console.log("App Launch ---------------------------------", options);
  },
  onShow: function () {
    console.log("App Show ---------------------------------");
  },
  onHide: function () {
    console.log("App Hide ---------------------------------");
  },
  onExit: function () {
    console.log("App Exit ---------------------------------");
  },
  onLastPageBackPress: function () {
    console.log("App LastPageBackPress ---------------------------------");
    if (firstBackTime == 0) {
      console.log('再按一次退出应用---------------')
      firstBackTime = Date.now()
      setTimeout(() => {
        firstBackTime = 0
      }, 2000)
    } else if (Date.now() - firstBackTime < 2000) {
      firstBackTime = Date.now()
    }
  }
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
