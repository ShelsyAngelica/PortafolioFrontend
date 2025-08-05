<template>
    <section class="container-text-to-morse">
        <div class="div-text-to-morse">
        <h1 class="title-text-to-morse">Texto a <span class="span-text-to-morse">Morse</span></h1>
        <label class="label-text-to-morse" for="string">Ingrese el texto</label>
        <input type="text" id="string" class="input-text-to-morse">
        <button @click="getString()" class="button-convertir">Convertir</button>

        <p class="p-morse">Tu texto en morse es: 
            <span  class="text-morse" v-for="(element) in data" :key="element.index" :class="{'letter-color': element.letter_color}">{{ element.letter }}</span>
        </p>

        <div style="white-space: pre;" id="container"></div>


        <button @click="playMorse()" class="button-play-morse" title="Reproducir en morse">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24">
            <path 
                fill="none" 
                stroke="#fff" 
                stroke-linejoin="round" 
                stroke-width="2.4" 
                d="m5 3l16 9l-16 9z"/>
            </svg>
        </button>

    </div>
    </section>
</template>

<script>
import dash from '../assets/audios/dash.mp4';
import dot from '../assets/audios/dot.mp4';


const SYMBOL_PAUSE = 100; // Pausa entre símbolos (después de sonar)
const LETTER_PAUSE = 300; // Pausa entre letras (además del símbolo)
const WORD_PAUSE = 700;

export default {
    name: 'TextToMorse',
    data() {
        return {
            data: [],
        }
    },
    methods: {
        async getString() {
            try {
                //obtener el texto que ingresa el usuario
                let string = document.getElementById('string').value;
                const rta = await fetch(`http://localhost:8000/api/morse-code?text=${encodeURIComponent(string)}`);

                if (!rta.ok) {
                    throw new Error("Error al obtener los datos:" + this.data.status);

                }

                this.data = [];
                let data = await rta.json(); 
                
                for (let index in data.data) {
                    this.data.push({
                        letter: data.data[index],
                        index: index,
                        letter_color: false,
                    });
                    
                }             
                
                
                this.playMorse();


            } catch (error) {
                console.error('Error:', error);

            }
        },
        playSymbol(symbol) {
            return new Promise((resolve) => {
                let audio;

                // Obtenemos los audios
                if (symbol === '.') {
                    audio = new Audio(dot);
                } else if (symbol === '-') {
                    audio = new Audio(dash);
                }

                if (audio) {
                    audio.volume = 0.2;
                    audio.playbackRate = 3;
                    audio.play();
                    audio.onended = () => setTimeout(resolve, SYMBOL_PAUSE); // esperar después de sonar
                } else {
                    resolve(); // espacios, por ejemplo
                }
            });
        },
        async playMorse() {

            for (let element of this.data) {
                element.letter_color = false;
            }


            for (let element of this.data) {
                const char = element.letter;
                

                if (char === '.' || char === '-') { 
                    await this.playSymbol(char);
                    element.letter_color = true;
                } else if (char === ' ') {
                    // Doble espacio = palabra
                    if (element.index + 1 === ' ') {
                        await new Promise(r => setTimeout(r, WORD_PAUSE));
                        element.index++; // saltar el segundo espacio
                    } else {
                        await new Promise(r => setTimeout(r, LETTER_PAUSE));
                    }
                }
            }
        }
    }
}
</script>

<style scoped>

.container-text-to-morse{
    background-color: rgb(190, 147, 183);
    min-height: 88.6vh;
    font-family: "Quicksand", sans-serif;
    padding: 90px;
}

.title-text-to-morse .span-text-to-morse{
    font-size: 38px;
}

.div-text-to-morse{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.letter-color{
    font-size: 80px;
    color: #4a1942;
}

.title-text-to-morse, .label-text-to-morse, .p-morse{
    color: white;
}

.label-text-to-morse, .input-text-to-morse{
    margin: 10px 0px;
}

.input-text-to-morse{
    border: none;
    outline: none;
    border-radius: 5px;
}


.label-text-to-morse{
    color: white;
    background-color: transparent;
    border: none;
    font-size: 20px;
    font-weight: 600;
}

.button-play-morse{
    border-radius: 50%;
    border: 2px solid #93BEA9;
    background-color: #93BEA9;
    color:  #93BEA9;
    padding: 10px 10px 10px 11px;
}

.button-play-morse, .button-convertir{
    margin: 10px 0px;
}

.button-convertir{
    border: 2px solid #93BEA9;
    color:  #93BEA9;
    padding: 10px 20px;
    border-radius: 20px;
}

.button-play-morse:hover, .button-convertir:hover{
    color: black;
}

.text-morse{
    font-size: 50px;
}

.span-text-to-morse{
    color: #93BEA9;
}


</style>