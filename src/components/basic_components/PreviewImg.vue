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
      imgWidth: this.img.width,
      imgHeight: this.img.height,
      imgId: this.imgIndex
    }
  },
  methods: {
    imClicked() {
      //alert("Img clicked");//signal i am clicked thats all i handle 😜
      this.$emit("img-clicked",this.imgId);
      this.$store.state.focusedImage.width= this.imgWidth * 1.5 + 'px';
      this.$store.state.focusedImage.height= this.imgHeight * 1.5 + 'px';
      this.$store.state.focusedImage.title= this.img.title;
    },
  },
  computed: {
    myStyles () {
      return {
        height: `${this.imgHeight}` + 'px',
        width: `${this.imgWidth}` + 'px',
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




</style>
