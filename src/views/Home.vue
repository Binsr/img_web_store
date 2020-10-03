<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p>test {{test}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  computed: {
    test(){
      return this.$store.state.test;
    }
  },
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
