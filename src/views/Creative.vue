<template>
  <div class="about">
    <StackSection :data='dataArr'></StackSection>
  </div>
</template>

<script>
import StackSection from '@/components/sections/stack_section/StackSection.vue'
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