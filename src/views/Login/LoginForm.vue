<template>
      <div class="panel">
        <div>{{$store.state.msg.welcome}}</div>
        <div class="input"><div class="textHolder">{{$store.state.msg.username}}</div></div>
        <div class="input"><div class="textHolder">{{$store.state.msg.pass}}</div></div>
      </div>
</template>
<script>

    export default {
        components: {
        },
        name: 'LoginForm',
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