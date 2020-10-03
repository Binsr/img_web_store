<template>
  <div class="home">
    test {{test}}
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  computed: {
    test(){
      return this.$store.state.test;
    }
  },
  name: 'Home',
  components: {
  }
}
</script>
