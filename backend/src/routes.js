const express = require('express');

const OngController = require('./controllers/OngController')
const IncidentsController = require('./controllers/IncidentsController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const connection =require('./database/connection');


const routes = express.Router();

routes.post('/sessions',SessionController.create)

routes.get('/ongs',OngController.index);
routes.post('/ongs', OngController.create);
routes.delete('/ongs/:id', OngController.delete);

routes.get('/profile',ProfileController.index)

routes.get('/incidents', IncidentsController.index)
routes.post('/incidents', IncidentsController.create)
routes.delete('/incidents/:id',IncidentsController.delete)

module.exports = routes;