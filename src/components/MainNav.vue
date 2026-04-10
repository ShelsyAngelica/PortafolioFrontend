<template>
  <nav class="navbar navbar-expand-lg" id="inicio">
  <div class="container-fluid">
    <div>
      <a class="name" href="#">Shelsy <span class="last-name">GARCIA</span></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <div class="collapse navbar-collapse div-nav-main justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-link a-menu" aria-current="page" :to="{ name: 'Home', hash: '#inicio' }">Inicio</router-link>
        <router-link class="nav-link a-menu" :to="{ name: 'Home', hash: '#sobre-mi' }"> Sobre mi </router-link>
        <router-link class="nav-link a-menu" :to="{ name: 'Home', hash: '#proyectos' }">Mis proyectos</router-link>
        <router-link class="nav-link a-menu" :to="{ name: 'Home', hash: '#skills' }">Skills</router-link>
        <router-link class="nav-link a-menu" :to="{ name: 'Home', hash: '#contacto' }">Contacto</router-link>
        
      </div>
    </div>
  </div>
</nav>
</template>

<script>
import { mapActions } from 'vuex';

// import axios from 'axios';
export default {
    name: 'MainNav',
    data() {
        return {
            
        }
    },
    computed: {
    },
    mounted() {
    },
    methods: {
        ...mapActions('auth', ['logout'])
    },
    
}


</script>


<style scoped>

nav {
  background-color: rgb(190, 147, 183);
  padding: 1rem;
  font-family: "Quicksand", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-weight: bold;
  border-bottom: 2px solid var(--quinary-color);
}
.container-fluid{
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
}
.name{
  font-size: 1.2rem;
  color: white;
  text-decoration: none;
  margin-right: 30px;
}

.a-menu{
  color: white;
  text-decoration: none;
  margin-right: 30px;
}

.a-menu:hover{
  text-decoration: underline;
  color:white;
}

.last-name{
  color: #93BEA9 ;
}

@media (min-width: 992px) {
  .div-nav-main{
    flex-direction: flex;
    justify-content: space-between;
  }
}



</style>