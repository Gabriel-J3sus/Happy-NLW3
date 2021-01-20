import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import mailer from '../modules/mailer';

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
        
    },

    async forgot_password(request: Request, response: Response) {
        const { email } = request.body;
        
        try {

            const data = { email };

            const schema = Yup.object().shape({
                email: Yup.string().email().required(), 
            });

            await schema.validate(data, {
                abortEarly: false
            });

            const usersRepository = getRepository(User);

            const user = await usersRepository.findOne({ email });

            if (!user) {
                return response.status(401).json({ error: 'user not found' });
            }

            const token = crypto.randomBytes(20).toString('hex');

            const now = new Date();
            now.setHours(now.getHours() + 1); //1 hour to expire

            user.passwordResetToken = token;
            user.passwordResetExpires = now;

            await usersRepository.save(user);

            mailer.sendMail({
                to: email,
                from: 'gabr.esus001@gmail.com',
                subject: "Happy - Forgot Password",
                html: `<p>Você esqueceu sua senha? Não tem problema, <a href="localhost:3000/new_password/${email}/${token}">acesse</a> para trocar sua senha</p>`
                
            }, (err) => {
                if (err) {
                    
                    return response.status(400).json({ error: 'Cannot send forgot password email' });
                }
            })
            
            return response.status(200);

        } catch (err) {
            response.status(400).json({ error: 'Error on forgot password, try again' });
        }
    },

    async reset_password(request: Request, response: Response) {
        const { email, token, password } = request.body;

        try {
            const data = { email, token, password }

            const schema = Yup.object().shape({
                email: Yup.string().email().required(), 
                token: Yup.string().required(),
                password: Yup.string().required(), 
            });

            await schema.validate(data, {
                abortEarly: false
            });

            const usersRepository = getRepository(User);

            const user = await usersRepository.findOne({ email })
            
            if (!user) {
                return response.status(400).json({ error: 'User not found' });
            } 

            if (token !== user.passwordResetToken) {
                return response.status(400).json({ error: 'Token invalid' });
            }

            const now = new Date();

            if (now > user.passwordResetExpires) {
                return response.status(400).json({ error: 'Token expired, generate a new one' });
            }

            user.password = password;

            await usersRepository.save(user);

            response.status(201).json({ message: 'ok' });
        } catch (err) {
            return response.status(400).json({ error: 'Cannot reset password, try again' })
        }
    }
}