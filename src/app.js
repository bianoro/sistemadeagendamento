// const express = require ('express');
import express from 'express';

import path from 'path';

// const routes = require ('./router');
import routes from './router.js';

import './database';

class App{
    constructor(){
        this.server = express();
        this.middlewares();
        this.routes(routes);
    }

    middlewares(){
        this.server.use(express.json());
        this.server.use('/files', express.static(path.resolve(__dirname, '..','tmp','uploads')))

    }

    routes(){
        this.server.use(routes)
    }
}

// module.exports = new App().server;

export default new App().server;