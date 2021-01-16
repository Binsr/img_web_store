 <template>
    <div class="headingTapeWraper">
       <!-- <div class="burger-area router-link"><router-link class="routerLink" to="/"><p>BURGER</p></router-link></div> -->
        <BurgerMenu :tabs="data"></BurgerMenu>
        <div class="logo-area"><router-link to="/"><Logo></Logo></router-link></div>
        <div class="login-area router-link"><router-link class="routerLink" style="margin-right: 10px" to="/login-singup"><p>{{$store.state.msg.login}}</p></router-link></div>
        <div class="chart-area router-link"><router-link class="routerLink" to="/shopping-cart-view"><p>{{$store.state.msg.chart}}</p></router-link></div>
    </div>
</template>

<script>
import Logo from '@/components/basic_components/Logo.vue';
import BurgerMenu from '@/components/basic_components/menu_components/BurgerMenu.vue';
export default {
    components: {Logo, BurgerMenu},
    name: 'HeadTapeMenu',
    computed:{
        data(){
            return this.$store.state.menus.burgerMenu.pages;
          }
        },
}
</script>

<style>

.headingTapeWraper{
    user-select: none;
    background-color:white;
    height: min-content; 
    width: 100%;
    display: flex;
    padding: 10px 0;
}

.burger-area{
    float: left;
} 
.logo-area{
    margin: 0 auto;
    padding-left: 80px;
}
.login-area{
    float: right
}
.chart-area{
    float: right;
}

.router-link{
    display: flex;
    align-items: center;
    justify-content: center;
}
.router-link a{
    text-decoration: none;
    color: #000 !important;
    border: 0px !important;
}

.router-link p{
    height: 13px;
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