<template>
 <div>
   <text class="text">this is component Foo</text>
 </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "",
  mounted() {
    console.log("Foo mounted");
    this.$refs.text
  },
})
</script>
<style lang="scss" scoped>

</style>