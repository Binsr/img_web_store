<template>
  <div>
      <img class="cover-img" :src="coverImg">
      <LoginForm class="login-form"/> <!-- TODO: OVO TREBA DA BUDE ROUTER VIEW -->
  </div>
</template>
<script>
    import LoginForm from '@/views/Login/LoginForm.vue';
    export default {
        components: {
            LoginForm
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