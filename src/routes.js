import { Router } from 'express';

const routes = new Router();

routes.get('/', (request, response) =>
  response.json({ message: 'Hello RockeatSeat!' })
);

export default routes;
