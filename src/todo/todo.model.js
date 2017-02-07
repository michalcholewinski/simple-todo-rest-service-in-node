'use strict';

import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
    taskName: {
        type: String
    },
    description: {
        type: String
    },
    done: {
        type: Boolean
    }

});

export default mongoose.model('Todo', TodoSchema);