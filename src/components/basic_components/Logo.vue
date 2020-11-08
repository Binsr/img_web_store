<template>
    <div class="logo-wraper">
        <router-link to="/">
            <div class="logoWraper">
                <img style="border-radius: 50%;width: 18px;" src="logoS.svg"/> 
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
        margin: 0 auto;
        border-radius: 50%;
    }
    .stockStock{
        height: 20px !important;
        display: block !important;
        line-height: 25px !important;
    }
    .logo-wraper a{
        text-decoration: none !important;
        color: #000 !important;
        border-width: 0px !important;
    }
    .logo-wraper{
        display: flex;
        width: max-content;
    }
</style>