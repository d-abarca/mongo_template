const bcrypt = require('bcrypt-nodejs');
const User = require('../models/user');


module.exports = {
  create(req, res) {

    let params = req.body;
    User.findOne({ email: params.email }).then(data => {
      if (data) return res.status(500).send({ text: "Already Exists" })
      bcrypt.hash(params.password, null, null, function (err, pass) {
        User.create({
          name: params.name,
          surname: params.surname,
          email: params.email,
          role: params.role,
          password: pass
        }).then(resp => {
          res.send(resp);
        }).catch(err => {
          res.status(500).send(err);
        })
      });
    }).catch(err => {
      res.status(500).send(err)
    })
  },

  getAll(req, res) {
    User.find().then(data => {
      res.send(data);
    }).catch(err => {
      res.send(err);
    })
  },

  get(req, res) {
    User.findById(req.params.id).then(data => {
      res.send(data);
    }).catch(err => {
      res.send(err);
    })
  }

}