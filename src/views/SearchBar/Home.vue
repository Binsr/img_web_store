<template>
  <div class="about">
    <SnipetSection v-for="data in dataArr" :key="data" :data='data'></SnipetSection>
  </div>
</template>
<script>
import SnipetSection from '@/components/sections/SnipetSection.vue'
export default {
    computed:{
      dataArr(){
        return this.$store.state.homeSectionsData
      }
    },
    components: {
      SnipetSection
    },
}
</script>

<style>

.contentContainer{ /* TODO - Remove this its just for images on home to be visible*/
  border-width: 1px;
  border-style: solid;
  border-style: solid;
}

</style>