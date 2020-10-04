<template>
  <div class="snipetSectionWraper">
    <h4 style="snipetSectionMsg">{{ data.msg }}</h4>
  </div>
</template>

<script>
export default {
  name: 'SnipetSection',
  props: ['data']
}
</script>

<style>
.snipetSectionMsg{
  text-align: left;
}
.snipetSectionWraper{
  width: 90%;
  text-align: left;
  margin: 0 auto;
  border-width: 1px;
  border-style: solid;
  border-color: red;
}
</style>