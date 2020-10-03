 <template>
    <div class="headingTapeWraper">
        <Logo></Logo>
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
.headingTapeWraper{background-color:white; height: min-content; width: 100%};
</style>