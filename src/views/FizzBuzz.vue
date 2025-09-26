<template>
    <section class="container-fb">
        <div class="div-fb">
        <h1 class="title-text-fb">Fizz <span class="span-text-fb">Buzz</span></h1>

        <button @click="fizzBuzz()" class="btn-fb">FizzBuzz</button>
        <button @click="clean()" class="btn-clean">Limpiar</button>

        <div class="grid">
            <span v-for="(item, index) in items" :key="index">
                {{ item }}
            </span>
        </div>
        
        </div>

    </section>
</template>

<script>
import axios from 'axios';

export default {
    name: 'TextToMorse',
    data() {
        return {
            items: []
        }
    },
    methods: {
        fizzBuzz(){
            axios.get('http://localhost:8000/api/fizzBuzz')
            .then(response => {
                console.log(response.data.data);
                this.items = response.data.data;
            })
            .catch(error => {
                console.log(error);
            });
        },
        clean(){
            this.items = [];
        }
    }
}
</script>

<style scoped>

.container-fb{
    background-color: rgb(190, 147, 183);
    min-height: 88.6vh;
    font-family: "Quicksand", sans-serif;
    padding: 90px 15px 10px 15px;
}

.title-text-fb .span-text-fb{
    font-size: 38px;
}

.div-fb{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title-text-fb, .label-text-fb, .p-fb{
    color: white;
}

.label-text-fb{
    margin: 10px 0px;
}

.span-text-fb{
    color: #93BEA9;
}


.label-text-fb{
    color: white;
    background-color: transparent;
    border: none;
    font-size: 20px;
    font-weight: 600;
}

.grid{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 5px;
    margin: 10px;
}

.grid > span {
    background: white;
    box-shadow: 0 0 0 1px #ccc; /* línea fina alrededor */
    padding: 10px;
}

.btn-fb{
    background-color: #93BEA9;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    width: 100px;
    margin-bottom: 10px;
}

.btn-clean{
    border: 2px solid   #93BEA9;
    color:  #93BEA9;
    padding: 10px 20px;
    border-radius: 20px;
    width: 100px;
    margin-bottom: 10px;

}



</style>