<script>
import Foo from './components/Foo.vue';

export default {
  name: 'App',
  components: {
    Foo,
  },
  data() {
    return {
      title: 'default page title',
      uniIcon: '&#xe100;',
    };
  },
  methods: {
    triggerGlobalMethod() {
      this.title = 'new title';
      this.globalPropertiesStr = 'new globalPropertiesStr';
      this.globalPropertiesNum = 1234;
    },
  },
};
</script>

<template src='./test.html'>
  
</template>

<style>
@font-face {
  font-family: 'UniFontFamily';
  src: url('./assets/uni.ttf');
}

.icon {
  font-family: 'UniFontFamily';
}
</style>
