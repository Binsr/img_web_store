<template>
      <div class="panel">
        <div class="header-msg">{{$store.state.msg.welcome}}</div>
        <input type="username"  v-on:input="usrdata.username = $event.target.value" class="input">
        <div class="passwordWrap">
          <input  :type="passwordFieldType" v-on:input="usrdata.password = $event.target.value" >
          <button type="password" v-on:click="switchVisibility()"><img :style="hiddenPassStyle" src="@/assets/passwordShow.png"/><img :style="visiblePassStyle" src="@/assets/passwordHide.png"/></button>
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
            let tmp= this.visiblePassStyle.display;
            this.visiblePassStyle.display= this.hiddenPassStyle.display;
            this.hiddenPassStyle.display= tmp; 
          }
        },
    }
</script>

<style>
.panel{

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