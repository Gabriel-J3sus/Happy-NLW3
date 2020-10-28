import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from 'yup';

const { hash, compare } = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

import Register from '../models/Register';


function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
}

export default {
    async index(request: Request, response: Response) { 
        const registersRepository = getRepository(Register);
        
        const registers = await registersRepository.find();
        
        return response.json(registers);
    },

    
    async login(request: Request, response: Response) {
        const { email, password } = request.body;

        const usersRepository = getRepository(Register);
        
        const user = await usersRepository.findOne({ email }).then( password );
        
        if (!user) {
            return response.status(400).send({ error: 'User not found' });
        }
        
        if (!await compare(password, user?.password)) {
            return response.status(400).send({ error: 'Invalid password' });
        }            

        
        response.send({
            user, 
            token: generateToken({ id: user.id }),
        });       
    },
    
    async create(request: Request, response: Response) {
        let { name, email, password } = request.body;
        
        password = await hash(password, 10);

        const registersRepository = getRepository(Register);
        
        const data = {
            name,
            email,
            password,
        };

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().required().email().lowercase(),
            password: Yup.string().required()
        });
        
        await schema.validate(data, {
            abortEarly: false,
        });
        
        const register = registersRepository.create(data);
        
        await registersRepository.save(register);
        
        return response.status(201).send({
            register,
            token: generateToken({ id: register.id }),
        });
    }
}