<template>
    <div style="display:flex; flex-direction: column; width: 100%">
        <div style="display:flex; width: 100%">
            <PreviewImg @clicked-signal="this.showImgDetails" v-for="(img,index) in this.images" :key="img" :imgIndex="index" :img="img">awd</PreviewImg>
        </div>
        <div class="focusedImgBox" :style="focusedImgBox"><!--On bi u sebi takodje trebao da ima preview image takodje trebao bi imati signal koji hvata(SHOW/HIDE) da se hendluje nekim signalom-->
          <div :style="focusedImageStyles"><img style="height: 100%" :src="focusedImgSrc"/></div>
          <div class="focusedImgTitle">{{focusedImageTitle}}</div>
        </div>
    </div>
</template>

<script>
import PreviewImg from '@/components/basic_components/img_components/PreviewImg.vue'
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
    showImgDetails(payload) {
        var imgId= payload.imgId;
        this.setFocusedImageData(imgId);//Ovo TODO
        this.focusedImgWidth= "100%";//I ovo zbunjuje TODO
        this.focusedImgHeight= "600px";//A dve su razlicite stvari jedna je slika iz Store drugo je kontejner koji je prikazuje to moram bolje  TODO
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
    setFocusedImageData(imgId){
      this.$store.state.focusedImage.width= this.images[imgId].width * 1.5  + 'px'; //This should be img from store directly!!!! TODO ZAKUKOLJENO PREVISE
      this.$store.state.focusedImage.height= this.images[imgId].height * 1.5 + 'px';
      this.$store.state.focusedImage.title= this.images[imgId].title;
      this.$store.state.focusedImage.src= this.images[imgId].src;
    }
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
  color: white;
}
.focusedImgBox{
  background-color: #251d20;
}
</style>