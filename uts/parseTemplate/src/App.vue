<script lang="uts">
let firstBackTime = 0
export default {
  onLaunch: function () {
    println("App Launch ---------------------------------");
  },
  onShow: function () {
    println("App Show ---------------------------------");
  },
  onHide: function () {
    println("App Hide ---------------------------------");
  },
  onExit: function () {
    println("App Exit ---------------------------------");
  },
  onLastPageBackPress: function () {
    println("App LastPageBackPress ---------------------------------");
    if (firstBackTime == 0) {
      uni.showToast({
        title: '再按一次退出应用12321',
        position: 'bottom'
      })
      firstBackTime = Date.now()
      setTimeout(() => {
        firstBackTime = 0
      }, 2000)
    } else if (Date.now() - firstBackTime < 2000) {
      firstBackTime = Date.now()
    }
  },
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
