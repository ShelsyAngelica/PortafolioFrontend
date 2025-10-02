<template>
    <section class="section-projects" id="proyectos">
        <div>
            <h1 class="title-projects">Mis <span class="span-projects"> proyectos</span> </h1>
        </div>
        <div class="projects">
            <div class="card-project">
                <img src="../assets/images/php.png" alt="" class="img-project">
                <h5 class="title-project">Texto a Morse</h5>
                <router-link :to="{ name: 'TextToMorse' }"> Visitar </router-link>
                <p class="description-project">Programa que es capaz de transformar texto natural a códigomorse y viceversa, al igual que reproducir el texto en morse.</p>
                <!-- <p>Tecnologías</p> -->
            </div>

            <div class="card-project">
                <img src="../assets/images/php.png" alt="" class="img-project">
                <h5 class="title-project">Visita de Carros</h5>
                <router-link :to="{ name: 'VisitCar' }"> Visitar </router-link>
                <p class="description-project">
                    Programa para gestionar entradas y salidas de vehículos. 
                    Cada vehículo se identifica por placa y cada estancia tiene hora de entrada y hora de salida. Según el tipo de vehículo se aplica una política de tarifas distinta.
                </p>
            </div>

            <div class="card-project">
                <img src="../assets/images/php.png" alt="" class="img-project">
                <h5 class="title-project">Fizz Buzz</h5>
                <router-link :to="{ name: 'FizzBuzz' }"> Visitar </router-link>
                <p class="description-project">Descripción</p>
            </div>
            
            <div class="card-project">
                <img src="../assets/images/php.png" alt="" class="img-project">
                <h5 class="title-project">Anagrama</h5>
                <router-link :to="{ name: 'Anagram' }"> Visitar </router-link>
                <p class="description-project">
                    Programa que recibe dos palabras y retorne
                    verdadero o falso según sean o no anagramas.
                    Un Anagrama consiste en formar una palabra reordenando todas las letras de otra palabra inicial.
                </p>
            </div> 

            <div class="card-project">
                <img src="../assets/images/php.png" alt="" class="img-project">
                <h5 class="title-project">Numeros Primos</h5>
                <router-link :to="{ name: 'PrimeNumbers' }"> Visitar </router-link>
                <p class="description-project">Programa que se encarga de comprobar si un número es o no primo e imprime los números primos entre 1 y 100.</p>
            </div>

            <div class="card-project">
                <img src="../assets/images/php.png" alt="" class="img-project">
                <h5 class="title-project">Area de un poligono</h5>
                <router-link :to="{ name: 'AreaOfPolygon' }"> Visitar </router-link>
                <p class="description-project">
                    Programa que calcula y retornar el área de un polígono.
                    Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
                    Imprime el cálculo del área de un polígono de cada tipo.
                </p>
            </div>
        </div>
    </section>
</template>

<style scoped>

.section-projects{
    background-color: rgb(190, 147, 183);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 100vh;
    font-family: "Quicksand", sans-serif;
    padding: 90px;
}

.title-projects{
    color: white;
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 40px;
}

.title-project{
    font-weight: 700;
    color: white;
}
.span-projects{
    color: #93BEA9;
}

.description-project{
    color: white;
    font-size: 1rem;
}

.projects{
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
}

.card-project{
    background-color: #4a1942;
    width: 190px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 7px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.img-project{
    width: 60px;
}

@media (max-width: 425px) {
  .title-projects {
      font-size: 2rem;
  }
  .section-projects{
    padding: 40px 50px;
  }
}

</style>
