import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (request, response) => {
    const user = await User.create({
        name: 'Carlos',
        email: 'carlos@email.com',
        password_hash: 'assdflkhjkçkhlsdf',
    });

    return response.status(201).json(user);
});

export default routes