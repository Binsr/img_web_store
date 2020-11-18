<template>
      <div class="panel">
        <div class="header-msg">{{$store.state.msg.welcome}}</div>
        <input  v-on:input="usrdata.username = $event.target.value" class="input">
        <input  :type="passwordFieldType" v-on:input="usrdata.password = $event.target.value" class="input">
        <button type="password" v-on:click="switchVisibility()">Show/Hide</button>
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
          
        },
        methods: {
          signInClick() {
            alert("username: " + this.usrdata.username + "\n" + "password: " + this.usrdata.password);//signal i am clicked thats all i handle 😜
          },
          switchVisibility(){
            this.passwordFieldType= this.passwordFieldType === 'password' ? 'text' : 'password';
          }
        },
    }
</script>

<style>
.panel{

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
    align-items: center;
}

</style>