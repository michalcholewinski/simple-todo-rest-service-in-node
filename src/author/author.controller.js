'use strict';

import Author from './author.model';
import wrap from 'co-express';

const findOne =  wrap(function* (req, res) {

    try {
        const author = yield Author.findOne();
        res.json(author);
    } catch (err) {
        return res.status(400).send(err.message);
    }
});

export default {
    findOne
};