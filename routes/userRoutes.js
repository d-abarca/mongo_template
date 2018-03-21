const router = require('express').Router({mergeParams: true});
const userCtrl = require('../controllers/userController');

router.route('/')
  .get(userCtrl.getAll)
  .post(userCtrl.create)

router.route('/:id')
  .get(userCtrl.get)

  module.exports = router;

