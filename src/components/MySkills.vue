<template>
    <section class="section-skills" id="skills">
        <div class="div-title">
            <h1 class="title-skills">Mis <span class="span-skills"> skills</span> </h1>
            <p class="p-skills">TECNOLOGÍAS Y HERRAMIENTAS</p>
        </div>
        <div class="div-skills-container">
            <div class="div-skill">
                <div class="div-skill-content">
                    <div class="div-svg svg-backend">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-server w-5 h-5 text-white"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect><rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
                    </div>
                    <span>Backend</span>
                </div>
                <div class="div-skill-content-list">
                    <span>Laravel</span>
                    <span>PHP</span>
                    <span>MySQL</span>
                    <span>APIs RESTful</span>
                    <span>Patron MVC</span>
                </div>
            </div>
    
            <div class="div-skill">
                <div class="div-skill-content">
                    <div class="div-svg svg-database">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database w-5 h-5 text-white"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
                    </div>
                    <span>Base de datos</span>
                </div>
                <div class="div-skill-content-list">
                    <span>PostgreSQL</span>
                    <span>MySQL</span>
                </div>
            </div>
    
            <div class="div-skill">
                <div class="div-skill-content">
                    <div class="div-svg svg-frontend">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe w-5 h-5 text-white"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                    </div>
                    <span>Frontend</span>
                </div>
                <div class="div-skill-content-list">
                    <span>HTML/CSS</span>
                    <span>JavaScript</span>
                    <span>Bootstrap</span>
                    <span>Vue</span>
                </div>
            </div>
    
            <div class="div-skill">
                <div class="div-skill-content">
                    <div class="div-svg svg-tools">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-git-branch w-5 h-5 text-white"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
                    </div>
                    <span>Herramientas</span>
                </div>
                <div class="div-skill-content-list">
                    <span>Git & GitHub</span>
                    <span>Trello</span>
                    <span>Postman</span>
                    <span>Testing</span>
                    <span>Docker</span>
                    <span>Documentación</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'MySkills',
    data() {
        return {
        }
    }
}
</script>

<style scoped>

.section-skills{
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

.div-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
}

.title-skills {
    color: white;
    font-size: 3rem;
    font-weight: 800;
}
.p-skills{
    color: var(--quinary-color);
    font-size: 1rem;
}
.span-skills {
    color: var(--quaternary-color);
}
.div-skills-container{
    display: grid;
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    gap: 20px;
    max-width: 1000px;
    margin: 0 auto;

}

.div-skill{
    border: 1px solid var(--tertiary-color);
    border-radius: 15px;
    min-width: 200px;
    padding: 20px;
    min-height: 180px;
    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
}
.div-skill:hover{
    transform: scale(1.02);
    transition: all 0.3s ease-in-out;
    background-color: rgba(255, 255, 255, 0.105);
}
.div-svg{
    border-radius: 12px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.div-svg svg{
    width: 1.2rem;
    height: 1.2rem;

}
.svg-backend{
    background: linear-gradient(
        135deg,
    var(--quaternary-color),
    color-mix(in srgb, var(--quaternary-color), white 40%)
);
}
.svg-database{
    background: linear-gradient(
        135deg,
    var(--septenary-color),
    color-mix(in srgb, var(--septenary-color), white 40%)
);
}
.svg-frontend{
    background: linear-gradient(
        135deg,
    var(--nonary-color),
    color-mix(in srgb, var(--nonary-color), white 40%)
);
}
.svg-tools{
    background: linear-gradient(
        135deg,
    var(--primary-color),
    color-mix(in srgb, var(--primary-color), white 40%)
);
}
.div-skill-content{
    display: flex;
    align-items: center;
    gap: 10px;
}
.div-skill-content span{
    color: var(--decimal-color);
    font-size: 1.2rem;
    font-weight: 600;
}
.div-skill-content-list{
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 25px;
}
.div-skill-content-list span{
    color: var(--quinary-color);
    font-size: 0.9rem;
    font-weight: 400;
    border: 1px solid var(--quinary-color-light);
    padding: 4px 10px;
    border-radius: 20px;
    background-color: var(--quinary-color-light);
}

@media (max-width: 426px) {

  .title-skills{
    font-size: 2rem;
  }
}

@media (max-width: 768px) {

    .section-skills {
        padding: 40px 20px;
    }
}

@media (max-width: 768px) {

    .div-skills-container{
        grid-template-columns: 1fr;
        max-width: 300px;
        margin: 0 auto;
    }
}
</style>
