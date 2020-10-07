<template>
  <div class="snipetSectionWraper">
    <h4 class="snipetSectionMsg">{{ data.msg }}</h4>
    <div style="display:flex">
      <PreviewImg v-for="d in data.images" :key="d" :data='d'></PreviewImg>
    </div>
    <router-link :to='data.seeMoreLink'><div class="seeMoreBtn">See more</div></router-link>
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