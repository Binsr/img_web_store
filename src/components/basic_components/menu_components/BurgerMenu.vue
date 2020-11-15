 <template> <!-- TODO ova komponenta ne bi trebala da bude hardcodovana -->
  <div class="burger-menu-icon" v-on:click="burgerMenuClicked"><img style="width: 30px" src="@/assets/burgerMenu.png"/> </div>
  <div class="burger-menu-panel" :style="panelStyle">
        <div class="linkWrap">
            <span class="main-menu-text"><Logo/></span><div class="cancleBtn" v-on:click="burgerMenuClicked">x</div> <!-- !!!!!!!!!!! DINAMICKI MORA OVAJ MENUU !!!!!!! -->
        </div>
        <div class="linkWrap" v-on:click="burgerMenuClicked">
            <router-link to="/"><span class="main-menu-text">{{$store.state.msg.pages.home}}</span></router-link>
        </div>
        <div class="linkWrap" v-on:click="burgerMenuClicked">
           <span class="main-menu-text">{{$store.state.msg.pages.customImg}}</span>
        </div>
        <div class="linkWrap" v-on:click="burgerMenuClicked">
           <span class="main-menu-text">{{$store.state.msg.pages.pricing}}</span>
        </div>
        <div class="linkWrap" v-on:click="burgerMenuClicked">
           <span class="main-menu-text">{{$store.state.msg.pages.faq}}</span>
        </div>
        <div class="linkWrap" v-on:click="burgerMenuClicked">
           <span class="main-menu-text">{{$store.state.msg.pages.contact}}</span>
        </div>
  </div>
</template>

<script>
import Logo from '@/components/basic_components/Logo.vue';
export default {
    
    components: {Logo},
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