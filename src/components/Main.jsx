import React from 'react';
import { api } from '../utils/Api';
import Card from './Card';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('#');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getDefaultCards()])
            .then(([userData, defaultCards]) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
                setCards(defaultCards);
            })
            .catch((error) => { console.error('Ошибка: ', error) });
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar">
                    <img className="profile__avatar-image" src={userAvatar} alt="Аватарка" />
                    <button className="profile__avatar-edit" type="button" onClick={onEditAvatar}></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
                    <p className="profile__about">{userDescription}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
            </section>
            <section className="cards">
                {cards.map((card) => (
                    <Card key={card._id} card={card} onCardClick={onCardClick}/>
                ))}
            </section>
        </main>
    );
}

export default Main;