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
<<<<<<< HEAD
=======
.centerPanel{
    width: 80vw;
    border: 1px solid black;
    height: 100vh;
    margin: 10px auto;
    
}
>>>>>>> da2aa8c56bf17ae64280078ce8fbee0f9a1a9573

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
