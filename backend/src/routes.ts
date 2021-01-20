import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

import UsersController from './controllers/UsersController';
import AuthController from './controllers/AuthController';
import authMiddleware from './middlewares/authMiddleware';

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

routes.post('/users', UsersController.create);
routes.get('/usersList', UsersController.index);
routes.post('/auth', AuthController.authenticate);
routes.post('/auth/forgot_password', AuthController.forgot_password);
routes.post('/auth/reset_password', AuthController.reset_password);

routes.post('/token', authMiddleware, UsersController.show);


//Rota - conjunto
//Recurso - usuário

//Métodos HTTP - GET, POST, PUT, DELETE
//Parâmetros

//GET - Buscar uma informação (Lista, item)
//POST - Criando uma informação
//PUT - Editando uma informação
//DELETE - Deletando uma informação

export default routes;