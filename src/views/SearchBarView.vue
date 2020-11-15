<template>
  <div>
    <SearchSection></SearchSection>
    <Menu :tabs="data"></Menu>
    <router-view :name="'Home'"/>
    <div class="centerPanel"><router-view/></div>

  </div>
</template>
<script>
    import Menu from '@/components/basic_components/menu_components/Menu.vue';
    import SearchSection from '@/components/basic_layout/SearchSection.vue';
    export default {
        components: {
            Menu, SearchSection,
        },
        name: 'WebStoreApp',
        computed:{
          data(){
            return this.$store.state.menus.mainMenu.pages;
          }
        },
    }
</script>

<style>

.centerPanel{
    width: 80vw;
    border: 1px solid black;
    margin: 10px auto;
    height: auto !important;  
}

</style>