const express = require('express');
const app = express();
//const router = express.Router();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const path = require('path');
const DB = require('./DB');

let create = require('./routes/create');
let info = require('./routes/info');
let update = require('./routes/update');
let del = require('./routes/del');



app.use(bodyParser.json());
app.use('/', create);
app.use('/', info);
app.use('/', update);
app.use('/', del);

app.listen(PORT, () => console.info('Server has started on', PORT));




