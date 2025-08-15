<template>
    <div class="container-visit-car">
        <p>Descripcion:</p>
        <!-- descripcion del proyecto -->
        <p>
            <span >{{ showAll ? text : shortText + ' ... '}}</span>
            <a  class="a-show-more text-decoration" @click="showAll = !showAll">
                {{ showAll ? 'ver menos' : 'ver más' }}
            </a> 
        </p>
        <!-- tabla de vehiculos -->
        <div class="table-responsive table-s">
        <div class="d-flex justify-content-between div-title-visit-car">
            <h1 class="title-visit-car">Listado de <span class="span-visit-car">vehiculos</span></h1>
            <div>
                <button type="button" class=" btn-new-car" data-bs-toggle="modal" data-bs-target="#modalCar"  @click="prepareToCreate()">
                    Nuevo vehiculo
                </button>
                <button class="btn-listar" @click="getCars()">Listar</button>
            </div>

        </div>
        <table class="table table-striped p-5">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Placa</th>
                <th scope="col">Tipo de vehiculo</th>
                <th scope="col">Minutos</th>
                <th scope="col">Total a pagar</th>
                <th>Acciones</th>
                </tr>
            </thead>
        <tbody>
                <tr v-for="car, index in cars" :key="car.id">
                    <!-- <th">ooo</th> -->
                    <td>{{ index + 1 }}</td>
                    <td>{{ car.car_plate }}</td>
                    <td>{{ car.type_vehicle.name }}</td>
                    <td>{{ car.total_minutes }}</td>
                    <td>{{ car.value_for_pay }}</td>
                    <td> 
                        
                        <button class="btn-edit-car" @click="setCarToEdit(car)" data-bs-toggle="modal" data-bs-target="#modalCar">
                            Editar
                        </button>
                        <button class="btn-edit-car" @click="car.visits.length > 0  ? carDeparture(car) : carEntry(car)" data-bs-toggle="modal" data-bs-target="#confirmModal">
                            
                            {{car.visits.length > 0  ? 'Salida' : 'Ingreso'}}
                        </button>

                        <button class="btn-delete-car"  @click="confirmDelete(car)" data-bs-toggle="modal" data-bs-target="#confirmModal"> 
                            Eliminar
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>        
        </div>
    </div>
    

<!-- Modal de nuevo vehiculo -->
<div class="modal fade font-family-modal" id="modalCar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">{{isEditing ? 'Editar Vehiculo' : 'Ingrese los datos del nuevo vehiculo' }}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Placa:</label>
            <input 
                type="text" 
                class="form-control" 
                id="recipient-name" 
                v-model="car.car_plate" 
                placeholder="ABC123" 
                required 
                pattern="[A-Z]{3}[0-9]{3}" 
                title="La placa debe tener 3 letras y 3 números, por ejemplo ABC123">
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Tipo de vehiculo:</label>
            <!-- <input type="text" class="form-control" id="recipient-name"> -->
            <select class="form-select" aria-label="Disabled select example" v-model="car.type_vehicle_id" required>
                <option selected>Seleccione un tipo de vehiculo</option>
                <option v-for="vehicleType in vehicleTypes" :key="vehicleType.id" :value="vehicleType.id">
                    {{ vehicleType.name }}
                </option>
            </select>
          
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn-close-car" data-bs-dismiss="modal">Cerrar</button>
        <button @click="submitCar()" type="button" class=" btn-save-car" data-bs-dismiss="modal">{{isEditing ? 'Actualizar' : 'Crear' }}</button>
      </div>
    </div>
  </div>
</div>
        


<!-- Modal de confirmación -->
<div class="modal fade font-family-modal" id="confirmModal" tabindex="-1" aria-labelledby="confirmModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="confirmModalLabel">{{modal.title}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
      </div>
      <div class="modal-body">
        {{ modal.body }}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn-close-car" data-bs-dismiss="modal">Cancelar</button>
        <button @click="modal.func" type="button" class="btn-delete-car2" id="btnConfirmDelete" data-bs-dismiss="modal">
            {{ modal.button }}
        </button>
      </div>
    </div>
  </div>
