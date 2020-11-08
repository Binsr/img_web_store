 <template>
    <div class="headingTapeWraper">
        <div class="burgerMenuContainer"><router-link class="routerLink" to="/"><span>HOME</span></router-link></div>
        <Logo style="width: 100px"></Logo>
        <div class="loginButtonContainer">
            <router-link class="routerLink" style="margin-right: 10px" to="/login"><span>LOGIN</span></router-link>
            <router-link class="routerLink" to="shopping-cart-view"><span>SHOPPING CART</span></router-link>
        </div>
    </div>
</template>

<script>
import Logo from '@/components/basic_components/Logo.vue';
export default {
    components: {Logo},
    name: 'HeadTapeMenu'
}
</script>

<style>
.headingTapeWraper{
    background-color:white;
    height: min-content; 
    width: 100%;
    display: flex;
}
.loginButtonContainer{
  display:flex;
  width:max-content;
}
.burgerMenuContainer a{
  border-width: 0 !important;
}
.burgerMenuContainer{
  display:flex;
  width:max-content;
}
.routerLink{
  font-size: 13px;
  text-decoration: none;
}

</style>