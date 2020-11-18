<template>
      <div class="panel">
        <div class="header-msg">{{$store.state.msg.newToStock}}</div>
        <input type="username" :placeholder="$store.state.msg.username"  v-on:input="username = $event.target.value" class="input">
        <input :placeholder="$store.state.msg.name"  v-on:input="firstName = $event.target.value" class="input">
        <input :placeholder="$store.state.msg.lname"  v-on:input="lastName = $event.target.value" class="input">
        <input :placeholder="$store.state.msg.mail"  v-on:input="email = $event.target.value" class="input">
        <div class="passwordWrap">
          <input  :type="passwordFieldType" :placeholder="$store.state.msg.pass"  v-on:input="password = $event.target.value" >
          <button type="password" v-on:click="switchVisibility()">
            <img :style="hiddenPassStyle" src="@/assets/passwordShow.png"/>
            <img :style="visiblePassStyle" src="@/assets/passwordHide.png"/>
          </button>
        </div>
        <div class="checkBoxWrap">
          <input v-on:input="specialChecked= $event.target.value" class="checkBoxInput" type="checkbox">
          <div class="basic-text">{{$store.state.msg.registerText1}}</div>
        </div>
        <div class="basic-text singleInLine">{{$store.state.msg.registerText2}}</div>
        <div v-on:click="signInClick()" class="signBtn">{{$store.state.msg.register}}</div>
      </div>
</template>
<script>

    export default {
        components: {
        },
        data(){
          return {
            passwordFieldType: "password",
            username: null,
            lastName: null,
            firstName: null,
            email: null,
            password: null,
            specialChecked: "off"
          }
        },
        name: 'SignUpForm',
        computed:{
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
            alert("username: " + this.username + "\n" + 
                  "first name: " + this.firstName + "\n"+ 
                  "last name: " + this.lastName + "\n" +
                  "email: " + this.email + "\n" + 
                  "password: " + this.password + "\n" +
                  "Special accepted: " + this.specialChecked
            );//signal i am clicked thats all i handle 😜
          },
          switchVisibility(){
            this.passwordFieldType= this.passwordFieldType === 'password' ? 'text' : 'password';
            let tmp= this.visiblePassStyle.display; //TODO ekstraktuj funkcije odavde
            this.visiblePassStyle.display= this.hiddenPassStyle.display;
            this.hiddenPassStyle.display= tmp; 
          }
        },
    }
</script>

<style>
.panel{

}

.checkBoxInput{
  margin-bottom: auto;
  margin-right: 5px;
  margin-top: -1px;

}
.checkBoxWrap{
  display: flex;
  margin: 10px auto;
  width: 300px;
}

.singleInLine{
  width: 300px;
  margin: 10px auto;
  display: flex;
}

.basic-text{
    color: #000 !important;
    width: 300px;
    font-size: 13px;
    text-align: left;
}

.textHolder{
    margin: auto;
    display: flex;
    width: max-content;
    text-align: left;
}



</style>