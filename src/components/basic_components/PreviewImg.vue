<template>
  <div class="previewImgWraper">
    
  </div>
</template>

<script>
export default {
  name: 'PreviewImg',
  props: ['data']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.previewImgWraper{
    width: 200px;
    border-width: 1px;
    margin: 20px auto;
    border-style: solid;
    border-color: black;
    height: 200px;
}
</style>
