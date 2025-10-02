<template>
    <section class="container-ag">
        <h1 class="title-text-ag">Anagra<span class="span-text-ag">ma</span></h1>

        <form action="">
            <div class="div-ag">

                <label class="label-text-ag" for="string1" id="string1">Ingrese la 1 palabra</label>
                <input type="text" v-model="string1" class="input-text-ag">

                <label class="label-text-ag" for="string2" id="string2">Ingrese la 2 palabra</label>
                <input type="text" v-model="string2" class="input-text-ag">
                
                <div class="div-b-ag">
                    <button type="button" @click="anagram()" class="btn-v">Validar</button>
                    <button @click="clean()" class="btn-clean-ag">Limpiar</button>
                </div>

                <p v-if="data !== null" class="p-ag">
                    <span v-if="data">Si es anagrama</span>
                    <span v-else>No son anagramas</span>

                </p>
                
            </div>
        </form>
       

    </section>
</template>

<script>
import axios from 'axios';

export default {
    name: 'TextToMorse',
    data() {
        return {
            string1: '',
            string2: '',
            data: null
        }
    },
    methods: {
        anagram(){
            axios.get("http://localhost:8000/api/anagram", {
                params: { 
                    string1: this.string1,
                    string2: this.string2
                }
            })
            .then(response => {
                this.data = response.data;
            })
            .catch(error => {
                console.log(error);
            });
        },
        clean(){
            this.string1 = '',
            this.string2 =  '',
            this.data   = null
        }

        
    }
}
</script>

<style scoped>

.container-ag{
    background-color: rgb(190, 147, 183);
    min-height: 88.6vh;
    font-family: "Quicksand", sans-serif;
    padding: 90px 15px 10px 15px;
}

.title-text-ag, .span-text-ag{
    font-size: 38px;
}

.title-text-ag{
    text-align: center;
    color: white;
}

.div-ag{
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

.input-text-ag{
    padding: 6px 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
    height: 36px;
    width: 208px;
}

.span-text-ag{
    color: #93BEA9;
}


.label-text-ag{
    display: flex;
    font-weight: 500;
    justify-content: center;
    color: black;
}
.div-b-ag{
    display: flex;
    gap: 10px;
}

.btn-v{
    background-color: #93BEA9;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    width: 100px;

}
.btn-clean-ag{
    border: 2px solid   #93BEA9;
    color:  #93BEA9;
    padding: 10px 20px;
    border-radius: 20px;
    width: 100px;
}

.p-ag{
    margin-top: 10px;
    font-size: 1.5rem;
    font-weight: 600;
}


</style>