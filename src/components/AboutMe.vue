<template>
    <section class="section-about-me" id="sobre-mi">
        <div>
            <h1 class="title-about-me">Sobre <span class="span-about"> mi</span> </h1>
        </div>
        <div>
            <p class="text-about-me"> 
                Soy <span class="span-about">tecnóloga en Análisis y Desarrollo de Software</span> con conocimientos en desarrollo backend usando Laravel y PHP,
                creación de APIs RESTful, y manejo de bases de datos relacionales como MySQL y PostgreSQL. Manejo herramientas
                como HTML, CSS, JavaScript, Bootstrap, Git y GitHub, programación orientada a objetos con patrón de diseño MVC
                (modelo-vista-controlador), pruebas funcionales (caja negra, blanca y gris) y documentación técnica.

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

@media (max-width: 426px) {
  .title-about-me {
      font-size: 2rem;
  }

  .section-about-me{
    padding: 40px 50px;
  }
}

</style>
