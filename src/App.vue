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
:root {
  --text-color-main: rgb(228, 228, 228);
  --link-color: #2c3e50;
}
*{
  padding: 0;
  margin: 0;
}

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
  height: 100vh;
}

#nav {
  height: 100vh;
}

#nav a {
  /* font-weight: bold;
  color: #2c3e50; */
}

#nav a.router-link-exact-active {
  /* color: #42b983; */
}
</style>
