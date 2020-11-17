<template>
  <div>
      <img class="cover-img" :src="coverImg">
      <div class="login-form">
        <div class="links-area">
          <router-link class="routerLink" to="/login-singup"><p>{{$store.state.msg.signIn}}</p></router-link>
          <router-link class="routerLink" to="/login-singup/signup"><p>{{$store.state.msg.register}}</p></router-link>
        </div>
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
    width: 400px;
    height: 500px;
    background-color: white;
    right: 10vw;
}

.cover-img{
    width: 100vw;
    min-height: 100vh;
}

.links-area{
  display: flex;
  margin: 0 auto;
  width: min-content;
  text-align: center;
}
.routerLink{
  margin: 20px;
  width: max-content;
  border: 0 !important;
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