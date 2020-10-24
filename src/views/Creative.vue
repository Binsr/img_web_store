<template>
  <div class="about">
    <StackSection :data='dataArr'></StackSection>
  </div>
</template>

<script>
import StackSection from '@/components/sections/StackSection.vue'
export default {
    computed:{
      dataArr(){
        return this.$store.state.creativeSectionsDataParsed
      }
    },
    components: {
      StackSection
    },
}
</script>