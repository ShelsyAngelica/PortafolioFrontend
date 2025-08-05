<template>
    <section class="section-home">
        <div>
            <h1 class="title-home">Hola, soy Shelsy <span class="span-home"> GARCIA</span> </h1>
            
        </div>
        <div>
            <p class="text-home">Desarrolladora Jr Backend</p>
        </div>
        <div>
            <button class="btn-cv" id="btn-cv">Descargar CV</button>
            <button class="btn-contact" id="btn-contact">Contactame</button>
        </div>
    </section>
</template>

<style scoped>
.section-home{
    background-color: rgb(190, 147, 183);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 72px);
    font-family: "Quicksand", sans-serif;
}

.title-home{
    font-size: 4rem;
    font-weight: 600;
    color: white;
}
.span-home{
    color: #93BEA9;
}
.text-home{
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
}

.btn-cv, .btn-contact{
    font-size: 1rem;
}

.btn-cv{
    background-color: #93BEA9;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    margin-right: 10px;
}
.btn-cv:hover{
    color: black;
}
.btn-contact{
    border: 2px solid   #93BEA9;
    color:  #93BEA9;
    padding: 10px 20px;
    border-radius: 20px;
}
.btn-contact:hover{
    color: black;
}

@media (max-width: 768px) {
    .section-home{
        padding: 0 10px 0 15px;
    }
    .title-home{
        font-size: 2rem;
    }
}

</style>