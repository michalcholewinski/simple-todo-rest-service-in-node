'use strict';

import wrap from 'co-express';
import Todo from '../todo/todo.model';

const findAll = wrap(function*(req, res) {

    try {
        const todos = yield Todo.find();
        res.json(todos);
    } catch (err) {
        console.log(err.message);
        return res.status(400).send(err.message);
    }

});

const create = wrap(function*(req, res) {
    let todo = new Todo(req.body);
    try {
        yield todo.save();

        res.status(201).json(todo);
    } catch (err) {
        console.log(err.message);
        res.status(409).send(err.message);
    }
});

const update = wrap(function*(req, res) {
    const options = {new: true};
    try {
        const todo = yield Todo.findByIdAndUpdate(req.params.id, req.body, options);
        if (todo) {
            res.status(200).json(todo);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.log(err.message);
        return res.status(500).send(err); //TODO I'm not sure if returning 500 is nice solution (to be improved)
    }
});

const deleteTodo = wrap(function*(req, res) {
    try {
        const removedTodo = yield Todo.findByIdAndRemove(req.params.id);
        res.status(removedTodo ? 200 : 404).json(removedTodo);
    } catch (err) {
        logger.error(err.message);
        return res.status(500).send(err);
    }
});

export default {
    findAll,
    create,
    update,
    deleteTodo
};