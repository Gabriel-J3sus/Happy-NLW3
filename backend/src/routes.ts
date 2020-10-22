import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';


import RegistrationsController from './controllers/RegistrationsController';

const routes = Router();
const upload = multer(uploadConfig);

//MVC

//Model
//View
//Controllers

//Controllers: 
    //index, show, create, update, delete
    

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

routes.get('/register', RegistrationsController.index);
routes.post('/register', RegistrationsController.create);
routes.post('/authenticate', RegistrationsController.login);

//Rota - conjunto
//Recurso - usuário

//Métodos HTTP - GET, POST, PUT, DELETE
//Parâmetros

//GET - Buscar uma informação (Lista, item)
//POST - Criando uma informação
//PUT - Editando uma informação
//DELETE - Deletando uma informação

export default routes;