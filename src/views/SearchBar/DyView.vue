<template>
  <div class="about">
    <div>{{$store.state.activePage.pageName}} </div>
    <StackSection :data='dataArr'></StackSection>
  </div>
</template>

<script>
import StackSection from '@/components/sections/stack_section/StackSection.vue'
export default {
    computed:{
      dataArr(){
        return this.$store.state.creativeSectionsDataParsed
      },
      pageName(){
        return this.$store.state.activePage.pageName
      }
    },
    components: {
      StackSection
    },
}
</script>