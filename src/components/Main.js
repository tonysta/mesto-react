import React from 'react';
import noAvatar from '../images/giphy.gif';

function Main({onEditProfile, onAddPlace, onEditAvatar}) {



    return (
        <main className="main">
            <section className="profile">
                <div className="profile__container">
                    <button onClick={onEditAvatar} type="button" className="profile__edit-avatar-btn"></button>
                    <img
                        src={noAvatar}
                        alt="Аватар пользователя"
                        className="profile__avatar"
                    />
                    <div className="profile__info">
                        <div className="profile__btn-container">
                            <h1 className="profile__name"></h1>
                            <button onClick={onEditProfile} type="button" className="profile__edit-btn"></button>
                        </div>
                        <p className="profile__profession"></p>
                    </div>
                </div>
                <button onClick={onAddPlace} type="button" className="profile__add-btn"></button>
            </section>
            <section className="cards-container"></section>
        </main>
    )
}

export default Main;