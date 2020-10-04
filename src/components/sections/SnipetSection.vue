<template>
  <div class="snipetSectionWraper">
    <h4 class="snipetSectionMsg">{{ data.msg }}</h4>
    <div style="display:flex">
      <PreviewImg v-for="d in data.images" :key="d" :data='d'></PreviewImg>
    </div>
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
.snipetSectionMsg{
  text-align: left;
  margin-top: 20px;
}
.snipetSectionWraper{
  width: 90%;
  text-align: left;
  margin: 0 auto;
  overflow-y: scroll;
}
</style>