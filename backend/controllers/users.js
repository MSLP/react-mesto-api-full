const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const NotFoundError = require('../errors/not-found-err');
const BadRequestError = require('../errors/bad-request-err');
const UnauthorizedError = require('../errors/unauthorized-err');
const ConflictError = require('../errors/conflict-err');

const { JWT_SECRET = 'dev-key' } = process.env;

const getUsers = (req, res, next) => User.find({})
  .then((users) => res.status(200).send(users))
  .catch((err) => next(err));

const getUserById = (req, res, next) => User.findOne({ _id: req.params.id })
  .then((user) => {
    if (user) res.status(200).send(user);
    else next(new NotFoundError('Нет пользователя с таким id'));
  })
  .catch((err) => {
    if (err.name === 'CastError') next(new BadRequestError('Переданы некорректные данные'));
    next(err);
  });

const getUserMe = (req, res, next) => User.findOne({ _id: req.user._id })
  .then((user) => res.status(200).send(user))
  .catch((err) => {
    if (err.name === 'CastError') next(new BadRequestError('Переданы некорректные данные'));
    next(err);
  });

const addUser = (req, res, next) => {
  const {
    name, about, avatar, email, password,
  } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (user) throw new ConflictError('Пользователь с таким email уже существует');

      bcrypt.hash(password, 10)
        .then((hash) => User.create({
          name, about, avatar, email, password: hash,
        }))
        .then((newUser) => {
          const userDoc = newUser._doc;
          delete userDoc.password;
          res.status(200).send(newUser);
        })
        .catch((err) => {
          if (err.name === 'ValidationError') next(new BadRequestError('Переданы некорректные данные'));
          next(err);
        });
    }).catch(next);
};

const updateUser = (req, res, next) => {
  const data = { ...req.body };
  User.findByIdAndUpdate(req.user._id, data, { new: true, runValidators: true })
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.name === 'CastError' || err.name === 'ValidationError') next(new BadRequestError('Переданы некорректные данные'));
      next(err);
    });
};

const updateAvatar = (req, res, next) => {
  const data = { ...req.body };
  User.findByIdAndUpdate(req.user._id, data, { new: true, runValidators: true })
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.name === 'CastError' || err.name === 'ValidationError') next(new BadRequestError('Переданы некорректные данные'));
      next(err);
    });
};

const login = (req, res, next) => {
  const data = { ...req.body };
  User.findOne({ email: data.email }).select('+password')
    .then((user) => {
      if (user) {
        bcrypt.compare(data.password, user.password)
          .then((matched) => {
            if (!matched) next(new UnauthorizedError('Неверный email или пароль'));
            else {
              const token = jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: '7d' });
              res.status(201).send({ token });
            }
          });
      } else {
        next(new UnauthorizedError('Неверный email или пароль'));
      }
    })
    .catch((err) => next(err));
};

module.exports = {
  getUsers, getUserById, getUserMe, addUser, updateUser, updateAvatar, login,
};
