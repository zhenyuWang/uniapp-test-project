<script lang="ts">
export default {
  onLaunch: function () {
    console.log('App Launch');
  },
  onShow: function () {
    console.log('App Show');
  },
  onHide: function () {
    console.log('App Hide');
  },
  onLastPageBackPress: function () {
    uni.showToast({
      title: '再按一次退出应用',
      position: 'bottom',
    });
    return null;
  },
};
</script>

<style>
/*每个页面公共css */
</style>
