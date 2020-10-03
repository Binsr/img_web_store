<template>
  <div>
    <MainMenu></MainMenu>
    <div class="centerPanel"><router-view/></div>
    <FooterComponent></FooterComponent>
  </div>
</template>
<script>
    import MainMenu from '@/components/basic_layout/MainMenu.vue';
        import FooterComponent from '@/components/basic_layout/FooterComponent.vue';
    export default {
        components: {
            MainMenu, FooterComponent
        },
        name: 'WebStoreApp',
    }
</script>

<style>
.centerPanel{
    width: 80vw;
    background-color: green;
    height: 100vh;
    margin: 0 auto;
}

</style>
