<template>
    <section id="sobre-mi">
        <div>
            <h1>Sobre <span class="span-about"> mi</span> </h1>
        </div>
        <div>
            <p> 
                Soy <span>tecnóloga en Análisis y Desarrollo de Software</span> con conocimientos en desarrollo backend usando Laravel y PHP,
                creación de APIs RESTful, y manejo de bases de datos relacionales como MySQL y PostgreSQL. Manejo herramientas
                como HTML, CSS, JavaScript, Bootstrap, Git y GitHub, programación orientada a objetos con patrón de diseño MVC
                (modelo-vista-controlador), pruebas funcionales (caja negra, blanca y gris) y documentación técnica.

                Soy proactiva, me adapto fácilmente a diferentes entornos de trabajo. <span>Me motiva el aprendizaje constante y trabajar en equipo para construir soluciones efectivas y bien presentadas</span>.
            </p>
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
.span-about, span{
    color: #93BEA9;
}

p{
    color: white;
    font-size: 1rem;
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
