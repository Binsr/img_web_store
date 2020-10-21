<template>
  <div class="previewImgWraper" :style="{width:  data.width, height: data.height }">
    
  </div>
</template>

<script>
export default {
  name: 'PreviewImg',
  props: ['data'],
  computed: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.previewImgWraper{
    border-width: 1px;
    margin: 20px auto;
    border-style: solid;
    border-color: black;
}
</style>
