<template>
  <div style="width: 100%">
    <div class="heading">
      <HeadTapeMenu class="headingTape"></HeadTapeMenu>
    </div>
    <router-view/>
  </div>
</template>

<script>
    import HeadTapeMenu from '@/components/basic_layout/HeadTapeMenu.vue'
    export default {
        components: {
            HeadTapeMenu
        },
        name: 'WebStoreApp',
    }
</script>

<style>

</style>