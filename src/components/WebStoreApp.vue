<template>
  <div style="width: 100%">
    <HeadTapeMenu class="headingTape"></HeadTapeMenu>
    <div class="loginButtonContainer"><router-link to="/login"><span>LOGIN</span></router-link></div>
    <!-- <router-link to="/"><span>HOME</span></router-link> -->
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
.loginButtonContainer{
  margin: 10px 10px 0 auto;
  display:flex;
  width:min-content;
}

</style>