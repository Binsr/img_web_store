<template>
  <div style="width: 100%">
    <HeadTapeMenu class="headingTape"></HeadTapeMenu>
    <div class="burgerMenuContainer"><router-link class="routerLink" to="/"><span>HOME</span></router-link></div>
    <div class="loginButtonContainer">
      <router-link class="routerLink" style="margin-right: 10px" to="/login"><span>LOGIN</span></router-link>
      <router-link class="routerLink" to="shopping-cart-view"><span>SHOPPING CART</span></router-link>
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
.loginButtonContainer{
  margin: 10px 10px 0 auto;
  display:flex;
  width:max-content;
}
.burgerMenuContainer{
  margin: 10px auto 0 0;
  display:flex;
  width:max-content;
}
.routerLink{
  font-size: 13px;
  text-decoration: none;
}

</style>