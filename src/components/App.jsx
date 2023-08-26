import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
      <Footer />
      <PopupWithForm name="edit-avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <label className="popup__field">
          <input className="popup__input" id="avatar-link-input" type="url" name="avatar" placeholder="Ссылка на картинку" required />
          <span className="avatar-link-input-error popup__input-error"></span>
        </label>
        <button className="popup__save-button" type="submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <label className="popup__field">
          <input className="popup__input" id="profile-name-input" type="text" name="name" placeholder="Имя" minLength="2" maxLength="40" required />
          <span className="profile-name-input-error popup__input-error"></span>
        </label>
        <label className="popup__field">
          <input className="popup__input" id="profile-about-input" type="text" name="about" placeholder="О себе" minLength="2" maxLength="200" required />
          <span className="profile-about-input-error popup__input-error"></span>
        </label>
        <button className="popup__save-button" type="submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name="add-card" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <label className="popup__field">
          <input className="popup__input" id="place-name-input" type="text" name="name" placeholder="Название" minLength="2" maxLength="30" required />
          <span className="place-name-input-error popup__input-error"></span>
        </label>
        <label className="popup__field">
          <input className="popup__input" id="place-link-input" type="url" name="link" placeholder="Ссылка на картинку" required />
          <span className="place-link-input-error popup__input-error"></span>
        </label>
        <button className="popup__save-button" type="submit">Сохранить</button>
      </PopupWithForm>

      <ImagePopup link={selectedCard?.link} name={selectedCard?.name} onClose={closeAllPopups}/>

      <PopupWithForm name="delete-card" title="Вы уверены?" onClose={closeAllPopups}>
        <button className="popup__save-button popup__delete-button" type="submit">Да</button>
      </PopupWithForm>
    </div>
  );
}

export default App;
