<template>
      <div class="panel">
        <div class="input"><div class="textHolder">{{$store.state.msg.name}}</div></div>
        <div class="input"><div class="textHolder">{{$store.state.msg.lname}}</div></div>
        <div class="input"><div class="textHolder">{{$store.state.msg.mail}}</div></div>
        <div class="input"><div class="textHolder">{{$store.state.msg.pass}}</div></div>
        <div class="basic-text">{{$store.state.msg.registerText1}}</div>
      </div>
</template>
<script>

    export default {
        components: {
        },
        name: 'SignUpForm',
        computed:{
          data(){
            return "nothing";
          }
        },
    }
</script>

<style>
.panel{

}

.basic-text{
    color: #000 !important;
    width: 300px;
}

.textHolder{
    margin: auto;
    display: flex;
    width: max-content;
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