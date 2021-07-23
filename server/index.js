const path = require('path');
const express = require('express'); // npm installed

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.listen(4000);
