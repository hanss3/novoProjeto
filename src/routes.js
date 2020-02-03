const { Router } = require('express');

const routes = Router();

routes.get('/alunos', (req, res) =>{
  return res.json({ message: 'Lista de alunos'});
});

module.exports = routes;