</div>



</template>

<script>
import axios from 'axios';
/* global Swal */

export default {
    data(){
        return {
            cars: [],
            vehicleTypes: [],
            car: {
                car_plate: null,
                type_vehicle_id: null
            },
            idAEliminar : null,
            isEditing: false,
            text: 'Se desea administrar el acceso de vehículos a un estacionamiento de pago. El estacionamiento no se encuentra automatizado, por lo que existe un empleado encargado de registrar las entradas y salidas de vehículos. Los vehículos se identifican por su número de placa. Cuando un vehículo entra en el estacionamiento el empleado registra su entrada y al salir registra su salida y, en algunos casos, cobra el importe correspondiente por el tiempo de estacionamiento. El importe cobrado depende del tipo de vehículo: Los vehículos oficiales no pagan, pero se registran sus estancias para llevar el control. (Una estancia consiste en una hora de entrada y una de salida) Los residentes pagan a final de mes a razón de MXN$0.05 el minuto. La aplicación irá acumulando el tiempo (en minutos) que han permanecido estacionados. Los no residentes pagan a la salida del estacionamiento a razón de MXN$0.5 por minuto. Se prevé que en el futuro puedan incluirse nuevos tipos de vehículos, por lo que la aplicación desarrollada deberá ser fácilmente extensible en ese aspecto. ',
            showAll: false,
            idCarDeparture: null,
            modalAction: null,

        }
    },
    computed: {
        shortText(){
            return this.text.slice(0, 100);
        },
        modal(){

            switch (this.modalAction) {
                case 'entry':
                    return {
                                title : 'Ingreso de vehiculo',
                                body: '¿Seguro desea registrar el ingreso de este vehiculo?',
                                func: () => this.carEntryConfirm(),
                                button: 'Ingreso'
                            }
                case 'departure':
                    return {
                                title : 'Salida de vehiculo',
                                body: '¿Seguro desea registrar la salida de este vehiculo?',
                                func: () => this.carDepartureConfirm(),
                                button: 'Salida'
                            }
                case 'delete':
                        return {
                                title : 'Eliminación de vehiculo',
                                body: '¿Seguro desea eliminar este vehiculo?',
                                func: () => this.deleteCar(),
                                button: 'Eliminar'
                            }
                            
            }


            return {
                title : null,
                body: null,
                func: () => {}
            }
        }
    },
    mounted(){
        this.getCars(),
        this.getVehiclesTypes()
    },
    methods: {
        getCars(){
            axios.get('http://localhost:8000/api/car')
            .then(response => {
                this.cars = response.data.data;
            })
            .catch(error => {
                console.log(error);
            });
        },
        // submitCar() es el metodo que se encarga de crear o actualizar un vehiculo
        submitCar(){
            if(this.isEditing){
                this.updateCar();
            }else{
                this.createCar();
            }
        },
        createCar(){
            if (!this.car.car_plate || !this.car.type_vehicle_id) {
                Swal.fire({
                    icon: 'error',
                    title: 'Campos vacíos',
                    text: 'Por favor, llena todos los campos'
                });
                return;
            }

            const regex = /^[A-Z]{3}[0-9]{3}$/;
            if (!regex.test(this.car.car_plate)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'La placa debe tener 3 letras y 3 números (ABC123)'
                });
                return;
            }
            
            axios.post('http://localhost:8000/api/car',this.car)
            .then(() => {
                this.isEditing = false;
                // Actualizar los datos
                this.getCars();
                
                // Resetear campos
                this.car = {
                    car_plate: null,
                    type_vehicle_id: null,
                };
                Swal.fire({
                    icon: 'success',
                    title: 'Vehiculo creado correctamente',
                    text: 'El vehiculo ha sido creado correctamente'
                });
                               
            })
            .catch(error => {
                console.log(error.response);
                if(error.response.status === 422){
                    Swal.fire({
                    title: 'Error!',
                    text: 'Ya existe un vehiculo con la misma placa',
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                    })
                }

               
            });
        },
        getVehiclesTypes(){
            axios.get('http://localhost:8000/api/type-vehicle')
            .then(response =>{
                this.vehicleTypes = response.data.data

                
            })
            .catch(error => {
                console.log(error);
            });
        },
        confirmDelete(car){
            this.idAEliminar = car.id;
            this.idCarEntry = null;
            this.modalAction = 'delete';
            //actualiza los datos del car
            this.car = car;
        },
        deleteCar(){
            axios.delete('http://localhost:8000/api/car/' + this.idAEliminar)
            .then(() => {
                // Actualizar la lista de carros
                this.getCars();
                
            })
            .catch(error => {
                console.log(error);
            });
        },
        // Llenar el formulario con los datos del vehiculo a editar
        setCarToEdit(car){
            this.car = car;
            this.isEditing = true;
        },
        // limpiar el formulario y preparar para crear un nuevo vehiculo
        prepareToCreate(){
            this.isEditing = false;
            this.car = {
                car_plate: null,
                type_vehicle_id: null
            };
        },
        updateCar(){
            axios.put('http://localhost:8000/api/car/' + this.car.id, {car_plate: this.car.car_plate, type_vehicle_id : this.car.type_vehicle_id})
            .then(() => {
                this.isEditing = false;
                //limpiamos el formulario
                this.car = {
                    car_plate: null,
                    type_vehicle_id: null
                };
                //actualizar la lista de carros
                this.getCars();
            })
            .catch(error => {
                console.log(error);
            });
        },
        // metodo para registrar el ingreso de un vehiculo|
        carEntry(car){
            this.idCarEntry = car.id;
            this.modalAction = 'entry';
            this.car = car;
        },
        // metodo para confirmar el ingreso de un vehiculo
        carEntryConfirm(){
            axios.post('http://localhost:8000/api/visit', {vehicle_id: this.idCarEntry})
            .then(() => {
                
                this.idCarEntry = null;
                this.getCars();
            })
            .catch(error => {
                console.log(error);
            });
        },
        carDeparture(car){
            this.idCarDeparture = car.id;
            this.modalAction = 'departure';
            this.car = car;
        },
        carDepartureConfirm(){
            let visit = this.car.visits.find(v => v.departure_date == null)
            axios.put('http://localhost:8000/api/visit/' + visit.id)
            .then(() => {
                
                this.idCarDeparture = null;
                this.getCars();
            })
            .catch(error => {
                console.log(error);
            });
        }

    }
}
</script>

