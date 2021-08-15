const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
// const User = require('../models/user');
const {
  getUsers, getUserById, getUserMe, updateUser, updateAvatar,
} = require('../controllers/users');

const regExp = /^https?:\/\/(www.)?[a-zA-Z0-9-.]+(\.\w+)+[/\w-._~:/?#[\]@!$&'()*+,;=]*#*$/;

router.get('/users', getUsers);
router.get('/users/me', getUserMe);
router.get('/users/:id', celebrate({
  params: Joi.object().keys({
    id: Joi.string().length(24).hex(),
  }),
}), getUserById);
router.patch('/users/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
}), updateUser);
router.patch('/users/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().pattern(regExp),
  }),
}), updateAvatar);
// удаление пользователя
// router.delete('/users/:id', (req, res, next) => {
//   return User.findByIdAndRemove({_id: req.params.id})
//   .then(res.status(200).send({message: 'Пользователь удален'}))
//   .catch(err => next(err));
// })
module.exports = router;
