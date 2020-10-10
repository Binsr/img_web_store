<template>
  <div class="home">
    {{COMING_SOON}}
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  computed: {
    COMING_SOON(){
      return this.$store.state.COMING_SOON;
    }
  },
  name: 'Home',
  components: {
  }
}
</script>
