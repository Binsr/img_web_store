 <template>
    <div class="headingTapeWraper">
        <div class="burger-area centerText"><router-link class="routerLink" to="/"><p>HOME</p></router-link></div>
        <div class="logo-area"><Logo></Logo></div>
        <div class="login-area centerText"><router-link class="routerLink" style="margin-right: 10px" to="/login"><p>LOGIN</p></router-link></div>
        <div class="chart-area centerText"><router-link class="routerLink" to="/shopping-cart-view"><p>SHOPPING CART</p></router-link></div>
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

.centerText{
    display: flex;
    align-items: center;
    justify-content: center;
}
.centerText p{
    height: 13px;
}

.headingTapeWraper{
    background-color:white;
    height: min-content; 
    width: 100%;
    display: flex;
}
.logo-area{
    
}
.burger-area a{
  border-width: 0 !important;
}
.burger-area{
  display:flex;
  width:max-content;
}
.routerLink{
  font-size: 13px;
  text-decoration: none;
}

</style>