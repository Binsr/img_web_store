 <template> <!-- TODO ova komponenta ne bi trebala da bude hardcodovana -->
  <div class="burger-menu-icon" v-on:click="burgerMenuClicked"> </div>
  <div class="burger-menu-panel" :style="panelStyle">
        <!-- <div class="main-menu__tab">
            <router-link to="/creative"><span class="main-menu-text">CREATIVE</span></router-link>
        </div>
        <div class="main-menu__tab"> 
            <router-link to="/editorial"><span class="main-menu-text">EDITORIAL</span></router-link>
        </div>
        <div class="main-menu__tab">
            <router-link to="/vectors"><span class="main-menu-text">VECTORS</span></router-link>
        </div>
        <div class="main-menu__tab">
            <router-link to="/free"><span class="main-menu-text">FREE</span></router-link>
        </div> -->
  </div>
</template>

<script>
export default {
    components: {},
    name: 'BurgerMenu',
    data(){
        return{
            panelDisplayed: false,
            panelState:'none'
        }
    },
    methods: {
        burgerMenuClicked() {
            this.panelDisplayed= !this.panelDisplayed;
            if(this.panelDisplayed)
                this.panelState= "flex";
            else
                this.panelState= "none";
            
        }
    },
    computed: {
        panelStyle () {
            return {
                display: `${this.panelState}`,
            }
        },
  }
}
</script>

<style>
    .burger-menu-icon{
        width: 30px;
        height: 30px;
        background-color: red;
    }
    .burger-menu-panel{
       width: 100px; height: 200px; 
       background-color: black;
       position: absolute;
       left: 20px;
       top: 30px;
    }
</style>