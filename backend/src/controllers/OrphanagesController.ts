import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { formatToPhone } from 'brazilian-values'
import * as Yup from 'yup';

import Orphanage from '../models/Orphanage';
import orphanageView from '../views/orphanages_view';

export default {
    async index(request: Request, response: Response) {
        const orphanagesRepository = getRepository(Orphanage);
        
        const orphanages = await orphanagesRepository.find({
            relations: ['images']
        });

        return response.json(orphanageView.renderMany(orphanages));
    },

    async show(request: Request, response: Response) {
        const { id } = request.params;

        const orphanagesRepository = getRepository(Orphanage);
        
        const orphanage = await orphanagesRepository.findOneOrFail(id, {
            relations: ['images']
        });

        return response.json(orphanageView.render(orphanage));
    },

    async create(request: Request, response: Response) {        
        const {
            name,
            latitude,
            longitude,
            about,
            telefone,
            instructions,
            opening_hours,
            open_on_weekends,
            pending,
        } = request.body;

        const orphanagesRepository = getRepository(Orphanage);
        
        const requestImages = request.files as Express.Multer.File[];

        const images = requestImages.map(image => {
            return { path: image.filename }
        })
        
        const data = {
            name,
            latitude,
            longitude,
            about,
            telefone,
            instructions,
            opening_hours,
            open_on_weekends: open_on_weekends === 'true',
            pending: pending === 'true',
            images,
        };
        
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            about: Yup.string().required().max(300),
            telefone: Yup.string().required(),
            instructions: Yup.string().required(),
            opening_hours: Yup.string().required(),
            open_on_weekends: Yup.boolean().required(),
            images: Yup.array(
                Yup.object().shape({
                    path: Yup.string().required()
                })
            ),
            pending: Yup.string().required(),
        });

        await schema.validate(data, {
            abortEarly: false,
        });
        
        data.telefone = formatToPhone(data.telefone);
        
        const orphanage = orphanagesRepository.create(data);
        
        await orphanagesRepository.save(orphanage);
        
        return response.status(201).json(orphanage);
    },

    async delete(request: Request, response: Response) {
        const orphanageId = request.params;

        const orphanagesRepository = getRepository(Orphanage);

        await orphanagesRepository.delete(orphanageId);

        return response.status(200).json({ message: 'Deleted' });
    }
};