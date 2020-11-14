<template>
  <div class="snipetSectionWraper">
    <h4 class="snipetSectionMsg">{{ data.msg }}</h4>
    <div class="wrapImages">
      <PreviewImg v-for="d in data.images" :key="d" :img='d'></PreviewImg>
    </div>
    <router-link :to='data.seeMoreLink'><div class="seeMoreBtn">See more</div></router-link>
  </div>
</template>

<script>
import PreviewImg from '@/components/basic_components/img_components/PreviewImg.vue'
export default {
  name: 'SnipetSection',
  props: ['data'],
  components: {PreviewImg}
}
</script>

<style>

.wrapImages{
  display:flex;
  align-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
}

.seeMoreBtn{
  border-radius: 50px;
  width: 150px;
  height: 30px;
  line-height: 32px;
  margin: 10px auto;
  text-align: center;
  background-color: red;
  color: white;
}
.snipetSectionMsg{
  text-align: left;
  margin-top: 20px;
}
.snipetSectionWraper a{
  text-decoration: none !important;
}
.snipetSectionWraper{
  width: 90%;
  text-align: left;
  margin: 0 auto;
}
</style>