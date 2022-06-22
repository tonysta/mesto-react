import React, {useEffect, useState} from 'react';
import {api} from '../utils/api';
import Card from './Card';
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

    const currentUser = React.useContext(CurrentUserContext);

    const [cards, setCards] = useState([]);

    useEffect(function() {
        api.getCards().then((cards) => {
            setCards(cards);
        }).catch((err) =>{console.log(err)});
    },[]);

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__container">
                    <button onClick={onEditAvatar} type="button" className="profile__edit-avatar-btn"></button>
                    <img
                        src={currentUser.avatar}
                        alt="Аватар пользователя"
                        className="profile__avatar"
                    />
                    <div className="profile__info">
                        <div className="profile__btn-container">
                            <h1 className="profile__name">{currentUser.name}</h1>
                            <button onClick={onEditProfile} type="button" className="profile__edit-btn"></button>
                        </div>
                        <p className="profile__profession">{currentUser.about}</p>
                    </div>
                </div>
                <button onClick={onAddPlace} type="button" className="profile__add-btn"></button>
            </section>
            <section className="cards-container">
                {cards.map((card) => (
                    <Card card = {card} key={card._id} onCardClick={onCardClick} />
                ))}
            </section>
        </main>
    )
}

export default Main;