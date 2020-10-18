import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from 'yup';

import Register from '../models/Register';

export default {
    async index(request: Request, response: Response) {
        const registersRepository = getRepository(Register);

        const registers = await registersRepository.find();

        return response.json(registers);
    },

    async show(request: Request, response: Response) {
        const { id } = request.params;
        
        const registersRepository = getRepository(Register);

        const register = await registersRepository.findOneOrFail(id);

        return response.json(register);
    },



    async create(request: Request, response: Response) {
        const {
            name,
            email,
            password,
        } = request.body;
    
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