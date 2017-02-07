'use strict';

import todo from './todo.controller';

export default function (app){
    app.route('/todos')
        .post(todo.create)
        .get(todo.findAll);


    app.route('/todos/:id')
        .put(todo.update)
        .delete(todo.deleteTodo);
}