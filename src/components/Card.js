import React from "react";

function Card({card, onCardClick}) {
    return(
        <div className="card" >
            <button type="button" className="card__trash-btn"></button>
            <img src={card.link} alt={card.name} className="card__img" onClick={() => onCardClick(card)}/>
            <div className="card__heading">
                <h2 className="card__title">{card.name}</h2>
                <div className="card__like-container">
                    <button type="button" className="card__like-btn"></button>
                    <span className="card__like-counter">{card.likes.length}</span>
                </div>
            </div>
        </div>
    )
}
export default Card;