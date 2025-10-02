<template>
    <section class="container-pn">
        <div class="div-pn">
        <h1 class="title-text-pn">Numeros <span class="span-text-pn">Primos</span></h1>
        
        <div>
            <button @click="getPrimeNumbers()" class="btn-pn">Listar</button>
            <button @click="clean()" class="btn-clean">Limpiar</button>
        </div>
        

        <div class="grid-pn">
            <span v-for="(item, index) in items" :key="index" :class="{'span-prime': NumberPrime(item), 'span-no-prime': !NumberPrime(item)}">

                
                {{ index }}
                {{ item }}

            </span>
            
        </div>
        
        </div>

    </section>
</template>

<script>
import axios from 'axios';

export default {
    name: 'PrimeNumbers',
    data() {
        return {
            items: []
        }
    },
    methods: {
        getPrimeNumbers(){
            axios.get('http://localhost:8000/api/number_prime')
            .then(response => {
                console.log(response.data.data);
                this.items = response.data.data;
            })
            .catch(error => {
                console.log(error);
            });
        },
        NumberPrime(item){
            return item == 'si soy primo';
            // if(item == 'si soy primo'){
            //     return true;
            // }
            // return false;
        },
        clean(){
            this.items = [];
        }
    }
}
</script>

<style scoped>

.container-pn{
    background-color: rgb(190, 147, 183);
    min-height: 88.6vh;
    font-family: "Quicksand", sans-serif;
    padding: 90px 15px 10px 15px;
}

.title-text-pn .span-text-pn{
    font-size: 38px;
}

.div-pn{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title-text-pn, .label-text-pn, .p-pn{
    color: white;
}

.label-text-pn{
    margin: 10px 0px;
}

.span-text-pn{
    color: #93BEA9;
}


.label-text-pn{
    color: white;
    background-color: transparent;
    border: none;
    font-size: 20px;
    font-weight: 600;
}

.grid-pn{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 5px;
    margin: 10px;
    grid-auto-rows: 52px;
}

.grid-pn > span {
    box-shadow: 0 0 0 1px #ccc; /* línea fina alrededor */
    padding: 8px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn-pn{
    background-color: #93BEA9;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    width: 100px;
    margin-right: 10px;
}

.btn-clean{
    border: 2px solid   #93BEA9;
    color:  #93BEA9;
    padding: 10px 20px;
    border-radius: 20px;
    width: 100px;
    margin-bottom: 10px;

}

.span-prime{
    color: white;
    background-color: #93BEA9;
   
}

.span-no-prime{
    color: black;
    background-color:white;
}

@media (max-width: 500px) {
    .grid-pn{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 5px;
        margin: 10px;
    }
}

@media (max-width: 420px) {
    .grid-pn{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 5px;
        margin: 10px;
    }
}

</style>