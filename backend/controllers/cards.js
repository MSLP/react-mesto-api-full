const Card = require('../models/card');
const NotFoundError = require('../errors/not-found-err');
const BadRequestError = require('../errors/bad-request-err');
const ForbiddenError = require('../errors/forbidden-err');

const getCards = (req, res, next) => Card.find({})
  .then((cards) => {
    if (!cards.length) next(new NotFoundError('карточек нет'));
    return res.status(200).send(cards);
  })
  .catch((err) => next(err));

const addCard = (req, res, next) => {
  const data = { ...req.body, owner: req.user._id };
  return Card.create(data)
    .then((card) => res.status(200).send(card))
    .catch((err) => {
      if (err.name === 'ValidationError') next(new BadRequestError('Переданы некорректные данные'));
      next(err);
    });
};

const deleteCard = (req, res, next) => Card.findById({ _id: req.params.cardId })
  .then((card) => {
    if (card.owner.toString() === req.user._id.toString()) {
      card.remove();
      res.status(200).send({ message: 'Карточка удалена' });
    } else next(new ForbiddenError('У вас нет прав для удаления этой карточки'));
  })
  .catch((err) => {
    if (err.name === 'CastError') next(new BadRequestError('Переданы некорректные данные'));
    if (err.name === 'TypeError') next(new NotFoundError('Нет карточки с таким id'));
    next(err);
  });

const putLike = (req, res, next) => Card.findByIdAndUpdate(
  { _id: req.params.cardId }, { $addToSet: { likes: req.user._id } },
  { new: true },
)
  .then((card) => {
    if (!card) next(new NotFoundError('Нет карточки с таким id'));
    return res.status(200).send(card);
  })
  .catch((err) => {
    if (err.name === 'CastError') next(new BadRequestError('Переданы некорректные данные'));
    next(err);
  });

const deleteLike = (req, res, next) => Card.findByIdAndUpdate(
  { _id: req.params.cardId }, { $pull: { likes: req.user._id } },
  { new: true },
)
  .then((card) => {
    if (!card) next(new NotFoundError('Нет карточки с таким id'));
    return res.status(200).send(card);
  })
  .catch((err) => {
    if (err.name === 'CastError') next(new BadRequestError('Переданы некорректные данные'));
    next(err);
  });

module.exports = {
  getCards, addCard, deleteCard, putLike, deleteLike,
};
