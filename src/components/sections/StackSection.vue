<template>
  <div class="stackSectionWraper">
    <!-- <h4 class="snipetSectionMsg">{{ data.msg }}</h4> -->
      <PreviewImg v-for="d in data.images" :key="d" :data='d'></PreviewImg>
  </div>
</template>

<script>
import PreviewImg from '@/components/basic_components/PreviewImg.vue'
export default {
  name: 'SnipetSection',
  props: ['data'],
  components: {PreviewImg}
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