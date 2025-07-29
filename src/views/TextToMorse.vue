<template>
    <div>
        <h1>Texto Morse</h1>
        <label for="string">Ingrese el texto</label>
        <input type="text" id="string">
        <button @click="getString()">Enviar</button>

        <p>Tu texto en morse es: 
            <span v-for="(element) in data" :key="element.index" :class="{'letter-color': element.letter_color}">{{ element.letter }}</span>
        </p>

        <div style="white-space: pre;" id="container"></div>

        <button @click="playMorse()">Reproducir en morse</button>
    </div>
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

.letter-color{
    font-size: 80px;
    color: red;
}

span{
    font-size: 50px;
}


</style>