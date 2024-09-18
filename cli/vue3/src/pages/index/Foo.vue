<template>
  <div>{{ msg }}</div>
</template>

<script>
export default {
  data(){
    return {
      msg: 'this is foo'
    }
  },
  beforeUpdate(){
    console.log('foo beforeUpdate')
  },
  update(){
    console.log('foo update')
  },
  activated(){
    console.log('foo activated')
  },
  deactivated(){
    console.log('foo deactivated')
  },
}
</script>
