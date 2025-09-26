<template>
    <section class="container-ag">
        <form action="">
            <div class="div-ag">
                <h1 class="title-text-fb">Anagra<span class="span-text-ag">ma</span></h1>

                <label class="label-text-ag" for="string1" id="string1">Ingrese la 1 palabra</label>
                <input type="text" v-model="string1" class="input-text-ag">

                <label class="label-text-ag" for="string2" id="string2">Ingrese la 2 palabra</label>
                <input type="text" v-model="string2" class="input-text-ag">

                <button type="button" @click="anagram()" class="btn-v">Validar</button>

                <p v-if="data !== null" class="p-ag">
                    <span v-if="data">Si es anagrama</span>
                    <span v-else>No son anagramas</span>

                </p>
                
            </div>
        </form>
       

    </section>
</template>

<script>

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
        async anagram(){
            try {
                const rta = await fetch(
                    `http://localhost:8000/api/anagram?string1=${encodeURIComponent(this.string1)}&string2=${encodeURIComponent(this.string2)}`
                )

                if (!rta.ok){
                    throw new Error('Error al obtener los datos:' + rta.status)
                }

                 this.data = await rta.json();
                
            } catch(error){
                console.error('Error:', error)
            }
            
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

.title-text-fb .span-text-ag{
    font-size: 38px;
}

.div-ag{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title-text-fb, .label-text-ag, .p-fb{
    color: white;
}

.label-text-ag{
    margin: 10px 0px;
}

.span-text-ag{
    color: #93BEA9;
}


.label-text-ag{
    color: white;
    background-color: transparent;
    border: none;
    font-size: 20px;
    font-weight: 600;
}

.btn-v{
    margin-top: 10px;
    background-color: #93BEA9;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    margin-right: 10px;

}

.p-ag{
    margin-top: 10px;
    font-size: 1.5rem;
    font-weight: 600;
}


</style>