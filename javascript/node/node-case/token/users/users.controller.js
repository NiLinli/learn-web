const express = require('express');
const router = express.Router();

const userService = require('./users.service');
const authorize = require('middleware/authorize');
const Roles = require('utils/roles');


// router
router.post('authenticate', (req, res, next) => {
  userService.authenticate(req.body)
    .then(user => {
      return user ? res.json(user) :
        res.status(400).json({ message: 'Username or password is incorrect' });
    })
    .catch(err => next(err));
});

router.get('/', (req, res, next) => {
  userService.getAll()
    .then(users => res.json(users))
    .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
  const currentUser = req.user;
  const id = parseInt(req.params.id);

  // 仅允许 admins 访问其他用户的记录
  if (id !== currentUser.sub && currentUser.role !== Role.Admin) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  userService.getById(req.params.id)
    .then(user => user ? res.json(user) : res.sendStatus(404))
    .catch(err => next(err));
});

module.exports = router;
