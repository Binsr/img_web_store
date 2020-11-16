<template>
      <div class="panel">
        <div class="input"><div class="textHolder">first name</div></div>
        <div class="input"><div class="textHolder">last name</div></div>
        <div class="input"><div class="textHolder">e-mail</div></div>
        <div class="input"><div class="textHolder">password</div></div>
        <div class="basic-text">Yes i want emails with visual inspiration, special offers and more.</div>
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