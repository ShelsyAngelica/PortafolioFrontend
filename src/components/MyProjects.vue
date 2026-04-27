<template>
    <section class="section-projects" id="proyectos">
        <div>
            <h1 class="title-projects">Mis <span class="span-projects"> proyectos</span> </h1>
        </div>
        <div class="projects">
                <router-link class="a-project" :to="{ name: project.route  }" v-for="project in projects" :key="project.name">
                <div class="card-project">
                    <div class="div-project-hover"></div>
                    <div class="div-project-content">
                        <div class="div-project-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#77c09c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-code"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" /></svg>
                        </div>
                        <h3 class="title-project">{{ project.title }}</h3>
                        
                    </div>
                    <div>
                        <span class="text-project">{{ project.text }}</span>
                    </div>
                    <div class="div-project-link">
                        <p class="link-project"> Ver proyecto </p>
                        <div class="div-project-icon-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#77c09c" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-external-link"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" /><path d="M11 13l9 -9" /><path d="M15 4h5v5" /></svg>
                        </div>
                    </div>
                </div>  
            </router-link>
           </div>
    </section>
</template>

<script>
export default {
    name: 'MyProjects',
    data() {
        return {
            projects : [
                {
                    title: 'Texto a Morse',
                    route: 'TextToMorse',
                    text:  'Herramienta que convierte texto a código Morse y reproduce su sonido en tiempo real.'
                },
                {
                    title: 'Visita de Carros',
                    route: 'VisitCar',
                    text: 'Aplicación para gestionar el ingreso y salida de vehículos, registro de placas, tiempos y cálculo de costo.'
                },
                {
                    title: 'Fizz Buzz',
                    route: 'FizzBuzz',
                    text: 'Implementación del clásico FizzBuzz que evalúa números y aplica reglas de divisibilidad.'
                },
                {
                    title: 'Anagrama',
                    route: 'Anagram',
                    text: 'Herramienta que verifica si dos palabras son anagramas, comparando sus caracteres.'
                },
                {
                    title: 'Numeros Primos',
                    route: 'PrimeNumbers',
                    text: 'Programa que identifica números primos evaluando sus divisores'
                },
                {
                    title: 'Area de un poligono',
                    route: 'AreaOfPolygon',
                    text: 'Calculadora de área para diferentes polígonos.'
                },
                {
                    title: 'Juego de memoria',
                    route: 'MemoryGame',
                    text: 'Juego de memoria que desafía a recordar posiciones de tarjetas ocultas.'
                },                
            ]
        }
    }
}
</script>

<style scoped>

.section-projects{
    background-color: var(--primary-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 100vh;
    font-family: "Quicksand", sans-serif;
    padding: 90px;
}

.a-project{
    text-decoration: none;
}

.title-projects{
    color: var(--decimal-color);
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 40px;

}

.title-project{
    font-weight: 600;
    color: var(--secondary-color-light);
    font-size: 1.4rem;
    margin-bottom: 0;

}


.span-projects{
    color: var(--quaternary-color);
}

.text-project{
    color: var(--secondary-color-light);
}

.projects{
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
}
.div-project-hover{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px; 
    background: linear-gradient(to right, transparent, var(--secondary-color-light), transparent);
    opacity: 0;
    transition: opacity .5s ease; 
}

.card-project:hover .div-project-hover{
    opacity: 1;
}

.card-project{
    position: relative;
    background-color: var(--primary-color-light);
    backdrop-filter: blur(10px);
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    border-radius: 20px;
    height: 280px;
    justify-content: space-between;
}

.card-project:hover .link-project{
    color: var(--secondary-color-light);
    transition: all 0.3s ease-in-out;
}

.card-project:hover .div-project-icon-link{
    background-color: var(--secondary-color-light);
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
}

.card-project:hover .div-project-icon-link svg{
    stroke: var(--quinary-color);
}

.div-project-content{
    display: flex;
    align-items: center;
    gap:16px;
    margin-bottom: 11px;
}

.div-project-link{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    border-top: 1px solid #e0e0e030;
}

.div-project-icon{
    background-color: var(--quaternary-color-light);
    border-radius: 10px;
    padding: 10px;
}

.link-project{
    text-decoration: none;
    color: var(--decimal-color);
    font-size: 0.9rem;
    font-weight: 400;
    margin: 0;
    padding: 5px 10px;
    border-radius: 10px;
    background-color: var(--primary-color);
    border: 1px solid var(--quinary-color);

}

.div-project-icon-link{
    background-color: var(--quinary-color);
    border-radius: 50%;
    padding: 5px;
}
    

@media (max-width: 426px) {
  .title-projects {
      font-size: 2rem;
  }
  .section-projects{
    padding: 40px 50px;
  }

  .card-project{
    width: 290px;
  }
  .title-project{
    font-size: 1.2rem
  }
}

</style>
