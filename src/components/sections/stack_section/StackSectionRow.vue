<template>
    <div style="display:flex; flex-direction: column">
        <div style="display:flex">
            <PreviewImg @img-clicked="this.showImgDetails" v-for="(img,index) in this.images" :key="img" :imgIndex="index" :img="img">awd</PreviewImg>
        </div>
        <div :style="focusedImgDetails"><div :style="aaa"></div></div>
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
      focusedImgDisplay: false
    }
  },
  methods: {
    showImgDetails(imgId) {
        console.log(imgId);
        this.focusedImgWidth= "100%";
        this.focusedImgHeight= "400px";
        this.focusedImgId= imgId;
        if(this.$store.state.focusedImage.activeSection == this.sectionId && this.$store.state.focusedImage.activeImgId == imgId){
            this.focusedImgDisplay= !this.focusedImgDisplay;
        }
        else{
            this.$store.state.focusedImage.activeSection= this.sectionId;
            this.$store.state.focusedImage.activeImgId= imgId;
            this.focusedImgDisplay= true;
        }


        // var activeSection=  this.$store.state.focusedImage.activeSection;
        // var activeImg= this.$store.state.focusedImage.activeImgId;



        // if(this.$store.state.focusedImage.activeImgId == imgId)
        //     this.focusedImgDisplay= false;
        // else if(this.$store.state.focusedImage.activeSection != this.sectionId)
        //     this.focusedImgDisplay= false;
        // else{
        //     this.focusedImgDisplay= true;
        // }
    

    },
  },
  computed: {
    focusedImgDetails () {
      var dis= "none";

      if(this.$store.state.focusedImage.activeSection == this.sectionId && this.$store.state.focusedImage.activeImgId == this.focusedImgId && this.focusedImgDisplay){
          dis= "block";
      }else{
          dis="none";
      }

      return {
        height: this.focusedImgHeight,
        width: this.focusedImgWidth,
        backgroundColor: "green",
        display: dis
      }
    },
    focusedImageId(){
        return this.focusedImgId;
    },
    aaa(){
        return{
            width: this.$store.state.focusedImage.width,
            height: this.$store.state.focusedImage.height,
            backgroundColor: "black"
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>