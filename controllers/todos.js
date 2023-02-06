const Todo = require('../models/todo');

module.exports = {
  index,
  show,
  new: newTodo, // "new" is a reserved JS word -> give the key "new" a value of our function (we renamed new Todo)
  create,
  delete: deleteTodo,
  edit,
  update
};

function update(req, res) {
  Todo.update(req.params.id, req.body);
  res.redirect(`/todos/${req.params.id}`);
}

function edit(req, res) {
  const todo = Todo.getOne(req.params.id);
  res.render("todos/edit", {
    title: "Edit To-Do",
    todo
  });
}

function deleteTodo(req, res) {
  Todo.deleteOne(req.param.id);
  res.redirect("/todos");
}

function create (req, res) {
  console.log(req.body);
  // Models are responsible for CRUD-ing the date
  Todo.create(req.body);
  // Always do a REDIRECT after changing data
  res.redirect("/todos");
};

function newTodo(req, res) {
  res.render('todos/new', { title: 'New Todo' });
};

function show(req, res) {
  res.render('todos/show', {
    todo: Todo.getOne(req.params.id),
    title: "To-Do Details"
  });
}

function index(req, res) {
  res.render('todos/index', {
    todos: Todo.getAll(),
    title: "All To-Dos"
  });
}