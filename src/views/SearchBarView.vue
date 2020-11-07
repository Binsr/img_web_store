<template>
  <div>
    <SearchSection></SearchSection>
    <MainMenu></MainMenu>
    <router-view name="Home"/>
    <div class="centerPanel"><router-view/></div>
  </div>
</template>
<script>
    import MainMenu from '@/components/basic_layout/MainMenu.vue';
    import SearchSection from '@/components/basic_layout/SearchSection.vue';
    export default {
        components: {
            MainMenu,SearchSection
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