const express = require('express');
const apiRoute = require('../routes/api');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//Server nodemon server.js
 //extended true zorgt ervoor dat je alles in object kan oproepen

app.use('/api',apiRoute);
app.listen('3000');
module.exports = app;
