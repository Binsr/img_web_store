<template>
  <div>
      <img class="cover-img" :src="coverImg">
      <div class="login-form">
        <router-link class="routerLink" to="/login-singup"><p>Login</p></router-link>
        <router-link class="routerLink" to="/login-singup/signup"><p>signup</p></router-link>
        <router-view/>
      </div>
  </div>
</template>
<script>

    export default {
        components: {

        },
        name: 'Login',
        computed:{
          coverImg(){
            return this.$store.state.covImg.LOGIN_BACKGROUND.src;
          }
        },
    }
</script>

<style>
.login-form{
    z-index: 19;
    position: fixed;
    top: 20vh;
    right: 10vw;
}

.cover-img{
    width: 100vw;
    min-height: 100vh;
}

.textHolder{
    margin: auto;
    display: flex;
    width: min-content;
}

.input{
    width: 300px;
    height: 40px;
    background-color: gray;
    margin: 10px auto 10px auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>