 <template>
    <div class="mainMenuWraper">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">Creative</router-link>
    </div>
</template>

<script>
export default {
  name: 'MainMenu'
}
</script>

<style>
.mainMenuWraper{background-color:grey; height: 100px; width: 100vw};
</style>