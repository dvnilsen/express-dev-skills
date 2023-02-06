var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos');

// All actual paths start with "/todos" <--- DONT FORGET THIS * * * 

// GET /todos
router.get('/', skillsCtrl.index);
// * * * GET todos/new <--- Define BEFORE show route (or ":id" will take any name) * * * 
router.get('/new', skillsCtrl.new);
// GET /todos/:id
router.get('/:id', skillsCtrl.show);
// GET 
router.get('/:id/edit', skillsCtrl.edit); // <--- PART 1 - TO EDIT - Have to GET first then PUT (add) new data (below)

// POST to /todos
router.post('/', skillsCtrl.create); // <--- "create" function will be coded in Controllers 

// DELETE /todos/:id <-- Don't want to delete ALL to-dos, just one (by id)
router.delete('/:id', skillsCtrl.delete);

// PUT
router.put('/:id', skillsCtrl.update); // <--- PART 2 - TO EDIT


module.exports = router;
