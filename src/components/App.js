import React, {useState} from 'react';
import '../index.css';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";


function App() {

  const [isEditAvatarOpen, setEditAvatarOpen] = React.useState(false);
  const [isEditProfileOpen, setEditProfileOpen] = React.useState(false);
  const [isAddPlaceOpen, setAddPlaceOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = useState(null);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setEditAvatarOpen(true);
  }
  function handleEditProfileClick() {
    setEditProfileOpen(true);
  }
  function handleAddPlaceClick() {
    setAddPlaceOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarOpen(false);
    setEditProfileOpen(false);
    setAddPlaceOpen(false);
    setSelectedCard(null);
  }

  return (
      <div className="background">
        <div className="page">
          <Header />
          <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>

          <PopupWithForm title = 'Редактировать профиль' name = 'profile' isOpen={isEditProfileOpen} onOpen = {closeAllPopups}>
            <label className="popup__field">
              <input
                  type="text"
                  name="name"
                  placeholder="Иван Иванов"
                  className="popup__input popup__input_type_name"
                  required
                  minLength="2"
                  maxLength="40"
              />
              <span className="popup__input-error name-error"></span>
            </label>
            <label className="popup__field">
              <input
                  type="text"
                  name="profession"
                  placeholder="Инженер"
                  className="popup__input popup__input_type_profession"
                  required
                  minLength="2"
                  maxLength="200"
              />
              <span className="popup__input-error profession-error"></span>
            </label>
          </PopupWithForm>

          <PopupWithForm title = 'Новое место' name = 'card' isOpen={isAddPlaceOpen} onOpen = {closeAllPopups}>
            <label className="popup__field">
              <input
                  type="text"
                  placeholder="Название"
                  name="title"
                  className="popup__input popup__input_type_name"
                  required
                  minLength="2"
                  maxLength="30"
              />
              <span className="popup__input-error title-error"></span>
            </label>
            <label className="popup__field">
              <input
                  type="url"
                  placeholder="Ссылка на картинку"
                  name="link"
                  className="popup__input popup__input_type_link"
                  required
              />
              <span className="popup__input-error link-error"></span>
            </label>
          </PopupWithForm>

          <PopupWithForm title='Вы уверены?' name='delete'>
          </PopupWithForm>

          <PopupWithForm title='Обновить аватар' name='avatar' isOpen = {isEditAvatarOpen} onOpen = {closeAllPopups}>
            <label className="popup__field">
              <input
                  type="url"
                  placeholder="Ссылка на картинку"
                  name="link"
                  className="popup__input popup__input_type_link"
                  required
              />
              <span className="popup__input-error link-error"></span>
            </label>
          </PopupWithForm>

          {selectedCard && <ImagePopup card={selectedCard} onClose={closeAllPopups}/>}

          <Footer />
        </div>
      </div>
  );
}

export default App;
