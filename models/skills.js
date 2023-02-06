const skills = [
  {id: 125223, skill: 'Javascript', learned: true},
  {id: 127904, skill: 'CSS', learned: true},
  {id: 139608, skill: 'Mongoose', learned: false},
]

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
}

function getAll() {
  return skills;
}

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.learned = false; 
  skills.push(skill); 
}

function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}

function update(id, updatedSkill) {
  id = parseInt(id);
  const skill = skills.find(skill => skill.id === id);
  Object.assign(skill, updatedSkill);
}