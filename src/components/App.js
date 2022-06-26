import React, {useState} from 'react';
import '../index.css';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import {useEffect} from "react";
import {api} from "../utils/api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import EditAvatarPopup from "./EditAvatarPopup";


function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isEditAvatarOpen, setIsEditAvatarOpen] = React.useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = React.useState(false);
  const [isAddPlaceOpen, setIsAddPlaceOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(function() {
    api.getProfileInfo().then((userInfo) => {
      setCurrentUser(userInfo);
    }).catch((err) =>{console.log(err)});
  },[]);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfileOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlaceOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarOpen(false);
    setIsEditProfileOpen(false);
    setIsAddPlaceOpen(false);
    setSelectedCard(null);
  }

  function handleUpdateUser(data) {
    api.patchProfile(data).then((res) => {
      setCurrentUser(res);
    }).catch((err) => {console.log(err)});
    closeAllPopups();
  }

  function handleUpdateAvatar(data) {
    api.editAvatar(data).then((res) => {
      setCurrentUser(res);
    }).catch((err) => {console.log(err)});
    closeAllPopups();
  }

  return (
      <CurrentUserContext.Provider value={currentUser}>
        <div className="background">
          <div className="page">
            <Header />
            <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>

            <EditProfilePopup isOpen={isEditProfileOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

            <PopupWithForm title='Новое место' name ='card' isOpen={isAddPlaceOpen} onOpen={closeAllPopups}>
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

            <EditAvatarPopup isOpen={isEditAvatarOpen} onOpen={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

            <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

            <Footer />
          </div>
        </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
