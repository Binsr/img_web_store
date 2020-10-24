<template>
  <div class="stackSectionWraper">
    <!-- <h4 class="snipetSectionMsg">{{ data.msg }}</h4> -->
    <div style="display: flex;" v-for="section in data.images" :key="section">
      <PreviewImg @img-clicked="this.showImgDetails" v-for="d in section" :key="d" :img='d'></PreviewImg>
      <div :style="focusedImgDetails"></div>
    </div>
  </div>
  
</template>

<script>
import PreviewImg from '@/components/basic_components/PreviewImg.vue'
export default {
  name: 'SnipetSection',
  props: ['data'],
  components: {PreviewImg},
  data(){
    return {
      focusedImgWidth: null,
      focusedImgHeight: null,
    }
  },
  methods: {
    showImgDetails() {
      this.focusedImgWidth= "100px";
      this.focusedImgHeight= "200px";
    },
  },
  computed: {
    focusedImgDetails () {
      return {
        height: this.focusedImgHeight,
        width: this.focusedImgWidth,
        backgroundColor: "black"
      }
    },
  }
}
</script>

<style>

/* .snipetSectionMsg{
  text-align: left;
  margin-top: 20px;
} */
/* .snipetSectionWraper a{
  text-decoration: none !important;
} */
.stackSectionWraper{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 98%;
    text-align: left;
    margin: 0 auto;
}
.stackSectionWraper .previewImgWraper{
    margin: 20px 20px;
}

</style>