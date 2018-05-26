const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sqlz = require('./../db');
const { router } = require('./router');

const PORT = 3000;
const app = express();
const static = path.join(__dirname, './../static');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(static));
app.use('/api', router);

app.listen(PORT, () => console.log('server is running on port ' + PORT));