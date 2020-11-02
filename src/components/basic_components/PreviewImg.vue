<template>
<div  class="contentContainer">
  <div v-on:click="sendClickedSignal" :style="myStyles">
    <img class="imgStyle" :src="this.imgSrc"/>
  </div>
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
      imgId: this.imgIndex,
      imgSrc: this.img.src
    }
  },
  methods: {
    sendClickedSignal() {
      //alert("Img clicked");//signal i am clicked thats all i handle 😜
      this.$emit("clicked-signal",this.imgId);
    },
  },
  computed: {
    myStyles () {
      return {
        height: `${this.imgHeight}` + 'px',
        width: `${this.imgWidth}` + 'px',
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.contentContainer:hover{
  cursor: pointer;
}
.contentContainer{
  display: flex;
  width: min-content;
  margin: 20px auto;
}

.imgStyle{
    max-width: 100%;
    max-height: 100%;
    display: block;
}
.previewImgWraper{
  display: flex;
  width: min-content;
}

</style>
