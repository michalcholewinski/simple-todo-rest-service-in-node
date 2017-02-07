'use strict';

class Routes {
    constructor(){}

    init(app){


        app.use(function(err, req, res, next){
           res.status(500).send(err.stack);
            next();
        });
    }
}

export default new Routes();