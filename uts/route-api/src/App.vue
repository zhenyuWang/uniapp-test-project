<script lang="uts">
export default {
  data(){
    return {
      appData: 'app data',
    }
  },
  onLaunch: function () {
    println("App Launch");
  },
  onShow: function () {
    println("App Show");
  },
  onHide: function () {
    println("App Hide");
  },
  onLastPageBackPress() {
    println('-------------------------onLastPageBackPress')
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
.page{
  background-color: pink;
}
</style>
