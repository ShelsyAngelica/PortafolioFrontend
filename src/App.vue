<template>
  <div>
    <main-nav />
    <router-view/>
  </div>
</template>

<script>
  import MainNav from './components/MainNav.vue';
  export default {
    components : {
      MainNav,
    }
  }
</script>
