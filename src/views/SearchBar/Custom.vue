<template>
  <div>
    <div>Custom</div>
  </div>

</template>

<script>
// @ is an alias to /src
export default {
  computed: {

  },
  components: {
    
  }
}
</script>

<style scoped>
.littleContainer{
    width: 90%;
    height: 400px;
    border-width: 1px;
    border-style: solid;
    border-color: red;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.littleContainer div{
  width: max-content;
  display: flex;
  margin: auto;
}

.activeTab{
  border-color: black;
}

.main-menu-container{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.main-menu__tabs-container{
  display: flex;
  margin: auto;
  
}
.main-menu__tab{
  width: max-content;
  box-sizing: border-box;
  margin: 0 3vw 0 3vw;
  color: #000 !important;
}

.main-menu__tab a{
  font-weight: 400;
  justify-content: center;
  display: flex;
  margin: auto;
  text-align: center;
  padding: 4px;
  text-decoration: none;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: white;
}
.main-menu-text{
    color: #000;
    font-weight: 300;
    font-size: 14px;
}

.router-link-active{
  border-color: red  !important;
  border-width: 0 0 2px 0 !important;
  border-style: solid;
}
.router-link-active span{
  color: white important;
}

.main-menu__tab:hover{
  opacity: 0.9;
}

</style>