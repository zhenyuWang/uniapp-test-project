<script lang="uts">
export default {
  onLaunch: function () {
    println("App Launch");
  },
  onShow: function () {
    println("App Show");
  },
  onHide: function () {
    println("App Hide");
  },
  onLastPageBackPress(): boolean | null {
    println('-------------------------onLastPageBackPress')
    return null
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
