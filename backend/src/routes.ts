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
    
    routes.get('/orphanages', OrphanagesController.index); //show all orphanages
    routes.get('/orphanages/:id', OrphanagesController.show); //search for an orphanage
    routes.post('/orphanages', upload.array('images'), OrphanagesController.create); //create orphanage
    routes.delete('/orphanage/:id', OrphanagesController.delete); //delete orphanage
    
    routes.post('/users', UsersController.create);  //create user
    routes.get('/usersList', UsersController.index); //show users
    
    routes.post('/auth', AuthController.authenticate); //login
    routes.post('/auth/forgot_password', AuthController.forgot_password); //send emails
    routes.post('/auth/reset_password', AuthController.reset_password); //reset password
    
    routes.post('/token', authMiddleware, UsersController.show) //first authentication
    
    routes.post('/notPending', authMiddleware, UsersController.notPending); //search for not pending orphanages
    routes.post('/pending', authMiddleware, UsersController.pending); //search for pending orphanages
    


//Rota - conjunto
//Recurso - usuário

//Métodos HTTP - GET, POST, PUT, DELETE
//Parâmetros

//GET - Buscar uma informação (Lista, item)
//POST - Criando uma informação
//PUT - Editando uma informação
//DELETE - Deletando uma informação

export default routes;