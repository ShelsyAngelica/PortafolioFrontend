<template>
    <section class="section-skills" id="skills">
        <div class="div-title">
            <h1 class="title-skills">Mis <span class="span-skills"> skills</span> </h1>
        </div>
        <div class="div-skills">
           <div class="div-skills-text">
                <i v-for="skill in skills" :key="skill.name" :class="skill.icon" :title="skill.name" class="i-skills"></i>
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

.section-skills{
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

.title-skills {
    color: white;
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 40px;
}

.i-skills{
    color: white;
    font-size: 100px;
    padding: 10px;
}
.span-skills {
    color: #93BEA9;
}

.div-skills-text {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  max-width: 100%; 
}

.div-skills-text i {
  font-size: 40px;
  flex: 0 0 calc(100% / 5 - 45px); 
  text-align: center;
}

@media (max-width: 426px) {
  .div-skills-text i {
    flex: 0 0 20%; 
    font-size: 30px;
  }

  .title-skills{
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
    .div-skills {
        flex-direction: column;
        align-items: center;
    }

    .div-skills-text {
        width: 100%;
    }

    .section-skills {
        padding: 40px 20px;
    }
}


</style>
