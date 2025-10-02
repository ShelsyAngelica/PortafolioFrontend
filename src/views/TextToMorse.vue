<template>
    <section class="container-text-to-morse">
        <h1 class="title-text-to-morse">Texto a <span class="span-text-to-morse">Morse</span></h1>
        <div class="div-text-to-morse">
            <label class="label-text-to-morse" for="string">Ingrese el texto</label>
            <input type="text" id="string" class="input-text-to-morse" v-model="string">
            
            <button @click="getString()" class="button-play-morse" title="Reproducir en morse">
                <svg v-if="!isPlaying" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="2.4" d="m5 3l16 9l-16 9z"/>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="none" stroke="#fff" stroke-width="2.4" d="M6 4h4v16H6zM14 4h4v16h-4z"/>
                </svg>
            </button>



            <p class="p-morse" v-if="data.length">Tu texto en morse es: 
                <span  class="text-morse" v-for="(element) in data" :key="element.index" :class="{'letter-color': element.letter_color}">{{ element.letter }}</span>
            </p>

            <div style="white-space: pre;" id="container"></div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import dash from '../assets/audios/dash.mp4';
import dot from '../assets/audios/dot.mp4';
/* global Swal */

const SYMBOL_PAUSE = 100;
const LETTER_PAUSE = 300;

export default {
    name: 'TextToMorse',
    data() {
        return {
            data: [],
            string: null,
            isPlaying: false,   //  nuevo estado
            stopRequested: false // para cortar el bucle
        }
    },
    methods: {
        getString() {
            axios.get("http://localhost:8000/api/morse-code", {
                params: { text: this.string }
            })
            .then(response => {
                this.data = [];
                for (let index in response.data.data) {
                    this.data.push({
                        letter: response.data.data[index],
                        index: index,
                        letter_color: false,
                    });
                }
                this.playMorse();
            })
            .catch(error => {
                console.error("Error:", error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No hay texto'
                });
                return;
            });
        },

        playSymbol(symbol) {
            return new Promise((resolve) => {
                let audio;

                if (symbol === '.') audio = new Audio(dot);
                else if (symbol === '-') audio = new Audio(dash);

                if (audio) {
                    audio.volume = 0.2;
                    audio.playbackRate = 3;
                    audio.play();
                    audio.onended = () => setTimeout(resolve, SYMBOL_PAUSE);
                } else {
                    resolve();
                }
            });
        },

        async playMorse() {
            // Si ya está sonando, lo pausamos
            if (this.isPlaying) {
                this.stopRequested = true;
                this.isPlaying = false;
                return;
            }

            this.isPlaying = true;
            this.stopRequested = false;

            // limpiar colores
            for (let element of this.data) {
                element.letter_color = false;
            }

            // bucle
            for (let element of this.data) {
                if (this.stopRequested) break; // cortar si se pidió stop

                const char = element.letter;

                if (char === '.' || char === '-') { 
                    await this.playSymbol(char);
                    element.letter_color = true;
                } else if (char === ' ') {
                    await new Promise(r => setTimeout(r, LETTER_PAUSE));
                }
            }

            this.isPlaying = false;
            this.stopRequested = false;
        },

        clean(){
            this.data = [];
            this.string = null;
        }
    }
}
</script>


<style scoped>

.container-text-to-morse{
    background-color: rgb(190, 147, 183);
    min-height: 88.6vh;
    font-family: "Quicksand", sans-serif;
    padding: 90px 15px 10px 15px;
}

.title-text-to-morse .span-text-to-morse{
    font-size: 38px;
}

.title-text-to-morse{
    text-align: center;
}

.div-text-to-morse{
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
.letter-color{
    font-size: 80px;
    color: #ffffff;
}

.title-text-to-morse, .label-text-to-morse{
    color: white;
}

.input-text-to-morse{
    padding: 6px 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
    height: 36px;
    width: 208px;
}


.label-text-to-morse{
    display: flex;
    font-weight: 500;
    justify-content: center;
    color: black;
}

.div-b-tm{
    display: flex;
    gap: 10px;
}

.button-play-morse{
    border-radius: 50%;
    border: 2px solid #93BEA9;
    background-color: #93BEA9;
    color:  #93BEA9;
    padding: 10px 10px 10px 11px;
}

.button-convertir{
    background-color: #93BEA9;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    width: 100px;
}

.btn-clean-to-morse{
    border: 2px solid   #93BEA9;
    color:  #93BEA9;
    padding: 10px 20px;
    border-radius: 20px;
    width: 100px;
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