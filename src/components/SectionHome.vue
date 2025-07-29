<template>
    <section>
        <div>
            <h1>Hola, soy Shelsy <span> GARCIA</span> </h1>
            
        </div>
        <div>
            <p>Desarrolladora Jr Backend</p>
        </div>
        <div>
            <button id="btn-cv">Descargar CV</button>
            <button id="btn-contact">Contactame</button>
        </div>
    </section>
</template>

<style scoped>
section{
    background-color: rgb(190, 147, 183);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 72px);
    font-family: "Quicksand", sans-serif;
}

h1{
    font-size: 4rem;
    font-weight: 600;
    color: white;
}
span{
    color: #93BEA9;
}
p{
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
}

button{
    font-size: 1rem;
}

#btn-cv{
    background-color: #93BEA9;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    margin-right: 10px;
}
#btn-cv:hover{
    color: black;
}
#btn-contact{
    border: 2px solid   #93BEA9;
    color:  #93BEA9;
    padding: 10px 20px;
    border-radius: 20px;
}
#btn-contact:hover{
    color: black;
}

@media (max-width: 768px) {
    section{
        padding: 0 10px 0 15px;
    }
    h1{
        font-size: 2rem;
    }
}

</style>