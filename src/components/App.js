import React from 'react';
import '../index.css';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";


function App() {
  return (
      <div className="background">
        <div className="page">
          <Header />
          <Main/>
          <div className="popup popup_section_profile">
            <div className="popup__container">
              <button type="button" className="popup__close-btn"></button>
              <form name="profile" className="popup__form popup__form_type_profile" noValidate>
                <h2 className="popup__title">Редактировать профиль</h2>
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
                <button type="submit" className="popup__submit">Сохранить</button>
              </form>
            </div>
          </div>
          <div className="popup popup_section_card">
            <div className="popup__container">
              <button type="button" className="popup__close-btn"></button>
              <form name="card" className="popup__form popup__form_type_card" noValidate>
                <h2 className="popup__title">Новое место</h2>
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
                <button type="submit" className="popup__submit">Создать</button>
              </form>
            </div>
          </div>
          <div className="popup popup_confirm_delete">
            <div className="popup__container">
              <button type="button" className="popup__close-btn"></button>
              <form name="cardDelete" className="popup__form popup__form_type_card" noValidate>
                <h2 className="popup__title">Вы уверены?</h2>
                <button type="submit" className="popup__submit">Да</button>
              </form>
            </div>
          </div>
          <div className="popup popup_edit_avatar">
            <div className="popup__container">
              <button type="button" className="popup__close-btn"></button>
              <form name="avatarNew" className="popup__form popup__form_type_avatar" noValidate>
                <h2 className="popup__title">Обновить аватар</h2>
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
                <button type="submit" className="popup__submit">Сохранить</button>
              </form>
            </div>
          </div>
          <div className="popup viewer">
            <div className="viewer__container">
              <button
                  type="button"
                  className="viewer__close-btn popup__close-btn"
              ></button>
              <img src="src/components/App#" alt="" className="viewer__img"/>
              <h2 className="viewer__title"></h2>
            </div>
          </div>
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
