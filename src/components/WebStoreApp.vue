<template>
  <div>
    <HeadTapeMenu class="headingTape"></HeadTapeMenu>
    <SearchSection></SearchSection>
    <MainMenu></MainMenu>
    <div class="centerPanel"><router-view/></div>
    <FooterComponent></FooterComponent>
  </div>
</template>
<script>
    import MainMenu from '@/components/basic_layout/MainMenu.vue';
    import FooterComponent from '@/components/basic_layout/FooterComponent.vue';
    import SearchSection from '@/components/basic_layout/SearchSection.vue';
    import HeadTapeMenu from '@/components/basic_layout/HeadTapeMenu.vue'
    export default {
        components: {
            MainMenu, FooterComponent, HeadTapeMenu, SearchSection
        },
        name: 'WebStoreApp',
    }
</script>

<style scoped>


</style>
