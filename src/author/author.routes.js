'use strict';

import author from './author.controller';

export default function(app){
    app.route('/author').get(author.findOne);
}

