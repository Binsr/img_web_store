<template>
    <HeadTapeMenu></HeadTapeMenu>
    <router-view/>
    <FooterComponent class="footer-component"></FooterComponent>
</template>

<script>
    import HeadTapeMenu from '@/components/basic_layout/HeadTapeMenu.vue';
    import FooterComponent from '@/components/basic_layout/FooterComponent.vue';  
    export default {
        components: {
            HeadTapeMenu, FooterComponent
        },
        name: 'WebStoreApp',
    }
</script>

<style>

.footer-component{ /*COMPONENT SHOULD BE POSITIONED IN ITS PARENT ALWAYS */
}

</style>