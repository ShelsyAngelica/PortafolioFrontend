<template>
  <div>
    <main-nav v-if='showNav'/>
    <router-view/>
  </div>
</template>

<script>

  import MainNav from './components/MainNav.vue';
  export default {
    components : {
      MainNav,
    },
    computed:{
      showNav(){
        return this.$route.path !== '/login'
      }
    }
  }
</script>
