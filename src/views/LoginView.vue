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
    height: auto;
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

.passwordWrap{ 
  display: flex;
  margin: 10px auto;
  width: max-content;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(24, 24, 24, 0.582);
  width: 300px;
  height: 40px;
  padding-left: 10px;
}
.passwordWrap input,button{
  border: none;
  border-width: 0px;
  box-shadow: 0;
}
.passwordWrap button{
  width: 30px;
  margin-left: auto;
}
.header-msg{
  font-size: 23px;
  color: #000;
}

.signBtn{
  width: 300px;
  height: 40px;
  border-radius: 40px;
  margin: 0 auto;
  margin-bottom: 20px;
  line-height: 42px;
  background-color: red;
  color: white;
  font-weight: 700;
}
.textHolder{
    margin: auto;
    display: flex;
    width: min-content;
}
.input{
    width: 300px;
    height: 40px;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(24, 24, 24, 0.582);
    margin: 10px auto 10px auto;
    display: flex;
    justify-content: center;
    padding-left: 10px;
    align-items: center;
}


</style>