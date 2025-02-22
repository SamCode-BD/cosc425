const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Bone Database');
});

// Add more routes here

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
// Simulating a simple database using an array
const bones = [
    { id: 1, name: 'Femur', species: 'Human' },
    { id: 2, name: 'Radius', species: 'Human' },
  ];
  
  app.get('/bones', (req, res) => {
    res.json(bones);
  });
  
  app.post('/bones', express.json(), (req, res) => {
    const { name, species } = req.body;
    const newBone = { id: bones.length + 1, name, species };
    bones.push(newBone);
    res.status(201).json(newBone);
  });
  