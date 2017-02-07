'use strict';

import config from './config/config';
import server from './config/express';
import mongoose from './config/mongoose';

const startServer = () => {
    console.log("Starting server...");

    const app = server.init();

    app.listen(config.server.port, ()=> {
        console.log(`Server started on port ${config.server.port}`);
    })
};

mongoose(startServer);