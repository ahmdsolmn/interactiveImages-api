'use strict';

let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');

let app = express();
app.use(cors);
app.use(bodyParser.json());

require('./src/routes')(app);

app.listen(8080);