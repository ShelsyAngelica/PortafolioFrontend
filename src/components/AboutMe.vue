<template>
    <section class="section-about-me" id="sobre-mi">
        <div class="div-title-about-me">
            <h1 class="title-about-me">Sobre <span class="span-about"> mi</span> </h1>
        </div>
        <div class="div-about-me-content">
            <div class="div-about-me-container">
                <div class="div-subtitle-about-me">
                    <span>Desarrolladora Full Stack</span>
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
            </div>
            <div class="container-code">
                <div class="div-code">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
<pre >
<span class="class1">class</span> <span class="class2">ShelsyGarcia</span> <span class="class4">{</span>
    <span class="class1">public</span> <span class="class4">$role =</span> <span class="class3">'Backend Dev'</span>;
    <span class="class1">public</span> <span class="class4">$stack = [</span>
        <span class="class3">'Laravel'</span>,
        <span class="class3">'PHP'</span>,
        <span class="class3">'MySQL'</span>,
    <span class="class4">];</span>

    <span class="class1">public function</span> <span class="class5">passion</span><span class="class4">()</span>
    <span class="class4">{</span>
    <span class="class1">return</span> <span class="class3">'∞'</span><span class="class4">;</span>
    <span class="class4">}</span>
<span class="class4">}</span>
</pre>
            </div>
        </div>
        
    </section>
        
</template>

<style scoped>

.section-about-me{
    background-image: linear-gradient(
        to bottom right,
        var(--secondary-color),
        var(--secondary-color-light),
        var(--secondary-color)
    );
    min-height: 100vh;
    font-family: "Quicksand", sans-serif;
    padding: 90px;
}
.div-about-me-content{
    display: flex;
    max-width: 64rem;
    margin: 0 auto;
    gap: 40px;
}
.div-about-me-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.div-title-about-me{
    text-align: center;
}

.title-about-me{
    color: var(--decimal-color);
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 40px;
    

}
.span-about {
    color: var(--quaternary-color);
}

.text-about-me{
    color: var(--decimal-color);
    font-size: 1.2rem;
}

.div-about-me{
    display: flex;
    gap: 10px;
}

.div-about-me svg{
    min-width: 25px;
}
.div-subtitle-about-me{
    color: var(--quaternary-color);
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 30px;
    border: 1px solid var(--quaternary-color);
    padding: 6px 20px;
    border-radius: 30px;
    width: fit-content;
    text-align: center;
    background-color: hsl(151, 25%, 66%, 0.1);
}
.container-code{
    background-color: var(--octonary-color);
    padding: 20px;
    border-radius: 10px;
    width: 100%;
    max-width: 320px;
    margin: 0 auto;
    max-height: 400px;

}
.div-code{
    display: flex;
    gap: 8px;
    margin-bottom: 15px;
}

.div-code div:nth-child(1){
    background-color: rgba(237, 97, 97, 0.771);
    width: 14px;
    height: 14px;
    border-radius: 50%;
}

.div-code div:nth-child(2){
    background-color: var(--septenary-color);
    width: 14px;
    height: 14px;
    border-radius: 50%;
}

.div-code div:nth-child(3){
    background-color: rgba(45, 178, 45, 0.869);
    width: 14px;
    height: 14px;
    border-radius: 50%;
}
.class1{
    color: var(--primary-color);
}
.class2{
    color: var(--quaternary-color);
}
.class3{
    color: var(--septenary-color);
}
.class4{
    color: var(--quinary-color);
}
.class5{
    color: var(--nonary-color);
}
@media (max-width: 890px) {
  .div-about-me-content{
    flex-direction: column;
  }
  .text-about-me{
    font-size: 1rem;
}
  .section-about-me{
    padding: 40px 30px;
    flex-direction: column;
  }
}

@media (max-width: 426px) {
  .title-about-me {
      font-size: 2rem;
  }
}
</style>
