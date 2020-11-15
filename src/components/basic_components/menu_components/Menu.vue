 <template>
  <div class="menu-container">
    <div class="menu__tabs-container">
        <div v-for="tab in tabs" :key="tab" class="menu__tab">
            <router-link :to="tab.link"><span class="menu-text"> {{tab.message.toUpperCase()}} </span></router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    components: {},
    name: 'Menu',
    props: ['tabs'],
    computed:{
      dataC(){
        return this.data;
      }
    }
}
</script>

<style>
.activeTab{
  border-color: black;
}

.menu-container{
  width: 100%;
  display: flex;
  justify-content: center;
}

.menu__tabs-container{
  display: flex;
  margin: auto;
  
}
.menu__tab{
  width: max-content;
  box-sizing: border-box;
  margin: 0 3vw 0 3vw;
  color: #000 !important;
}

.menu__tab a{
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
.menu-text{
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

.menu__tab:hover{
  opacity: 0.9;
}
</style>