<template>
    <div class="wrapWhole">
    <router-link to="/">
        <div class="logoWraper">
            <!-- <svg class="svgWrap">
                <circle cx="20" cy="20" r="13" fill="#c91414" />
                <text fill="#ffffff" font-size="17" font-family="Verdana" x="14" y="27">S</text>
            </svg> -->
            <img style="border-radius: 50%" src="logoS.svg"/> 
            <span class="stockStock">tock<span style="font-weight: 400">Serbia</span></span>
        </div>
    </router-link>
    </div>
</template>

<script>
export default {
  name: 'Logo',
}
</script>

<style>
    .logoWraper{
        display: flex;
        justify-content: center;
        width: 20px;
        height: 20px;
        margin: 0 auto;
        border-radius: 50%;
    }
    .stockStock{
        height: 20px !important;
        display: inline-block !important;
        line-height: 25px !important;
    }
    .svgWrap{
        width: 35px;
        height: 33px;
    }
    .wrapWhole > a{
        text-decoration: none !important;
        color: #000 !important;
    }
</style>