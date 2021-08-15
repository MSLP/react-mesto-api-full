const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getCards, addCard, deleteCard, putLike, deleteLike,
} = require('../controllers/cards');

const regExp = /^https?:\/\/(www.)?[a-zA-Z0-9-.]+(\.\w+)+[/\w-._~:/?#[\]@!$&'()*+,;=]*#*$/;

router.get('/cards', getCards);
router.post('/cards', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    link: Joi.string().required().pattern(regExp),
  }),
}), addCard);
router.delete('/cards/:cardId', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().length(24).hex(),
  }),
}), deleteCard);
router.put('/cards/:cardId/likes', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().length(24).hex(),
  }),
}), putLike);
router.delete('/cards/:cardId/likes', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().length(24).hex(),
  }),
}), deleteLike);

module.exports = router;
