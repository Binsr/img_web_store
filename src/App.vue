<template>
  <div id="nav">
    <WebStoreApp></WebStoreApp>
  </div>
</template>


<script>
  import WebStoreApp from './WebStoreApp.vue';

  export default{
    components: {
      WebStoreApp
    }
  }
</script>
<style>

html{
  padding: 0;

}

body{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0 !important;
  margin: 0 !important;
}

#nav {}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
