import React from 'react';
import '../index.css';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";


function App() {

  const [isEditAvatarOpen, setEditAvatarOpen] = React.useState(false);
  const [isEditProfileOpen, setEditProfileOpen] = React.useState(false);
  const [isAddPlaceOpen, setAddPlaceOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setEditAvatarOpen(true);
  }
  function handleEditProfileClick() {
    setEditProfileOpen(true);
  }
  function handleAddPlaceClick() {
    setAddPlaceOpen(true);
  }

  return (
      <div className="background">
        <div className="page">
          <Header />
          <Main onEditProfile = {handleEditProfileClick} onAddPlace = {handleAddPlaceClick} onEditAvatar = {handleEditAvatarClick}/>

          <PopupWithForm title = 'Редактировать профиль' name = 'profile' >
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

          <PopupWithForm title = 'Новое место' name = 'card'>
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

          <PopupWithForm title='Обновить аватар' name='avatar' isOpen = {isEditAvatarOpen}>
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

          <Footer />
        </div>

        <template className="card__template">
          <div className="card">
            <button type="button" className="card__trash-btn"></button>
            <img src="imagesombai.jpg" alt="Домбай" className="card__img"/>
            <div className="card__heading">
              <h2 className="card__title">Домбай</h2>
              <div className="card__like-container">
                <button type="button" className="card__like-btn"></button>
                <span className="card__like-counter"></span>
              </div>
            </div>
          </div>
        </template>

      </div>
  );
}

export default App;
