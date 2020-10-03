<template>
  <div>
    <div style="background-color:black; height: 100px; width: 100vw"></div>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

export default {
  name: 'WebStoreApp',
}