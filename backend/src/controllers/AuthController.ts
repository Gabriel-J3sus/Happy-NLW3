import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/User';
import users_view from '../views/users_view';

export default {
    async authenticate(request: Request, response: Response) {
        const { email, password } = request.body;
        
        const data = { email, password }

        const schema = Yup.object().shape({
            email: Yup.string().email().required(), 
            password: Yup.string().required(), 
        });

        await schema.validate(data, {
            abortEarly: false
        });

        const usersRepository = getRepository(User);

        const user = await usersRepository.findOne({ email }); //if exists

        if (!user) {
            return response.status(401).json({ error: 'invalid email' });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            return response.status(401).json({ error: 'invalid password' });
        }

        const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1d' }); //Creating Token

        return response.json([ users_view.render(user), token ])
        
    }
}