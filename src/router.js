// const { Router } = require('express');
import { Router } from "express";
import multer from 'multer';
import multerConfig from './config/multer.js';
import UserController from "./app/controllers/UserController.js";
import SessionController from "./app/controllers/SessionController.js";
import FileController from "./app/controllers/FileController.js";

import authMiddleware from "./app/middlewares/auth.js";
// import User from './app/models/User.js';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store)
routes.post('/session', SessionController.store)

// Rotas autenticadas
routes.use(authMiddleware)
routes.put('/users', UserController.update)

//Upload de arquivos
routes.post('/files', upload.single('file'), FileController.store );

//antes teste para inserir dados no banco pela primeira vez
/* routes.get('/', async (req, res) => {
    const user = await User.create({
        name: 'fabiano',
        email: 'fabiano@gmail.com',
        password_hash: '1234567890',
    });
    return res.json(user);
}); */

// module.exports = routes;
export default routes;