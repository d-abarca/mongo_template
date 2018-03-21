const router = require('express').Router();
const users = require('./userRoutes');


module.exports = function(app){
 app.use('/users', users)

  app.use(router)
}