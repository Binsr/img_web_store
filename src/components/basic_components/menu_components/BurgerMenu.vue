 <template> <!-- TODO ova komponenta ne bi trebala da bude hardcodovana -->
  <div class="burger-menu-icon" v-on:click="burgerMenuClicked"><img style="width: 30px" src="@/assets/burgerMenu.png"/> </div>
  <div class="burger-menu-panel" :style="panelStyle">
        <div class="linkWrap">
            <span class="main-menu-text"><Logo/></span><div class="cancleBtn" v-on:click="burgerMenuClicked">x</div>
        </div>
        <div class="linkWrap" v-for="tab in tabs" :key="tab" v-on:click="burgerMenuClicked">
            <router-link  :to="tab.link"><span class="main-menu-text">{{tab.message}}</span></router-link>
        </div>
  </div>
</template>

<script>
import Logo from '@/components/basic_components/Logo.vue';
export default {
    
    components: {Logo},
    name: 'BurgerMenu',
    props: ['tabs'],
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
    .cancleBtn{
        margin-left: 20px;
    }
    .burger-menu-icon, .linkWrap :hover{
        cursor: pointer;
    }
    .linkWrap{
        display: flex;
        margin: 10px auto;
    }
    .burger-menu-icon{
        width: 30px;
        height: 30px;
    }
    .burger-menu-panel{
       z-index: 3;
       width: 200px; 
       height: 240px; 
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