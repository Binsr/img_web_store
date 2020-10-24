<template>
<div  class="contentContainer">
  <div v-on:click="imClicked" class="previewImgWraper" :style="myStyles">
    
  </div>
  <!-- <div class="popupInfo" :style="myStyles">
    <div style="width: 60%;height:60%;background-color: white; margin: auto auto;margin-top: 20vh">
    <div v-on:click="hideBiggerImg" :style="closeStyle" class="closeClass">
      <div style="display:block; text-align: center">{{closeParagraph}}</div>
    </div>
    </div>
  </div> -->
</div>
</template>

<script>
export default {
  name: 'PreviewImg',
  props: ['img'],
  data(){
    return {
      imgWidth: this.img.width + "px",
      imgHeight: this.img.height + "px",
    }
  },
  methods: {
    imClicked() {
      //alert("Img clicked");//signal i am clicked thats all i handle 😜
      this.$emit("img-clicked");
    },
  },
  computed: {
    myStyles () {
      return {
        height: `${this.imgHeight}`,
        width: `${this.imgWidth}`,
      }
    },
    closeStyle(){
      return{
        display: `${this.popupDisplay}`
      }
    },
    closeParagraph(){
      return this.closePara;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.closeClass{
  width: 100%;
  height: 20px;
  background-color: red;
}
.contentContainer:hover{
  cursor: pointer;
}
.contentContainer{
  margin: 20px auto;
}
.previewImgWraper{
    border-width: 1px;
    border-style: solid;
    border-color: black;
    margin: 0 auto;
}
.popupInfo{
  position: fixed;
  background-color: rgba(0, 0, 0, 0.712);
  z-index: 5;
  margin: auto auto;
  top: 0vh;
  left: 0vw;
}



</style>
