<template>
  <div class="free">
    <StackSection :data='dataArr'></StackSection>
  </div>
</template>

<script>
// @ is an alias to /src
import StackSection from '@/components/sections/stack_section/StackSection.vue'
export default {
    computed:{
      dataArr(){
        return this.$store.state.freeImagesParsed
      }
    },
    components: {
      StackSection
    },
}
</script>