<template>
    <div style="display:flex; flex-direction: column; width: 100%">
        <div style="display:flex; width: 100%">
            <PreviewImg @img-clicked="this.showImgDetails" v-for="(img,index) in this.images" :key="img" :imgIndex="index" :img="img">awd</PreviewImg>
        </div>
        <div class="focusedImgBox" :style="focusedImgBox"><!--  //On bi u sebi takodje trebao da ima preview image -->
          <div :style="focusedImageStyles"><img style="height: 100%" :src="focusedImgSrc"/></div>
          <div class="focusedImgTitle">{{focusedImageTitle}}</div>
        </div>
    </div>
</template>

<script>
import PreviewImg from '@/components/basic_components/PreviewImg.vue'
export default {
    name: 'StackSectionRow',
    props: ['images','sectionId'],
    components: {PreviewImg},
  data(){
    return {
      focusedImgWidth: '0px',
      focusedImgHeight: '0px',
      focusedImgId: 0,
      focusedImgDisplay: false,
    }
  },
  methods: {
    showImgDetails(imgId) {
        console.log(imgId);
        this.focusedImgWidth= "100%";
        this.focusedImgHeight= "600px";
        this.focusedImgId= imgId;
        if(this.$store.state.focusedImage.activeSection == this.sectionId && this.$store.state.focusedImage.activeImgId == imgId){
            this.focusedImgDisplay= !this.focusedImgDisplay;
        }
        else{
            this.$store.state.focusedImage.activeSection= this.sectionId;
            this.$store.state.focusedImage.activeImgId= imgId;
            this.focusedImgDisplay= true;
        }
    },
  },
  computed: {
    focusedImgBox () {
      var dis= "none";
      var activeSection= this.$store.state.focusedImage.activeSection;
      var activeImgId= this.$store.state.focusedImage.activeImgId; 
      if( (activeSection == this.sectionId) && (activeImgId == this.focusedImgId) && (this.focusedImgDisplay) ){
          dis= "flex";
      }else{
          dis="none";
      }

      return {
        height: this.focusedImgHeight,
        width: this.focusedImgWidth,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'black',
        display: dis
      }
    },
    focusedImgSrc(){
      return this.$store.state.focusedImage.src;
    },
    focusedImageId(){
        return this.focusedImgId;
    },
    focusedImageStyles(){
        return{
            width: this.$store.state.focusedImage.width,
            height: this.$store.state.focusedImage.height,
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'black',
            marginLeft: '40px',
            marginTop: '40px'
        }
    },
    focusedImageTitle(){
      return this.$store.state.focusedImage.title;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.focusedImgTitle{
  font-size: 18px;
  margin: 40px 0 0 20px;
}
.focusedImgBox{
  background-color: #251d20;
}
</style>