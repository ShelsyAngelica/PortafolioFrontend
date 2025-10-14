<template>
    <section class="container-mg">
        
        <h1 class="title-text-mg">Juego de <span class="span-text-mg">Memoria</span></h1>

        <div class="container-cards1">
            <div class="container-cards" id="card">
                <div class="card" v-for="(image, index) in duplicatedCards" :key="index" :class="getClass(index)" @click="toggleCard(image, index)" >
                <!-- <div class="card" v-for="(image, index) in duplicatedCards" :key="index" :class="{rotate : rotatedCards[index]}" @click="toggleCard(image, index)" > -->
                    <div class="card-inner">
                        <div class="card-front">
                            <!-- Cara frontal blanca -->
                        </div>
                        <div class="card-back">
                            <img :src="image.image" :alt="image.alt" class="img-card">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>            
</template>

<script>
import cloud from '../assets/imagesLottery/1.png'
import imgdb from '../assets/imagesLottery/2.png'
import gameDev from '../assets/imagesLottery/3.png'
import pc from '../assets/imagesLottery/4.png'
import snake from '../assets/imagesLottery/5.png'
import snake2 from '../assets/imagesLottery/6.png'
import key from '../assets/imagesLottery/7.png'
import css from '../assets/imagesLottery/9.png'

// import axios from 'axios';
export default {
    name: 'AreaOfPolygon',
    data() {
        return {
            images: [
                {
                    nameImg: 'cloud',
                    alt: 'imagen de una base de datos sql', 
                    image: cloud,
                    found: false
                },
                {
                    nameImg: 'imgdb',
                    alt: 'imagen de una base de datos sql', 
                    image: imgdb,
                    found: false
                },
                {
                    nameImg: 'gameDev',
                    alt: 'imagen de una base de datos sql', 
                    image: gameDev,
                    found: false
                },
                {
                    nameImg: 'pc',
                    alt: 'imagen de un computador con numeros binarios', 
                    image: pc,
                    found: false
                },
                {
                    nameImg: 'snake',
                    alt: 'imagen de una serpiente  con un hello ', 
                    image: snake,
                    found: false
                },
                {
                    nameImg: 'snake2',
                    alt: 'imagen de una serpiente', 
                    image: snake2,
                    found: false
                },
                {
                    nameImg: 'key',
                    alt: 'imagen de unas llaves {}', 
                    image: key,
                    found: false
                },
                {
                    nameImg: 'css',
                    alt: 'imagen con la palabra css', 
                    image: css,
                    found: false
                }
                
            ],
            rotatedCards : [],
            selectedCards:[],
            duplicatedCards:[],
            isValidating: false,
            
        }
    },
    mounted() {
        this.duplicatedCards = this.setduplicatedCards();
        // Inicializar el array con false para cada carta (cara blanca visible)
        this.rotatedCards = new Array(this.duplicatedCards.length).fill(false);


        setTimeout(() => {
            this.rotateAllCards();
            setTimeout(() => {
                this.rotateAllCards();
            }, 1500);
        }, 500);


        

    },
    methods: {
        //metodo para girar todas las clases
        rotateAllCards(){
            this.rotatedCards = this.rotatedCards.map(el => !el)
        },

        //metodo para duplicar las imagenes
        setduplicatedCards(){
            const imagesDuplicated = [...this.images, ...this.images]
            return imagesDuplicated.sort(() =>Math.random() - 0.5)
        },
        toggleCard(image, index) {
            
            //validamos si la imagen ya fue encontrada para que no haga nada
            if(image.found){
                return
            }

            // si ya hay una seleccionada no seleccionar de nuevo la misma
            if (this.selectedCards.length && this.selectedCards[0].index == index) {
                return
            }

            
            // En Vue 3, podemos asignar directamente al array
            this.rotatedCards[index] = !this.rotatedCards[index];
            
            //cartas selecciondas
            this.selectedCards.push({
                nameImg : image.nameImg,
                index
            })
        
            //validamos si ya seleccionaron 2 imagenes
            if(this.selectedCards.length == 2){

                this.isValidating = true;
                console.log(this.isValidating);

                //validamos si tienen el mismo nombre
                if(this.selectedCards[0].nameImg== this.selectedCards[1].nameImg ){

                    //a la imagen le colocamos found en true
                    this.duplicatedCards[this.selectedCards[0].index].found = true;
                    this.duplicatedCards[this.selectedCards[1].index].found = true;

                    // console.log("son pareja")
                    this.selectedCards = []
                }else{
                    setTimeout(() => {
                        this.rotatedCards[this.selectedCards[0].index] = !this.rotatedCards[this.selectedCards[0].index];
                        this.rotatedCards[this.selectedCards[1].index] = !this.rotatedCards[this.selectedCards[1].index];
                        // console.log("no son pareja")
                        this.selectedCards = []
                    }, 1000)

                    
                }

                setTimeout(() => {
                    this.isValidating = false;
                    console.log(this.isValidating);
                }, 1200)
                
            }
            
            
        },
    },
    computed:{
        getClass() {
            return (index) => {
                if (this.rotatedCards[index]) return "rotate"
                if (this.isValidating) return "disabled"
            return ""
            }
        }
    }
}
</script>

<style scoped>

.container-mg{
    background-color: rgb(190, 147, 183);
    min-height: 88.6vh;
    font-family: "Quicksand", sans-serif;
    padding: 50px 15px 10px 15px;
}

/* .title-text-mg .span-text-mg{
    font-size: 38px;
} */

.title-text-mg{
    text-align: center;
    color: white;
}

.span-text-mg{
    color: #93BEA9;
}

.container-cards1{
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.container-cards{
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 columnas iguales */
    grid-template-rows: repeat(4, 1fr);    /* 4 filas iguales */
    gap: 10px;
    width: 400px;
}

.card{
    width: 80px;
    height: 110px;
    perspective: 1000px;
    cursor: pointer;
    border-style: none;
}

.disabled{
    pointer-events: none; /* bloquea clics */
    opacity: 0.5;         
    cursor: not-allowed;
}
.card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    background-color: rgb(190, 147, 183);
}

.rotate .card-inner {
    transform: rotateY(180deg);
}

.card-front, .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
}

.card-front {
    background-color: white;
    
}

.card-back {
    border-radius: 8px;
    transform: rotateY(180deg);
}

.img-card{
    height: 100%;
    width: 100%;
    border-radius: 6px;
}

@media (max-width: 376px){
    .container-cards{
        gap: 5px;
        width: 300px;
    }
    .card{
        width: 70px;
        height: 90px;
    }
}

</style>