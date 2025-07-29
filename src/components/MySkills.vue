<template>
    <section id="skills">
        <div class="div-title">
            <h1>Mis <span class="span-about"> skills</span> </h1>
        </div>
        <div class="div-skills">
           <div class="div-skills-text">
                <i v-for="skill in skills" :key="skill.name" :class="skill.icon" :title="skill.name"></i>
           </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'MySkills',
    data() {
        return {
            skills: [
                { name: 'JavaScript', icon: 'devicon-javascript-plain' },
                { name: 'PHP', icon: 'devicon-php-plain' },
                { name: 'Laravel', icon: 'devicon-laravel-plain' },
                { name: 'MySQL', icon: 'devicon-mysql-plain' },
                { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
                { name: 'HTML5', icon: 'devicon-html5-plain' },
                { name: 'CSS3', icon: 'devicon-css3-plain' },
                { name: 'Git', icon: 'devicon-git-plain' },
                { name: 'GitHub', icon: 'devicon-github-plain' },
                { name: 'Bootstrap', icon: 'devicon-bootstrap-plain' },
                { name: 'Docker', icon: 'devicon-docker-plain' },
                { name: 'Vue.js', icon: 'devicon-vuejs-plain' },
                { name: 'VSCode', icon: 'devicon-vscode-plain' },
                { name: 'Postman', icon: 'devicon-postman-plain' },
                { name: 'Trello', icon: 'devicon-trello-plain' },
            ]
        }
    }
}
</script>

<style scoped>

section{
    background-color: #4a1942;
     min-height: 100vh;
    font-family: "Quicksand", sans-serif;
    padding: 90px;
}

.div-title {
    background-color: #4a1942;
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    color: white;
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 40px;
}

img{
    width: 200px;
}
i{
    color: white;
    font-size: 100px;
    padding: 10px;
}
.span-about,
span {
    color: #93BEA9;
}

p {
    color: white;
    font-size: 1rem;
}

.div-skills-text {
  display: flex;
  flex-wrap: wrap;
  gap: 10px; /* Espacio entre iconos, opcional */
  justify-content: center;
  max-width: 100%; /* Asegura que no se desborde */
}

.div-skills-text i {
  font-size: 40px;
  flex: 0 0 calc(100% / 5 - 45px); /* 5 por fila restando el gap */
  text-align: center;
}

/* Responsive: para pantallas más pequeñas */
@media (max-width: 425px) {
  .div-skills-text i {
    flex: 0 0 20%; /* Aquí puedes cambiar para que ocupen menos o más */
    font-size: 30px;
  }

  h1{
    font-size: 2rem;
  }
}

/* 🔻 MEDIA QUERY PARA PANTALLAS PEQUEÑAS */
@media (max-width: 768px) {
    .div-skills {
        flex-direction: column;
        align-items: center;
    }

    .div-skills-text {
        width: 100%;
    }

    p {
        font-size: 0.95rem;
        text-align: center;
    }

    
    section {
        padding: 40px 20px;
    }
}


</style>
