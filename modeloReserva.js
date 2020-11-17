
const mongoose = require('mongoose');

let esquemaReserva = new mongoose.Schema({

    nombre: {
        type:String,
        required :[true,'el nombre es obligatorio ']
    },
    apellido:{
        type:String,
        required:[true, 'el apellido es obligatorio']
    },
    telefono:{
        type:String,
        required:[true, 'el telefono es obligatorio']
    },
    fechaInicio:{
        type:String,
        required: [true,'El equipo de judador es obligatorio ']
    },
    fechaFinal:{
        type:String,
        required: [true,'El equipo de judador es obligatorio ']
    }, 
    cantidadPersonas:{
        type:String,
        required: [true, 'la cantidad de personas es obligatorio ']
    },
    tipoPaquete:{
        type:String,
        required:[true, 'el tipo de paquete es obligatorio ']
    }
 
});

module.exports = mongoose.model('modeloReserva',esquemaReserva);