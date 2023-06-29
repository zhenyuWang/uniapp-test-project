<script lang="uts">
export default {
  onLaunch: function () {
    console.log("App Launch");
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
  onLastPageBackPress: function () {
    console.log('App onLastPageBackPress')
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
.button{
  margin-left: 20px;
  margin-top: 20px;
  width:140px;
  height:40px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: #000;
}
.button-text{
  font-size: 16px;
  color: #fff;
}
</style>
