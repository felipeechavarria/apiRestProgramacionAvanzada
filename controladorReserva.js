const express = require('express');
const app = express();

//paquete body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const reservaModelo = require('./modeloReserva');

//definicion de operaciones de api 
app.get('/reservas/:id', function (req, res) {

  let resevaId = req.params.id;
  reservaModelo.findById(resevaId, (err, resultado) => {
    if (err) {
      res.status(400).json({
        mensaje: err,
        err: 400
      })
    } else {
      res.json({
        resultado: resultado
      })
    }
  })
});

app.post('/reservas', function (req, res) {
  let datos = req.body;
  let reservaPost = new reservaModelo({
    nombre: datos.nombre,
    apellido: datos.apellido,
    telefono: datos.telefono,
    fechaInicio: datos.fechaInicio,
    fechaFinal: datos.fechaFinal,
    cantidadPersonas: datos.cantidadPersonas,
    tipoPaquete: datos.tipoPaquete

  });
  reservaPost.save((err, resultado) => {
    if (err) {
      res.status(400).json({
        mensaje: err,
        error: 400
      })
    } else {
      res.json({
        mensaje: 'Reserva agregada con exito'
      })
    }
  })

});
app.delete('/reservas/:id', function (req, res) {
  let deleteId = req.params.id;
  reservaModelo.findByIdAndDelete(deleteId, (err, resultado) => {
    if (err) {
      res.status(400).json({
        mensaje: err,
        err: 400
      })
    } else {
      res.json({
        mensaje: "Su Reserva fue eliminada "
      })
    }
  })
});
const underScore = require('underscore')

app.put('/reservas/:id', function (req, res) {
  let datos = req.body;
  let identificador = req.params.id;

  let reservaActualizar = underScore.pick(datos, ["fechaInicio", "fechaFinal", "cantidadPersonas", "tipoPaquete"]);
  reservaModelo.findOneAndUpdate(identificador, reservaActualizar, (err, resultado) => {
    if (err) {
      res.status(400).json({
        ok: false,
        mensaje: err,
        err: 400
      })
    } else {
      res.json({
        ok: true,
        resultado: resultado
      })
    }
  });
});
module.exports = app;