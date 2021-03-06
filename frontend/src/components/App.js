import React from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Header from './Header';
import Main from './Main';
import Login from './Login';
import Register from './Register';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import DeletePlacePopup from './DeletePlacePopup';
import InfoTooltip from './InfoTooltip';
import api from '../utils/api';
import auth from '../utils/auth';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  // объявление переменных состояния
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = React.useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({isSelected: false});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [deletedCard, setDeletedCard] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isRegistered, setIsRegistered] = React.useState(false);
  const [email, setEmail] = React.useState('');

  const history = useHistory();

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    token && auth.checkToken(token)
    .then(data => {
      setLoggedIn(true);
      setEmail(data.email);
      history.push('/main');
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  // получение с сервера информации о пользователе и начальных карточках
  React.useEffect(() => {
    loggedIn && api.getUserInfo()
    .then((userData) => {
        setCurrentUser(userData);
    })
    .catch(err => {
      console.log(err);
    })
  }, [loggedIn]);

  React.useEffect(() => {
    loggedIn && api.getInitialCards()
    .then((cardsData) => {
        setCards(cardsData);
    })
    .catch(err => {
      console.log(err);
    })
  }, [loggedIn]);

  // открытие попапа редактирования аватара
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  // открытие попапа редактирования профиля
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  // открытие попапа добавления новой фото-карточки
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  // открытие попапа удаления фото-карточки
  function handleDeleteClick(card) {
    setIsDeletePopupOpen(true);
    setDeletedCard(card);
  }

  // закрытие всех попапов
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDeletePopupOpen(false);
    setIsInfoTooltipOpen(false);
    setSelectedCard({isSelected: false});
  }

  // открытие полноразмерной картинки
  function handleCardClick(card) {
    setSelectedCard({
      name: card.name,
      link: card.link,
      isSelected: true
    });
  }

  // обновление данных о пользователе на сервере
  function handleUpdateUser(newInfo) {
    api.changeUserInfo(newInfo)
    .then(data => {
      setCurrentUser(data);
      closeAllPopups();
    })
    .catch(err => {
      console.log(err);
    });
  }

  // обновление аватара пользователя на сервере
  function handleUpdateAvatar(newInfo, ref) {
    api.changeAvatar(newInfo)
    .then(data => {
      setCurrentUser(data);
      closeAllPopups();
      ref.current.value = '';
    })
    .catch(err => {
      console.log(err);
    });
  }

   // постановка/снятие лайка с карточки
   function handleCardLike(card) {
    const isLiked = card.likes.some(i => i === currentUser._id);

    if (isLiked) {
      api.dislikeCard(card._id)
      .then(newCard => {
        setCards(state => state.map(c => c._id === card._id ? newCard : c));
      })
      .catch(err => {
        console.log(err);
      });
    }
    else {
      api.likeCard(card._id)
      .then(newCard => {
        setCards(state => state.map(c => c._id === card._id ? newCard : c));
      })
      .catch(err => {
        console.log(err);
      });
    }
  }

  // удаление карточки с сервера
  function handleCardDelete() {
    api.deleteCard(deletedCard._id)
    .then(() => {
      setCards(state => state.filter(c => {return c._id !== deletedCard._id}));
      closeAllPopups();
    })
    .catch(err => {
      console.log(err);
    });
  }

  // добавление новой карточки на сервер
  function handleAddPlaceSubmit(newCard, setTitle, setLink) {
    api.addCard(newCard)
    .then(data => {
      setCards([data, ...cards]);
      closeAllPopups();
      setTitle('');
      setLink('');
    })
    .catch(err => {
      console.log(err);
    });
  }

  // залогинить пользователя
  function handleLogin(data) {
    auth.login(data)
    .then(res => {
      setEmail(data.email);
      setLoggedIn(true);
      localStorage.setItem('token', res.token);
      history.push('/main');
    })
    .catch(err => {
      console.log(err);
    })
  }

  // при успешной регистрации переходим на основную страницу,
  // а так же сообщаем о статусе регистрации попапом
  function handleRegister(data) {
    auth.register(data)
    .then(res => {
      setIsRegistered(true);
      setIsInfoTooltipOpen(true);
      history.push('./sign-in');
    })
    .catch(err => {
      setIsRegistered(false);
      setIsInfoTooltipOpen(true);
      console.log(err);
    });
  }

  // выход из аккаунта
  function handleSignOut() {
    setLoggedIn(false);
    setEmail('');
    localStorage.removeItem('token');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__container">
        <Header onSignOut={handleSignOut} email={email} loggedIn={loggedIn} />
        <Switch>
          <Route path="/sign-up">
            <Register onSubmit={handleRegister} />
          </Route>
          <Route path="/sign-in">
            <Login handleLogin={handleLogin} />
          </Route>
          <ProtectedRoute
            path="/main"
            loggedIn={loggedIn}
            component={Main}
            cards={cards}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onCardDelete={handleDeleteClick}
            onCardLike={handleCardLike}
          />
          <Route path="/">
            { loggedIn ? <Redirect to="/main"/> : <Redirect to="/sign-in" /> }
          </Route>
        </Switch>
        <Footer />
      </div>

      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateAvatar} />
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />
      <DeletePlacePopup isOpen={isDeletePopupOpen} onClose={closeAllPopups} onDelete={handleCardDelete} />
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      <InfoTooltip isRegistered={isRegistered} isOpen={isInfoTooltipOpen} onClose={closeAllPopups} />
    </CurrentUserContext.Provider>
  );
}

export default App;
