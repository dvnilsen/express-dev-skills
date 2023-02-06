const todos = [
  {id: 125223, todo: 'Feed Dogs', done: true},
  {id: 127904, todo: 'Learn Express', done: false},
  {id: 139608, todo: 'Buy Milk', done: false}
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
};

function update(id, updatedTodo) {
  // Copied from getOne (change "return" to "const")
  id = parseInt(id);
  const todos = todos.find(todo => todo.id === id);
  // todo.todo = updatedTodo.todo; <--- ONE way.  There is a BETTER way:
  Object.assign(todo, updatedTodo);
}

function deleteOne(id) {
  id = parseInt(id); // <--- BEST PRACTICE - id in the web address will be a string

  // Find the index we want to delete - findIndex method 
  const idx = todos.findIndex(todo => todo.id === id);
  // SPLICE method removes array elements
  todos.splice(idx, 1);
};

function create(todo) {
  // Add the id
  todo.id = Date.now() % 1000000;
  todo.done = false; 
  todos.push(todo);
};

function getOne(id) {
  id = parseInt(id);
  return todos.find(todo => todo.id === id);
}

function getAll() {
  return todos;
}