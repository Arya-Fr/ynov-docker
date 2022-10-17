'use strict';

const express = require('express');

const PORT = 5000;
const HOST = '127.1.1.1';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});