import { Router } from 'express';
import User from './app/models/User';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.get('/', async (request, response) => {
  const user = await User.create({
    name: 'Mateus Macedo',
    email: 'mateus@macedo.com',
    password_hash: '1235554',
  });
  response.json(user);
});

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

export default routes;
