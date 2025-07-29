<template>
  <section>
      <div>
          <h1>Mis <span class="span-certifications"> certificaciones</span> </h1>
      </div>
      <div class="div-certifications">
        <ul class="timeline">
          <li class="timeline-event" v-for="certification in certifications" :key="certification.name">
            <label class="timeline-event-icon"></label>
            <div class="timeline-event-copy">
              <p class="timeline-event-thumbnail">{{certification.date}}</p>
              
              <div :class="certification.important ? 'div-important' : ''">
                <h3 :class="certification.important ? 'h3-important' : ''">{{ certification.name }}</h3>
                <img src="../assets/images/ganar.png" alt="image.png" class="img-ganar" v-if="certification.important">
              </div>
              
              <h4>{{ certification.institution }}</h4>
              <a :href="certification.link" target="_blank">Ver certificado</a>
              </div>
          </li>
        </ul>
      </div>
  </section>
</template>

<script>
export default {
  name: 'MyCertifications',
  data() {
    return {
      certifications: [
        {
          name: 'Curso de ChatGPT',
          institution: 'Platzi',
          date: '18 de marzo, 2025',
          link: 'https://platzi.com/p/shelsyangelik/curso/9969-course/diploma/detalle/',
          important: false,
        },
        {
          name: 'Curso de API REST con Laravel',
          institution: 'Platzi',
          date: '7 de noviembre, 2024',
          link: 'https://platzi.com/p/shelsyangelik/curso/2185-course/diploma/detalle/',
          important: false,
        },
        {
          name: 'Curso de Introducción a Laravel 9',
          institution: 'Platzi',
          date: '28 de octubre, 2024',
          link: 'https://platzi.com/p/shelsyangelik/curso/3039-course/diploma/detalle/',
          important: false,
        },
        {
          name: 'Curso de SQL y MySQL',
          institution: 'Platzi',
          date: '6 de agosto, 2024',
          link: 'https://platzi.com/p/shelsyangelik/curso/1272-course/diploma/detalle/',
          important: false,
        },
        {
          name: 'Tecnologo en Analisis y Desarrollo de Software',
          institution: 'Sena',
          date: '29 de noviembre, 2024',
          link: 'https://certificados.sena.edu.co/CertificadoDigital/com.sena.consultacer',
          important: true,
        },
        {
          name: 'Curso de Manipulación del DOM',
          institution: 'Platzi',
          date: '18 de noviembre, 2022',
          link: 'https://platzi.com/p/shelsyangelik/curso/2193-course/diploma/detalle/',
          important: false,
        },
        {
          name: 'Fundamentos de Ingeniería de Software',
          institution: 'Platzi',
          date: '20 de agosto, 2022',
          link: 'https://platzi.com/p/shelsyangelik/curso/2193-course/diploma/detalle/',
          important: false,
        },
        {
          name: 'Curso de Fundamentos de Pruebas de Software',
          institution: 'Platzi',
          date: '16 de abril, 2022',
          link: 'https://platzi.com/p/shelsyangelik/curso/1421-course/diploma/detalle/',
          important: false,
        },
        {
          name: 'Curso Definitivo de HTML y CSS',
          institution: 'Platzi',
          date: '17 de marzo, 2022',
          link: 'https://platzi.com/p/shelsyangelik/curso/2008-course/diploma/detalle/',
          important: false,
        },
        {
          name: 'Curso de Asincronismo con JavaScript 2019',
          institution: 'Platzi',
          date: ' 8 de febrero, 2022',
          link: 'https://platzi.com/p/shelsyangelik/curso/1789-course/diploma/detalle/',
          important: false,
        },
        {
          name: 'Curso de Fundamentos de Pruebas de Software',
          institution: 'Platzi',
          date: '16 de abril, 2022',
          link: 'https://platzi.com/p/shelsyangelik/curso/1421-course/diploma/detalle/',
          important: false,
        },
        
      ]
    }
  }
}
</script>

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
.span-certifications, span{
  color: #93BEA9;
}

p{
  color: white;
  font-size: 1rem;
}

.h3-important{
  font-weight: bold;
}

li{
  max-width: 90vw;
}

.timeline {
  margin: 4em auto;
  position: relative;
  max-width: 46em;
}

.timeline-event::marker{
  color: white;
}

.timeline:before {
  background-color: white;
  content: '';
  margin-left: -1px;
  position: absolute;
  top: 0;
  left: 2em;
  width: 2px;
  height: 100%;
}

.timeline-event {
  position: relative;
}

.timeline-event:hover .timeline-event-icon {
  transform: rotate(-45deg);
  background-color: #4a1942;
}

.timeline-event:hover .timeline-event-thumbnail {
  box-shadow: inset 40em 0 0 0 #4a1942;
}

.timeline-event-copy {
  padding: 2em;
  position: relative;
  top: -1.875em;
  left: 4em;
  width: 80%;
}

.timeline-event-copy h3 {
  font-size: 1.5em;
}

.timeline-event-copy h4 {
  font-size: 1em;
  margin-bottom: 0.5em;
}

.timeline-event-copy strong {
  font-weight: 700;
}

.timeline-event-copy p:not(.timeline-event-thumbnail) {
  padding-bottom: 1.2em;
}

.timeline-event-icon {
  transition: transform 0.2s ease-in;
  transform: rotate(45deg);
  background-color: #93BEA9;
  outline: 10px solid white;
  display: block;
  margin: 0.5em 0.5em 0.5em -0.5em;
  position: absolute;
  top: 0;
  left: 2em;
  width: 1em;
  height: 1em;
}

.timeline-event-thumbnail {
  transition: box-shadow 0.5s ease-in 0.1s;
  color: white;
  font-size: 0.75em;
  background-color: #93BEA9;
  box-shadow: inset 0 0 0 0em  #4a1942;
  display: inline-block;
  margin-bottom: 1.2em;
  padding: 0.25em 1em 0.2em 1em;
}

a{
  color: white;
  font-size: 1rem;
}

.img-ganar{
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
}


.div-important{
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

@media (max-width: 768px) {
  section {
    padding: 40px 20px;
  }
}

@media (max-width: 425px) {
  h1 {
      font-size: 2rem;
  }

  .timeline-event-copy h3 {
  font-size: 1em;
}

  section{
    padding: 40px 10px;
  }

  .img-ganar{
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
  }
  
  a{
    color: white;
    font-size: 0.8rem;
  }

  .div-certifications{
    padding: 0px 10px;
  }
}

@media (max-width: 320px) {

  .img-ganar{
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
  }
  a{
    font-size: 0.6rem;
  }
}




</style>
