import React, {useEffect, useState} from 'react';
import {api} from '../utils/api';

function Main({onEditProfile, onAddPlace, onEditAvatar}) {

    const [userName, setUserName] = useState();
    const [userDescription, setUserDescription] = useState();
    const [userAvatar, setUserAvatar] = useState();
    const [cards, setCards] = useState([]);

    useEffect(function() {
        api.getProfileInfo().then((userInfo) => {
            setUserName(userInfo.name);
            setUserDescription(userInfo.about);
            setUserAvatar(userInfo.avatar);
        })
    },[]);

    useEffect(function () {
        api.getCards().then((cards) => {
            setCards(cards);
        })
    }, []);

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__container">
                    <button onClick={onEditAvatar} type="button" className="profile__edit-avatar-btn"></button>
                    <img
                        src={userAvatar}
                        alt="Аватар пользователя"
                        className="profile__avatar"
                    />
                    <div className="profile__info">
                        <div className="profile__btn-container">
                            <h1 className="profile__name">{userName}</h1>
                            <button onClick={onEditProfile} type="button" className="profile__edit-btn"></button>
                        </div>
                        <p className="profile__profession">{userDescription}</p>
                    </div>
                </div>
                <button onClick={onAddPlace} type="button" className="profile__add-btn"></button>
            </section>
            <section className="cards-container">
                {cards.map((card, i) => (
                    <div className="card" key={i} >
                        <button type="button" className="card__trash-btn"></button>
                        <img src={card.link} alt={card.name} className="card__img"/>
                        <div className="card__heading">
                            <h2 className="card__title">{card.name}</h2>
                            <div className="card__like-container">
                                <button type="button" className="card__like-btn"></button>
                                <span className="card__like-counter">{card.likes.length}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    )
}

export default Main;