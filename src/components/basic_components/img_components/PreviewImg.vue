<template> <!-- Smilsi bolje ime za ovu komponentu -->
<div  class="contentContainer">
  <div class="img-addToChart"></div>
  <div class="img-similarImages"></div>
  <div v-on:click="sendClickedSignal" :style="myStyles">
    <img class="imgStyle" :src="imgSrc"/>
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
      imgSrc: this.img.src,
      payload: { //Maybe later this click event will send more information, it should be all in same structure
        imgId: this.imgIndex
      }
    }
  },
  methods: {
    sendClickedSignal() {
      //alert("Img clicked");//signal i am clicked thats all i handle 😜
      this.$emit("clicked-signal",this.payload);
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

.contentContainer:hover .img-addToChart{
  width: 70px;
  height: 30px;
  margin-left:auto;
  background-color: gray;
  position: absolute;
  bottom: 0;
}
.contentContainer:hover .img-similarImages{
  width: 70px;
  height: 30px;
  margin-left:auto;
  background-color: gray;
  position: absolute;
  right: 0;
}


.contentContainer:hover{
  cursor: pointer;
}
.contentContainer{
  display: flex;
  position: relative;
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
