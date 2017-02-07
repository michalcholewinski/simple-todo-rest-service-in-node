'use strict';

import dotenv from 'dotenv';

dotenv.config();

const config = Object.freeze({

    //Populate DB with initialData
    seedDB: true,

    server: {
        host: '0.0.0.0',
        port: process.env.NODE_PORT
    },

    mongodb: {
        db_connection_string: `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}`,
        dbOptions: {'user': '', 'pass':''}
    }
});

export default config;


