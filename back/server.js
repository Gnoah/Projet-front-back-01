const express = require('express');
const router = require('./route/route');
var cors = require('cors');
const app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override')); 
app.use(methodOverride('X-Method-Override')); 
app.use(bodyParser.urlencoded({extended: true }));
app.use(cors());
app.listen(8080, function () {
  console.log('server demarer')
})
app.use('/', router);

