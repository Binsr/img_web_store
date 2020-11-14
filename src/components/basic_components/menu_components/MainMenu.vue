 <template> <!-- TODO ova komponenta ne bi trebala da bude hardcodovana -->
  <div class="main-menu-container">
    <div class="main-menu__tabs-container">
        <div class="main-menu__tab">
            <router-link to="/creative"><span class="main-menu-text"> {{$store.state.msg.pages.creative.fullName.toUpperCase()}} </span></router-link>
        </div>
        <div class="main-menu__tab"> 
            <router-link to="/editorial"><span class="main-menu-text">{{$store.state.msg.pages.editorial.fullName.toUpperCase()}}</span></router-link>
        </div>
        <div class="main-menu__tab">
            <router-link to="/vectors"><span class="main-menu-text">{{$store.state.msg.pages.vectors.fullName.toUpperCase()}}</span></router-link>
        </div>
        <div class="main-menu__tab">
            <router-link to="/free"><span class="main-menu-text">{{$store.state.msg.pages.free.fullName.toUpperCase()}}</span></router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    components: {},
    name: 'MainMenu'
}
</script>

<style>
.activeTab{
  border-color: black;
}

.main-menu-container{
  width: 100%;
  display: flex;
  justify-content: center;
}

.main-menu__tabs-container{
  display: flex;
  margin: auto;
  
}
.main-menu__tab{
  width: max-content;
  box-sizing: border-box;
  margin: 0 3vw 0 3vw;
  color: #000 !important;
}

.main-menu__tab a{
  font-weight: 400;
  justify-content: center;
  display: flex;
  margin: auto;
  text-align: center;
  padding: 4px;
  text-decoration: none;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: white;
}
.main-menu-text{
    color: #000;
    font-weight: 300;
    font-size: 14px;
}

.router-link-active{
  border-color: red  !important;
  border-width: 0 0 2px 0 !important;
  border-style: solid;
}
.router-link-active span{
  color: white important;
}

.main-menu__tab:hover{
  opacity: 0.9;
}
</style>