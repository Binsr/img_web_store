<template>
  <div>
    <SearchSection></SearchSection>
    <Menu :data="data"></Menu>
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
            console.log(this.$store.state.menus.mainMenu)
            return this.$store.state.menus.mainMenu;
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