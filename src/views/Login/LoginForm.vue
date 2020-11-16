<template>
      <div>
        <div class="input"><div class="textHolder">USERNAME</div></div>
        <div class="input"><div class="textHolder">PASSWORD</div></div>
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