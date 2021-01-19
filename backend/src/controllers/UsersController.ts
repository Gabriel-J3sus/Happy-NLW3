import { Request, Response } from 'express'; 
import { getRepository } from 'typeorm';
import crypto from 'crypto';
import * as Yup from 'yup';
import jwt from 'jsonwebtoken';

import User from '../models/User';
import users_view from '../views/users_view';

export default {
    async index (request: Request, response: Response) {
        const usersRepository = getRepository(User);

        const users = await usersRepository.find();

        return response.status(200).json(users);
    },

    async show(request: Request, response: Response) {
        const userId = request.userId;

        const usersRepository = getRepository(User);

        const user = await usersRepository.findOneOrFail(userId);
        
        return response.json(users_view.render(user));
    },

    async create(request: Request, response: Response) {
        const { name, email, password } = request.body;

        const data = { name, email, password }

        const schema = Yup.object().shape({
            name: Yup.string().required(), 
            email: Yup.string().email().required(), 
            password: Yup.string().required(),
        });

        await schema.validate(data, {
            abortEarly: false
        });
        
        const usersRepository = getRepository(User);

        const userExists = await usersRepository.findOne({ where: { email } }); //if this email exists

        if (userExists) {
            return response.status(409).json({ error: 'User already exists'});
        }

        const id = crypto.randomBytes(8).toString('hex');

        const user = usersRepository.create({ id, name, email, password });

        await usersRepository.save(user);

        const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1d' }); //Creating token

        return response.status(201).json([ users_view.render(user), token ])
    },
}