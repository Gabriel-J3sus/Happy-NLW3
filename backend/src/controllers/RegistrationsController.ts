import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from 'yup';
const { hash, compare } = require('bcryptjs');

import Register from '../models/Register';

export default {

    async login(request: Request, response: Response) {
        console.log(request.body)
        const { email, password } = request.body;
        
        const usersRepository = getRepository(Register);
        
        const user = await usersRepository.findOne({ email, password });
        
        if (!user) 
            return response.status(400).send({ error: 'User not found' });
        

        if (!await compare(password, user.password)) 
            return response.status(400).send({ error: 'Invalid password' });
        

        response.send({ user });
        
    },

    async index(request: Request, response: Response) {
        const registersRepository = getRepository(Register);
        
        const registers = await registersRepository.find();
        
        return response.json(registers);
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
            email: Yup.string().required().email(),
            password: Yup.string().required()
        });
        
        await schema.validate(data, {
            abortEarly: false,
        });
        
        const register = registersRepository.create(data);
        
        await registersRepository.save(register);
        
        return response.status(201).json(register);
    }
}