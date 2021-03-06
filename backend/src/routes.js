const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate')

const OngController = require('./controller/Ong');
const IncidentController = require('./controller/Incident');
const ProfileController = require('./controller/Profile');
const SessionController = require('./controller/Session');

const routes = express.Router();

routes.get('/ongs', OngController.getAll)
routes.get('/incidents', IncidentController.getAll)
routes.get('/some-incidents', IncidentController.getAllPaginated)
routes.get('/profile', ProfileController.getIncidents)

routes.post('/ongs',  OngController.create) 
routes.post('/incidents', IncidentController.create) 
routes.put('/incidents/:id', IncidentController.change) 
routes.post('/session', SessionController.create)

routes.delete('/ongs/:id', OngController.delete)
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes;