<template>
    <section id="proyectos">
        <div>
            <h1>Mis <span class="span-about"> proyectos</span> </h1>
        </div>
        <div class="projects">
            <div class="card-project">
                <img src="../assets/images/php.png" alt="" class="img-project">
                <h5>Texto a Morse</h5>
                <router-link :to="{ name: 'TextToMorse' }"> Visitar </router-link>
                <p>Descripción del proyecto: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                <!-- <p>Tecnologías</p> -->
            </div>

            <div class="card-project">
                <img src="../assets/images/php.png" alt="" class="img-project">
                <h5>Proyecto 1</h5>
                <p>Linkkk</p>
                <p>Descripción</p>
                <p>Tecnologías</p>
            </div>

            <div class="card-project">
                <img src="../assets/images/php.png" alt="" class="img-project">
                <h5>Proyecto 1</h5>
                <p>Linkkk</p>
                <p>Descripción</p>
                <p>Tecnologías</p>
            </div>   
        </div>
    </section>
</template>

<style scoped>

section{
    background-color: rgb(190, 147, 183);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 100vh;
    font-family: "Quicksand", sans-serif;
    padding: 90px;
}

h1{
    color: white;
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 40px;
}

h5{
    font-weight: 700;
    color: white;
}
.span-about, span{
    color: #93BEA9;
}

p{
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
  h1 {
      font-size: 2rem;
  }
  section{
    padding: 40px 50px;
  }
}

</style>
