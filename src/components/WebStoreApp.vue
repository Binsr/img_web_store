<template>
  <div>
    <HeadTapeMenu></HeadTapeMenu>
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