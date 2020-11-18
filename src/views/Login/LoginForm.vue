<template><!-- TODO Ulepsaj malo kod ovde procesljaj, sredi -->
      <div class="panel">
        <div class="header-msg">{{$store.state.msg.welcome}}</div>
        <input type="username" :placeholder="$store.state.msg.username"  v-on:input="usrdata.username = $event.target.value" class="input">
        <div class="passwordWrap">
          <input  :type="passwordFieldType" :placeholder="$store.state.msg.pass"  v-on:input="usrdata.password = $event.target.value" >
          <button type="password" v-on:click="switchVisibility()">
            <img :style="hiddenPassStyle" src="@/assets/passwordShow.png"/>
            <img :style="visiblePassStyle" src="@/assets/passwordHide.png"/>
          </button>
        </div>
        <div v-on:click="signInClick" class="signBtn">{{$store.state.msg.signIn}}</div>
      </div>
</template>
<script>

    export default {
        components: {
        },
        data(){
          return {passwordFieldType: "password"}
        },
        name: 'LoginForm',
        computed:{
          usrdata(){
            return {
              username: "user",
              password: "pass",
            }
          },
          visiblePassStyle () {
            return {
              width: `15` + 'px',
              display: 'none'
            }
          },
          hiddenPassStyle () {
            return {
              width: `15` + 'px',
              display: 'block'
            }
          },
        },
        methods: {
          signInClick() {
            alert("username: " + this.usrdata.username + "\n" + "password: " + this.usrdata.password);//signal i am clicked thats all i handle 😜
          },
          switchVisibility(){
            if(this.usrdata.password.length == 0)
              return
            this.passwordFieldType= this.passwordFieldType === 'password' ? 'text' : 'password';
            let tmp= this.visiblePassStyle.display; //TODO ekstraktuj funkcije odavde
            this.visiblePassStyle.display= this.hiddenPassStyle.display;
            this.hiddenPassStyle.display= tmp; 
          }
        },
    }
</script>

<style>
.panel{}

</style>