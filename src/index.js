const express = require('express');

const app = express();

app.get('/', (req, res) =>{
  return res.json({message:'Daniel brabo'})
});

app.listen(3333);