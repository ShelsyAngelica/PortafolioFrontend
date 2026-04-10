<template>
    <section class="section-about-me" id="sobre-mi">
        <div>
            <h1 class="title-about-me">Sobre <span class="span-about"> mi</span> </h1>
        </div>
        <div class="div-about-me">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#77c09c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M9 12l2 2l4 -4" /></svg>
            <p class="text-about-me"> 
                Soy <span class="span-about">tecnóloga en Análisis y Desarrollo de Software</span> con conocimientos en desarrollo backend usando Laravel y PHP,
                creación de APIs RESTful, y manejo de bases de datos relacionales como MySQL y PostgreSQL.
            </p>
        </div>

        <div class="div-about-me">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#77c09c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M9 12l2 2l4 -4" /></svg>
            <p class="text-about-me"> 
                Manejo herramientas como HTML, CSS, JavaScript, Bootstrap, Git y GitHub, programación orientada a objetos con patrón de diseño MVC
                (modelo-vista-controlador), pruebas funcionales (caja negra, blanca y gris) y documentación técnica.
            </p>
        </div>

        <div class="div-about-me">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#77c09c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M9 12l2 2l4 -4" /></svg>
            <p class="text-about-me"> 
                Soy proactiva, me adapto fácilmente a diferentes entornos de trabajo. <span class="span-about">Me motiva el aprendizaje constante y trabajar en equipo para construir soluciones efectivas y bien presentadas</span>.
            </p>
        </div>
    </section>
</template>

<style scoped>

.section-about-me{
    background-color: #4a1942;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 100vh;
    font-family: "Quicksand", sans-serif;
    padding: 90px;
}

.title-about-me{
    color: white;
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 40px;
    

}
.span-about {
    color: #93BEA9;
}

.text-about-me{
    color: white;
    font-size: 1rem;
}

.div-about-me{
    display: flex;
    gap: 10px;
}



@media (max-width: 426px) {
  .title-about-me {
      font-size: 2rem;
  }

  .section-about-me{
    padding: 40px 50px;
  }
}

</style>
