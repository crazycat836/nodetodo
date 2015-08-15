//route=================
//load todo module
var Todo = require('./models/todo')

//expose routes to app
module.exports = function(app){

//api
//get all todos
app.get('/api/todos', function(req, res) {
        //use mongoose to get all todos form db
        Todo.find(function(err, todos) {
            if (err)
                res.send(err);
            res.json(todos);
        })
    })
    //create todo and redirect to all todo
app.post('/api/todos', function(req, res) {
    //creat todo
    Todo.create({
        text: req.body.text,
        done: false
    }, function(err, todo) {
        if (err)
            res.send(err);
        //get and return all todos
        Todo.find(function(err, todos) {
            if (err)
                res.send(err)
            res.json(todos);
        });
    });
});
//delete todo
app.delete('/api/todos/:todo_id', function(req, res) {
    Todo.remove({
        _id: req.params.todo_id
    }, function(err, todo) {
        if (err)
            res.send(err);

        // get and return all the todos after you create another
        Todo.find(function(err, todos) {
            if (err)
                res.send(err)
            res.json(todos);
        });
    });
});
//application
app.get('*', function(req, res){
    res.sendfile('./public/index.html');// load the single view file
});

};