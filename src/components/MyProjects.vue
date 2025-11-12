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
                    route: 'TextToMorse'
                },
                {
                    title: 'Visita de Carros',
                    route: 'VisitCar'
                },
                {
                    title: 'Fizz Buzz',
                    route: 'FizzBuzz'
                },
                {
                    title: 'Anagrama',
                    route: 'Anagram'
                },
                {
                    title: 'Numeros Primos',
                    route: 'PrimeNumbers'
                },
                {
                    title: 'Area de un poligono',
                    route: 'AreaOfPolygon'
                },
                {
                    title: 'Juego de memoria',
                    route: 'MemoryGame'
                },                
            ]
        }
    }
}
</script>

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

.a-project{
    text-decoration: none;
}

.title-projects{
    color: white;
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 40px;
}

.title-project{
    font-weight: 500;
    color: white;
    font-size: 1.4rem;
    margin-bottom: 0;
}


.span-projects{
    color: rgb(147, 190, 169);
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
    background: linear-gradient(to right, transparent, #77c09c, transparent);
    opacity: 0;
    transition: opacity .5s ease; 
}

.card-project:hover .div-project-hover{
    opacity: 1;
}

.card-project{
    position: relative;
    background-color: #4a1942;
    width: 340px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 25px;
    border-radius: 20px;
    height: 170px;
}

.card-project:hover .link-project{
    color: rgb(119, 192, 156);
    
    transition: all 0.3s ease-in-out;
}

.card-project:hover .div-project-icon-link{
    background-color: #77c09c;
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
}

.card-project:hover .div-project-icon-link svg{
    stroke: #4a1942;
}

.div-project-content{
    display: flex;
    align-items: center;
    gap:16px
}

.div-project-link{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    border-top: 1px solid #e0e0e030;
    padding-top: 11px;
}

.div-project-icon{
    background-color: #93bea93d;
    border-radius: 10px;
    padding: 10px;
}

.link-project{
    text-decoration: none;
    color: white;
    font-size: 0.9rem;
    font-weight: 200;
    margin: 0;

}

.div-project-icon-link{
    background-color: rgba(147, 190, 169, 0.239);
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
