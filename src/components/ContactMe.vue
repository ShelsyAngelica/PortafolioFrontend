<template>
    <section id="contacto">
        <div>
            <h1>Contacta<span class="span-about">me</span> </h1>
        </div>
        <div class="projects">
            <div class="card-project">
                <img src="../assets/images/location.png" alt="" class="img-project">
                <p>Bogota - Colombia</p>
            </div>

            <div class="card-project">
                <img src="../assets/images/correo.png" alt="" class="img-project-mail">  
                <p>Shelsy.a.garcia@gmail.com</p>
            </div>

            <div class="card-project">
                <img src="../assets/images/telefono.png" alt="" class="img-project">
                <p>+(57) 300 9564545</p>
            </div>   
        </div>
    </section>
</template>

<style scoped>

section{
    background-color: #4a1942;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 60vh;
    font-family: "Quicksand", sans-serif;
    padding: 90px;
    justify-content: space-between;
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
    gap: 130px;
}

.card-project{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.img-project{
    width:30px;
    margin-bottom: 10px;
}

.img-project-mail{
    width: 40px;
}

@media (max-width: 660px) {
    .projects{
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

}

@media (max-width: 425px) {
  h1 {
      font-size: 2rem;
  }

  .img-project, .img-project-mail{
    width: 25px;
  }
}

</style>
