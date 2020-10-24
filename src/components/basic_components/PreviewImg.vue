<template>
<div  class="contentContainer">
  <div v-on:click="imClicked" class="previewImgWraper" :style="myStyles"></div>
</div>
</template>

<script>
export default {
  name: 'PreviewImg',
  props: ['img','imgIndex'],
  data(){
    return {
      imgWidth: this.img.width + "px",
      imgHeight: this.img.height + "px",
      imgId: this.imgIndex
    }
  },
  methods: {
    imClicked() {
      //alert("Img clicked");//signal i am clicked thats all i handle 😜
      this.$emit("img-clicked",this.imgId);
      this.$store.state.focusedImage.width= this.imgWidth;
      this.$store.state.focusedImage.height= this.imgHeight;
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
