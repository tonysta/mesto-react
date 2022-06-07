import React from 'react';
import noAvatar from '../images/giphy.gif';

function Main() {

    function handleEditAvatarClick() {
        const popup = document.querySelector('.popup_section_avatar');
        popup.classList.add('popup_type_active');
    }
    function handleEditProfileClick() {
        const popup = document.querySelector('.popup_section_profile');
        popup.classList.add('popup_type_active');
    }
    function handleAddPlaceClick() {
        const popup = document.querySelector('.popup_section_card');
        popup.classList.add('popup_type_active');
    }

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__container">
                    <button onClick={handleEditAvatarClick} type="button" className="profile__edit-avatar-btn"></button>
                    <img
                        src={noAvatar}
                        alt="Аватар пользователя"
                        className="profile__avatar"
                    />
                    <div className="profile__info">
                        <div className="profile__btn-container">
                            <h1 className="profile__name"></h1>
                            <button onClick={handleEditProfileClick} type="button" className="profile__edit-btn"></button>
                        </div>
                        <p className="profile__profession"></p>
                    </div>
                </div>
                <button onClick={handleAddPlaceClick} type="button" className="profile__add-btn"></button>
            </section>
            <section className="cards-container"></section>
        </main>
    )
}

export default Main;