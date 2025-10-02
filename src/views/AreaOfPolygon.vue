<template>
    <section class="container-ap">
        
        <h1 class="title-text-ap">Area de un <span class="span-text-ap">Poligono</span></h1>
        
        <div class="div-1-ap">
            <div >
                <label for="list" class="label-ap">Selecciona el polígono</label >
                <select name="list" id="list" v-model="polygonSelected" class="info-ap">
                    <option value="">Selecciona el polígono</option>
                    <option value="Triangulo">Triángulo</option>
                    <option value="Cuadrado">Cuadrado</option>
                    <option value="Rectangulo">Rectángulo</option>
                </select>                
            </div>
            <div >
                    <label for="" class="label-ap">Ingrese el lado 1 </label>
                    <input type="text" v-model="dato1" class="info-ap">
            </div>
            <div >
                <label for="" class="label-ap">Ingrese el lado 2 </label>
                <input type="text" v-model="dato2" class="info-ap">
            </div>

            <div class="div-ap">
                <button @click="clean()" class="btn-clean-ap">Limpiar</button>
                <button @click="areaOfPolygon()" class="btn-ap">Calcular</button>
            </div>

            <span v-if="data" class="result-ap">
                El area del {{ polygonSelected }} es: {{ data }}
            </span>
        </div>
            

            
    </section>
</template>

<script>
import axios from 'axios';
export default {
    name: 'AreaOfPolygon',
    data() {
        return {
            polygonSelected: '',
            data: null,    
            dato1:null,
            dato2:null
        }
    },
    methods: {
        areaOfPolygon(){
            axios.get('http://localhost:8000/api/polygon', {
                params: {
                    poligono: this.polygonSelected,
                    dato1: this.dato1,
                    dato2: this.dato2
                }
            })
            .then(response => {
                this.data = response.data.data;
            })
            .catch(error => {
                console.log(error);
            });
            
        },
        clean(){
            this.data = null;
            this.dato1 = null;
            this.dato2 = null;
            this.polygonSelected = '';
        }
        
    }
}
</script>

<style scoped>

.container-ap{
    background-color: rgb(190, 147, 183);
    min-height: 88.6vh;
    font-family: "Quicksand", sans-serif;
    padding: 90px 15px 10px 15px;
}

.title-text-ap .span-text-ap{
    font-size: 38px;
}

.title-text-ap{
    text-align: center;
    color: white;
}
.div-1-ap{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px 16px; 
    max-width: 500px;
    margin: 20px auto;
    background: #f5e6f7;
    padding: 20px;
    border-radius: 10px;
}



.label-ap{
    display: flex;
    font-weight: 500;
    justify-content: center;
}

.info-ap {
    padding: 6px 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
    height: 36px;
    width: 208px;
}

.span-text-ap{
    color: #93BEA9;
}

.btn-ap{
    background-color: #93BEA9;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    width: 100px;

}
.btn-clean-ap{
    border: 2px solid   #93BEA9;
    color:  #93BEA9;
    padding: 10px 20px;
    border-radius: 20px;
    width: 100px;
}

.div-ap{
    display: flex;
    gap: 10px;
}

.result-ap{
    margin-top: 10px;
    font-size: 1.5rem;
    font-weight: 600;
}

</style>