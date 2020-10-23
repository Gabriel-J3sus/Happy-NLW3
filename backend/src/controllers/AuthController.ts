import { Request, Response } from 'express';

export default {
    async auth(request: Request, response: Response) {
        response.send({ ok: true });
    }
}