'use strict';

import config from './config';
import mongoose from 'mongoose';

const createMongooseConnection = callback => {

    mongoose.connect(config.mongodb.db_connection_string, config.mongodb.dbOptions);

    // when successfully connected
    mongoose.connection.on('connected', () => {
        console.log('Mongoose connected to ' + config.mongodb.db_connection_string);
    });

    // if the connection throws an error
    mongoose.connection.on('error', (err) => {
        console.log('Mongoose connection error: ' + err);
    });

    // when the connection is disconnected
    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose disconnected');
    });

    // when the connection is open
    mongoose.connection.once('open', () => {
        if (callback && typeof(callback) === 'function') {
            callback();
        }
    });

    // if the Node process ends, close the Mongoose connection
    process.on('SIGINT', () => {
        mongoose.connection.close(function () {
            console.log('Mongoose disconnected through app termination');
            process.exit(0);
        });
    });
};

export default createMongooseConnection;