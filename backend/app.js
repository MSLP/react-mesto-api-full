require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const { celebrate, Joi, errors } = require('celebrate');
const helmet = require('helmet');
const userRoutes = require('./routes/users');
const cardRoutes = require('./routes/cards');
const { login, addUser } = require('./controllers/users');
const auth = require('./middlewares/auth');
const error = require('./middlewares/error');
const cors = require('./middlewares/cors');
const NotFoundError = require('./errors/not-found-err');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const regExp = /^https?:\/\/(www.)?[a-zA-Z0-9-.]+(\.\w+)+[/\w-._~:/?#[\]@!$&'()*+,;=]*#*$/;
const app = express();

app.use(helmet());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(cors);
app.use(requestLogger);
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});
app.post('/signup', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().pattern(regExp),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(8).max(35),
  }),
}), addUser);
app.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
}), login);
app.use(auth);
app.use('/', userRoutes);
app.use('/', cardRoutes);
app.use('*', (req, res, next) => next(new NotFoundError('Страница не найдена')));
app.use(errorLogger);
app.use(errors());
app.use(error);

app.listen(3000);