<style scoped>

.container-visit-car{
    font-family: "Quicksand", sans-serif;
    background-color: rgb(190, 147, 183);
    min-height: 88.6vh;
    padding: 50px;
}
.font-family-modal{
    font-family: "Quicksand", sans-serif;
}
.title-visit-car .span-visit-car{
    font-size: 38px;
}

.title-visit-car{
    color: white;
    margin-bottom: 20px;
}
.a-show-more{
    cursor: pointer;
    color: white;
}

.btn-listar{
    border: 2px solid   #93BEA9;
    color:  #93BEA9;
    padding: 10px 20px;
    border-radius: 20px;
}
.span-visit-car{
    color: #93BEA9;
}
.btn-close-car{
    border: 2px solid   #93BEA9;
    color:  #93BEA9;
    padding: 10px 20px;
    border-radius: 20px;
}
.btn-close-car:hover, .btn-listar:hover, .btn-new-car:hover, .btn-save-car:hover, .btn-delete-car:hover, .btn-edit-car:hover{
    color: black;
}
.btn-new-car , .btn-save-car, .btn-delete-car2{ 
    background-color: #93BEA9;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    margin-right: 10px;
}

.btn-edit-car{
    border: none;
    background-color: #93BEA9;
    color: white;
    border-radius: 20px;
    height:  20px;
    font-size: 12px;
    margin-right: 10px;
    width: 50px;
}
.btn-delete-car{
    border: none;
    background-color:  #4a1942;
    color: white;
    border-radius: 20px;
    height:  20px;
    font-size: 12px;
}

@media (max-width: 700px) {
    .div-title-visit-car{ 
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 10px;
    }
}

@media (max-width: 347px) {
    .btn-listar{ 
        margin-top: 10px;
    }
}
</style>