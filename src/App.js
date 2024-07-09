import React, { useState } from "react";
import Card from "./Card";
import "./style.css";

const App = () => {

    const [searchTerm, setSearchTerm] = useState("");

    const cards = [
        {
            uuId: "9b24be2c-1f0a-11ee-be56-0242ac120002",
            imageUrl: "https://i.pinimg.com/originals/0e/b5/d4/0eb5d40de268f48c828dd5c00700ea80.jpg",
            title: "56 Vintage Recipes from the '30s Worth Trying Today",
            profileImage: "logo192.png",
            userName: "Taste of Home",
            category: "Food",
        },
        {
            uuId: "9b24be2c-1f0a-11ee-be56-0242ac120002",
            imageUrl: "https://i.pinimg.com/originals/0e/b5/d4/0eb5d40de268f48c828dd5c00700ea80.jpg",
            title: "",
            profileImage: "logo192.png",
            userName: "Taste of Home",
            category: "Food",
        },
        {
            uuId: "9b24be2c-1f0a-11ee-be56-0242ac120002",
            imageUrl: "https://i.pinimg.com/originals/0e/b5/d4/0eb5d40de268f48c828dd5c00700ea80.jpg",
            title: "56 Vintage Recipes from the '30s Worth Trying Today",
            profileImage: "logo192.png",
            userName: "Taste of Home",
            category: "Food",
        },
        {
            uuId: "9b24be2c-1f0a-11ee-be56-0242ac120002",
            imageUrl: "https://i.pinimg.com/originals/0e/b5/d4/0eb5d40de268f48c828dd5c00700ea80.jpg",
            title: "56 Vintage Recipes from the '30s Worth Trying Today",
            profileImage: "logo192.png",
            userName: "Taste of Home",
            category: "Food",
        },
        {
            uuId: "9b24be2c-1f0a-11ee-be56-0242ac120002",
            imageUrl: "https://i.pinimg.com/originals/0e/b5/d4/0eb5d40de268f48c828dd5c00700ea80.jpg",
            title: "56 Vintage Recipes from the '30s Worth Trying Today",
            profileImage: "logo192.png",
            userName: "Taste of Home",
            category: "Food",
        },

    ];

    const filteredCards = cards.filter((card) => card.title.toLowerCase().includes(searchTerm.toLowerCase()) );

    return (

        <div className="app">

            <header className="header">

                <h1>My Pinterest Clone</h1>

                <input type="text" placeholder="Search for easy dinners, fashion, etc." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

            </header>

            <div className="card-grid">

                {filteredCards.map((card, index) => (
                    <Card
                        key={index}
                        uuId={card.uuId}
                        imageUrl={card.imageUrl}
                        profileImage={card.profileImage}
                        userName={card.userName}
                        category={card.category}
                        title={card.title}
                    />

                ))}

            </div>

        </div>

    );

};

export default App;
