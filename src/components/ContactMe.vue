    <template>
    <section class="section-contact-me" id="contacto">
        <div class="div-contact-me">
            <h1 class="title-contact-me">Contacta<span class="span-contact-me">me</span> </h1>
            <p class="text-white text-center">¿Tienes un proyecto en mente? ¡Hablemos!</p>
        </div>
        <div class="card-contact-me">
            <div>
                <p class="title-card">Conectemos</p>

                <div class="card-contact-me-item all">
                    <div class="svg-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail w-6 h-6 text-white"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                    </div>
                    <div class="text-item">
                        <span>Email</span>
                        <span class="text-contact-me">Shelsy.a.garcia@gmail.com</span>
                    </div>
                </div>
                
                <div class="card-contact-me-item all">
                    <a class="svg-item" href="https://github.com/ShelsyAngelica" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github w-6 h-6 text-white"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                    </a>
                    <div class="text-item">
                        <span>GitHub</span>
                        <span class="text-contact-me">ShelsyAngelica</span>
                    </div>
                </div>   
                <div class="card-contact-me-item all">
                    <a class="svg-item" href="https://www.linkedin.com/in/shelsy-garcia/" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin w-6 h-6 text-white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <div  class="text-item">
                        <span>LinkedIn</span>
                        <span class="text-contact-me">linkedin.com/in/shelsy-garcia</span>
                    </div>
                </div>
        </div>

        <div class="form-contact all">
            <p class="title-card title-form-contact ">Envíame un mensaje</p>
            <form action="https://formspree.io/f/mwvwjzpd" @submit.prevent="enviarFormulario" class="form-contact-me" id="form-contact-me">
                <input type="text" name="name" placeholder="Tu nombre" class="input-contact-me all">
                <input type="email" name="email" placeholder="Tu email" class="input-contact-me all">
                <textarea name="message" id="" placeholder="Tu mensaje" class="input-contact-me all"></textarea>
                <button type="submit" class="button-send-message">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square w-5 h-5 mr-2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    Enviar mensaje
                </button>
            </form>
        </div>
    </div>
    </section>
</template>

<style scoped>

.section-contact-me{
    background-color: var(--secondary-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 60vh;
    font-family: "Quicksand", sans-serif;
    padding: 90px 20px;
    justify-content: space-between;
}

.div-contact-me{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.title-contact-me{
    color: white;
    font-size: 3rem;
    font-weight: 600;
    /* margin-bottom: 40px; */
}
.span-contact-me{
    color: var(--quaternary-color);
}

.title-card{
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
}

.text-contact-me{
    color: white;
    font-size: 1rem;
}

.card-contact-me{
    display: grid;
    gap: 50px;
    width: 100%;
    max-width: 1100px;
    margin-top: 50px;

}

.img-project{
    width:30px;
    margin-bottom: 10px;
}

.img-project-mail{
    width: 40px;
}

.form-contact-me{
    display: flex;
    flex-direction: column;
    gap: 15px;
}
.i-github{
    font-size: 2rem;
    color: white;
}

.icon{
    text-decoration: none;
    margin-right: 10px;
}

.svg-item{
    background-color: var(--quaternary-color);
    border-radius: 50%;
    padding: 5px;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.text-item{
    display: flex;
    flex-direction: column;
}

.text-item span:nth-child(1){
    color: var(--quinary-color);
    font-size: 14px;
}
.all{
    border: 1px solid hsla(151, 25%, 66%, 0.3);
    border-radius: 18px;
    padding: 15px;
}
.card-contact-me-item{
    background-color: var(--tertiary-color);
    display: flex;
    margin-bottom: 15px;
    gap: 18px;
    align-items: center;
}
.form-contact{
    background-color: var(--tertiary-color);
    display: flex;
    flex-direction: column;
    gap: 15px;
}
.input-contact-me{
    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(6px);
}
.input-contact-me::placeholder{
    color: var(--quinary-color);
}
.title-form-contact{
    margin-top: 14px;
}

.button-send-message{
    background-color: var(--quaternary-color);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 15px;
    margin-right: 10px;
}
@media (max-width: 700px) {
    .card-contact-me{
        align-items: center;
        justify-content: center;
        gap: 50px;
        margin-top: 50px;
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

@media (min-width: 768px) {
    .card-contact-me{
        grid-template-columns: repeat(2,  minmax(0, 1fr));
    }
}

</style>

<script>
/* global Swal */

export default {
    methods: {
        async enviarFormulario(e){

            const form = e.target;
            const data = new FormData(form);
            const response = await fetch(form.action,{
                method: "POST",
                body: data,
                headers: {
                    Accept: "aplication/json"
                }
            });
        
            if(response.ok){
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'success',
                    title: '💖 Mensaje enviado',
                    text: 'Te responderé pronto ',
                    showConfirmButton: false,
                    timer: 3000,
                    background: '#be93b7',
                    color: '#fff'
                });
                form.reset();
            }
            else{
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'error',
                    title: '¡Error al enviar el mensaje!',
                    text: 'Por favor, intenta nuevamente',
                    showConfirmButton: false,
                    timer: 3000,
                    background: '#93BEA9',
                    color: '#fff'
                });
            }
        }
    }
}
</script>