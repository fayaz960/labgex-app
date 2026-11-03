const express = require('express');
const { version } = require('./package.json');

const app = express();
const PORT = 3000;

const labTests = [
  { id: 1, name: 'Blood Sugar', price: 200 },
  { id: 2, name: 'Thyroid Profile', price: 500 },
  { id: 3, name: 'Vitamin D', price: 800 }
];

app.get('/', (req, res) => {
  res.json({ app: 'LabGex', version: version, status: 'running' });
});

app.get('/tests', (req, res) => {
  res.json(labTests);
});

app.listen(PORT, () => {
  console.log(`LabGex v${version} running on port ${PORT}`);
});
