const express = require('express');
const app = express();

const { port } = require('./config');
const moviesApi = require('./routes/movies.js');

moviesApi(app);

app.listen(port, () => console.log(`Servido en el  http://localhost:${port}`));