<template>
      <div class="panel">
        <div class="input"><div class="textHolder">{{$store.state.msg.username}}</div></div>
        <div class="input"><div class="textHolder">{{$store.state.msg.password}}</div></div>
                <div class="input"><div class="textHolder">confirm password</div></div>
        <div class="input"><div class="textHolder">e-mail</div></div>
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