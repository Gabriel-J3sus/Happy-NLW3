import { NextFunction, Request, Response } from "express";

const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

export default (request: Request, response: Response, next: NextFunction) => {
    const authHeader = request.headers.authorization;

    if (!authHeader)
        return response.status(401).send({ error: 'No token provided' });
    

    const parts = authHeader.split(' ');

    const [ scheme, token ] = parts;

    if (!/^Bearer$/i.test(scheme)) 
        return response.status(401).send({ error: 'Token malformatted' });


    jwt.verify(token, authConfig.secret, (error: any) => {
        if (error) return response.status(401).send({ error: 'Token invalid' });

        
        return next();
    })
    
};