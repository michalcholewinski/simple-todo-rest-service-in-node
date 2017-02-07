'use strict';

import mongoose from 'mongoose';

const AuthorSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    about: {
        type: String
    },
    photo: {
        type: String,
        trim: true
    }

});

export default mongoose.model('Author', AuthorSchema);