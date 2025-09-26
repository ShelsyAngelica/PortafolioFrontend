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
                <p class="description-project">Descripción del proyecto: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                <!-- <p>Tecnologías</p> -->
            </div>

            <div class="card-project">
                <img src="../assets/images/php.png" alt="" class="img-project">
                <h5 class="title-project">Visita de Carros</h5>
                <router-link :to="{ name: 'VisitCar' }"> Visitar </router-link>
                <p class="description-project">Descripción del proyecto: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            </div>

            <div class="card-project">
                <img src="../assets/images/php.png" alt="" class="img-project">
                <h5 class="title-project">Fizz Buzz</h5>
                <router-link :to="{ name: 'FizzBuzz' }"> Visitar </router-link>
                <p class="description-project">Descripción</p>
                <p>Tecnologías</p>
            </div>
            
            <div class="card-project">
                <img src="../assets/images/php.png" alt="" class="img-project">
                <h5 class="title-project">Anagrama</h5>
                <router-link :to="{ name: 'Anagram' }"> Visitar </router-link>
                <p class="description-project">Descripción</p>
                <p>Tecnologías</p>
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
    gap: 20px;
}

.card-project{
    background-color: #4a1942;
    width: 150px;
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
