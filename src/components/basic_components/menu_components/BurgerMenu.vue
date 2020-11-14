 <template> <!-- TODO ova komponenta ne bi trebala da bude hardcodovana -->
  <div class="burger-menu-icon" v-on:click="burgerMenuClicked"><img style="width: 30px" src="@/assets/burgerMenu.png"/> </div>
  <div class="burger-menu-panel" :style="panelStyle">
        <div class="linkWrap" v-on:click="burgerMenuClicked">
            <router-link to="/"><span class="main-menu-text">HOME</span></router-link>
        </div>
        <div class="linkWrap" v-on:click="burgerMenuClicked">
            <router-link to="/creative"><span class="main-menu-text">{{$store.state.msg.pages.creative.fullName.toUpperCase()}}</span></router-link>
        </div>
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
    .linkWrap{
        display: flex;
        margin: 10px auto;
    }
    .burger-menu-icon{
        width: 30px;
        height: 30px;
    }
    .burger-menu-panel{
       width: 100px; height: 200px; 
       border-width: 1px;
       border-style: solid;
       border-collapse: black;
       background-color: rgb(247, 247, 247);
       position: absolute;
       left: 20px;
       top: 30px;
       display: flex;
       flex-direction: column;
    }
</style>