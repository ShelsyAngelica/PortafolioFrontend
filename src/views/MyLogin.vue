<template>
    <section class="container-login">
        
       <div class="div-login">
            <h1 class="title-text-login">Inicia <span class="span-text-login">Sesion</span></h1>

            <form @submit.prevent="login" class="form-login">
                <label for="email">Ingrese su correo</label>
                <input type="email" v-model="auth.email" name="email">

                <label for="password">Ingrese su contraseña</label>
                <input type="password" v-model="auth.password" name="password">

                <button class="button-login" type="submit">Ingresar</button>
            </form>

            <a href="" class="a-login">Olvido su contraseña</a>
            <a href="" class="a-login">Registrese</a>
       </div>

    </section>            
</template>

<script>
import { mapState, mapActions } from 'vuex';

// import axios from 'axios';
export default {
    name: 'MyLogin',
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState('auth', ['auth'])
    },
    mounted() {
    },
    methods: {
        ...mapActions('auth', ['login'])
    },
    
}
</script>

<style scoped>

.container-login{
    background-color: rgb(190, 147, 183);
    min-height: 100vh;
    font-family: "Quicksand", sans-serif;
    padding: 90px 15px 10px 15px;
}

/* .title-text-login .span-text-login{
    font-size: 38px;
} */

.title-text-login{
    text-align: center;
    color: white;
}

.span-text-login{
    color: #93BEA9;
}

.div-login{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px 16px;
    max-width: 500px;
    margin: 20px auto;
    background: #f5e6f7;
    padding: 20px;
    border-radius: 10px;
}
.div-login form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px 16px;
}
.div-login form input{
    padding: 6px 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
    height: 36px;
    width: 208px;
}

.button-login{
    background-color: #93BEA9;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    width: 100px;
}

.a-login{
    text-decoration: none;
    color: rgb(190, 147, 183);
}

</style>