'use strict';

import author from '../author/author.routes';

class Routes {
    constructor(){}

    init(app){
        author(app);

        app.use(function(err, req, res, next){
           res.status(500).send(err.stack);
            next();
        });
    }
}

export default new Routes();