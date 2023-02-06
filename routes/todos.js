var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos');

// All actual paths start with "/todos" <--- DONT FORGET THIS * * * 

// GET /todos
router.get('/', todosCtrl.index);
// * * * GET todos/new <--- Define BEFORE show route (or ":id" will take any name) * * * 
router.get("/new", todosCtrl.new);
// GET /todos/:id
router.get('/:id', todosCtrl.show);
// GET 
router.get("/:id/edit", todosCtrl.edit); // <--- PART 1 - TO EDIT - Have to GET first then PUT (add) new data (below)

// POST to /todos
router.post("/", todosCtrl.create); // <--- "create" function will be coded in Controllers 

// DELETE /todos/:id <-- Don't want to delete ALL to-dos, just one (by id)
router.delete("/:id", todosCtrl.delete);

// PUT
router.put("/:id", todosCtrl.update); // <--- PART 2 - TO EDIT


module.exports = router;
