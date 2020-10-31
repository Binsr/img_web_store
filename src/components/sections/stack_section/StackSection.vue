<template>
  <div class="stackSectionWraper">
    <div style="display: flex;width: 100%" v-for="(row, index) in data.images" :key="row">
        <StackSectionRow :images="data.images[index]" :sectionId="index"></StackSectionRow>
    </div>
  </div>
  
</template>

<script>
import StackSectionRow from '@/components/sections/stack_section/StackSectionRow.vue'
export default {
  name: 'SnipetSection',
  props: ['data'],
  components: {StackSectionRow},
}
</script>

<style>

.stackSectionWraper{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 98%;
    text-align: left;
    margin: 0 auto;
}


</style>