<template>
  <div>
    <SearchSection></SearchSection>
    <MainMenu></MainMenu>
    <router-view name="Home"/>
    <div class="centerPanel"><router-view/></div>
    <FooterComponent></FooterComponent>
  </div>
</template>
<script>
    import MainMenu from '@/components/basic_layout/MainMenu.vue';
    import SearchSection from '@/components/basic_layout/SearchSection.vue';
    import FooterComponent from '@/components/basic_layout/FooterComponent.vue';
    export default {
        components: {
            MainMenu, SearchSection, FooterComponent
        },
        name: 'WebStoreApp',
    }
</script>

<style>
.centerPanel{
    width: 80vw;
    border: 1px solid black;
    height: 100vh;
    margin: 10px auto;   
}

</style>