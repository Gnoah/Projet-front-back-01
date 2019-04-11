const express = require('express');
var cors = require('cors');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true }));
app.use(cors());
const router = require('./route/route');
app.listen(8080, function () {
  console.log('server demarer')
})
app.use('/', router);