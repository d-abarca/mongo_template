'use strict'
const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/index');
var mongoose = require('mongoose');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', 3000);

routes(app);

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/zoo').then(res => {
  app.listen(app.get('port'), res => {
    console.log("App is running on port " + app.get('port'));
  })
}).catch(err => {
  console.log('err', err);
})
