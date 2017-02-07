'use strict';

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import helmet from 'helmet';
import config from './config';
import routes from './routes';
import path from 'path';

class Express {
    constructor() {
        this.app = express();
    }

    initMiddleware() {
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(bodyParser.json());
        this.app.use(methodOverride());
        this.app.use(express.static('public'));
    }

    initHelmetHeaders() {
        this.app.use(helmet.frameguard());
        this.app.use(helmet.xssFilter());
        this.app.use(helmet.noSniff());
        this.app.use(helmet.ieNoOpen());
        this.app.use(helmet.hidePoweredBy());
    }

    initCrossDomain() {
        this.app.use(cors());
        this.app.use((req, res, next) => {
            // Website you wish to allow to connect
            res.set('Access-Control-Allow-Origin', '*');
            // Request methods you wish to allow
            res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
            // Request headers you wish to allow
            res.set('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token');
            // Pass to next layer of middleware
            next();
        });
    }

    initErrorRoutes() {
        this.app.use(function (err, req, res, next) {
            if (!err) {
                return next();
            }
            res.sendStatus(500);
        });

        this.app.use(function (req, res) {
            res.sendStatus(404);
        });
    }

    initDB() {
        if (config.seedDB) {
            require('./initialDataLoader');
        }
    }

    init() {
        this.initMiddleware();
        this.initHelmetHeaders();
        this.initCrossDomain();
        routes.init(this.app);
        this.initErrorRoutes();
        this.initDB();


        return this.app;
    }

}

export default new Express();