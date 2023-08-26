import React from 'react';

function Card({card, onCardClick}) {
    const handleClick = () => {
        onCardClick(card);
    }

    return (
        <article className="card">
            <button className="card__delete" type="button"></button>
            <img className="card__image" src={card.link} alt={card.name} onClick={handleClick}/>
            <h3 className="card__name">{card.name}</h3>
            <div className="card__likes">
                <button className="card__like-button" type="button"></button>
                <p className="card__likes-count">{card.likes.length}</p>
            </div>
        </article>
    );
}

export default Card;