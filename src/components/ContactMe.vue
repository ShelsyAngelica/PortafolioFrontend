<template>
    <section class="section-contact-me" id="contacto">
        <div>
            <h1 class="title-contact-me">Contacta<span class="span-contact-me">me</span> </h1>
        </div>
        <div class="projects">
            <div class="card-project">
                <img src="../assets/images/location.png" alt="" class="img-project">
                <p class="text-contact-me">Bogota - Colombia</p>
            </div>

            <div class="card-project">
                <img src="../assets/images/correo.png" alt="" class="img-project-mail">  
                <p class="text-contact-me">Shelsy.a.garcia@gmail.com</p>
            </div>

            <div class="card-project">
                <img src="../assets/images/telefono.png" alt="" class="img-project">
                <p class="text-contact-me">+(57) 300 9564545</p>
            </div>   
        </div>
    </section>
</template>

<style scoped>

.section-contact-me{
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

.title-contact-me{
    color: white;
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 40px;
}

.span-contact-me{
    color: #93BEA9;
}

.text-contact-me{
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

@media (max-width: 426px) {
  .title-contact-me {
      font-size: 2rem;
  }

  .img-project, .img-project-mail{
    width: 25px;
  }
}

</style>
