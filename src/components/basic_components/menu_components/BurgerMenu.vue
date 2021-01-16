 <template>
  <div class="burger-menu-icon" v-on:click="burgerMenuClicked">
    <span class="material-icons menu-icon-style"> menu </span>
  </div>
  <div class="burger-menu-wrap" v-if="isPanelDisplayed">
		<div class="close" @click="burgerMenuClicked">
			<span class="material-icons">
				clear
			</span>
		</div>
    <div
      class="item-wrap"
      v-for="tab in tabs"
      :key="tab"
    >
      <router-link
        :to="tab.link"
        class="main-menu-text"
        :class="{ active: tab.link === currentPath }"
        >{{ tab.message }}
      </router-link>
    </div>
  </div>
</template>

<script>
// import Logo from "@/components/basic_components/Logo.vue";
export default {
  //   components: { Logo },
  name: "BurgerMenu",
  props: ["tabs"],
  data() {
    return {
      isPanelDisplayed: false,
    };
	},
	computed: {
		currentPath() {
			return this.$route.fullPath
		}
	},
  methods: {
    burgerMenuClicked() {
      this.isPanelDisplayed = !this.isPanelDisplayed;
    },
  },
};
</script>

<style>
.burger-menu-icon {
  width: 55px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu-icon-style {
  cursor: pointer;
  font-weight: 300;
  font-size: 38px;
}
.burger-menu-wrap {
	padding: 10px 0;
  z-index: 3;
  position: absolute;
  left: 30px;
  top: 44px;
  width: 200px;
  border: 1px solid black;
  background: rgb(247, 247, 247);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.item-wrap {
  padding: 10px 30px;
}
.close {
	position: absolute;
	top: 20px;
	right: 20px;
}
.close .material-icons {
	font-size: 16px;
	font-weight: 900;
	cursor: pointer;
}
.main-menu-text {
	position: relative;
  text-decoration: none;
	font-size: 14px;
  font-weight: bold;
  color: #2c3e50;
}
.active {
	color: red;
}
.active::after {
	content: '';
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 1.5px;
	background: red;
}
</style>