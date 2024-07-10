import React, { useState } from "react";
import Card from "./Card";
import "./style.css";

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const cards = [
        {
            uuId: "1b24be2c-1f0a-11ee-be56-0242ac120002",
            imageUrl:
                "https://assets.adidas.com/images/w_1880,f_auto,q_auto/e3bbd317303f4aff8dddca31d54ab419_9366/IE8794_02_standard_hover.jpg",
            title: "",
            profileImage:
                "https://www.adidas.co.za/on/demandware.static/Sites-adidas-ZA-Site/-/default/dwfe613dec/images/adidas_logo.svg",
            userName: "Adidas",
            category: "Athletics",
        },
        {
            uuId: "2b24be2c-1f0a-11ee-be56-0242ac120002",
            imageUrl:
                "https://assets.adidas.com/images/w_1880,f_auto,q_auto/ee8f195a8db64afb9cae99a68e6c253b_9366/IL2149_21_model.jpg",
            title: "Top 10: Matching couple outfits",
            profileImage:
                "https://www.adidas.co.za/on/demandware.static/Sites-adidas-ZA-Site/-/default/dwfe613dec/images/adidas_logo.svg",
            userName: "Adidas",
            category: "Clothing",
        },
        {
            uuId: "3b24be2c-1f0a-11ee-be56-0242ac120002",
            imageUrl: "https://martensvillemessenger.ca/wp-content/uploads/2018/04/cellphone.jpg",
            title: "10 Iphone hacks you need to try",
            profileImage: "logo192.png",
            userName: "CNN",
            category: "Technology",
        },
        {
            uuId: "4b24be2c-1f0a-11ee-be56-0242ac120002",
            imageUrl: "https://seikatsumi.com/wp-content/uploads/2024/02/Japan-Summer-Outfit.png",
            title: "Japan Summer Outfit: Tips for Staying Cool and Stylish You Can’t Miss 2024",
            profileImage:
                "https://seikatsumi.com/wp-content/uploads/2023/11/WhatsApp-Bild-2023-11-08-um-21.27.48_3f424154.jpg",
            userName: "seikatsumi",
            category: "Floral",
        },
        {
            uuId: "5b24be2c-1f0a-11ee-be56-0242ac120002",
            imageUrl:
                "https://www.cnet.com/a/img/resize/69256d2623afcbaa911f08edc45fb2d3f6a8e172/hub/2023/02/03/afedd3ee-671d-4189-bf39-4f312248fb27/gettyimages-1042132904.jpg?auto=webp&fit=crop&height=675&width=1200",
            title: "Moderate These 11 Foods to Balance Your Diet and Achieve Your Goals",
            profileImage: "logo192.png",
            userName: "CNET",
            category: "Food",
        },
        {
            uuId: "6b24be2c-1f0a-11ee-be56-0242ac120002",
            imageUrl: "https://orthoinfo.aaos.org/link/1075fca723f0442cacd006df0629fa8e.aspx",
            title: "Beginning an Aerobic Exercise Program",
            profileImage: "logo192.png",
            userName: "Ortho Info",
            category: "health",
        },

        {
            uuId: "7b24be2c-1f0a-11ee-be56-0242ac120002",
            imageUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8NgQ6WAjkR6djmhrld2D5GLsYOdslwIdDrA&s",
            title: "",
            profileImage: "logo192.png",
            userName: "FIA",
            category: "Motor Sport",
        },
        {
            uuId: "8b24be2c-1f0a-11ee-be56-0242ac120002",
            imageUrl:
                "https://hips.hearstapps.com/hmg-prod/images/lamborghini-powertrain-2-6406739f0b1c9.jpg?resize=640:*",
            title: "Lamborghini's New V-12 Powertrain Is a 1001-HP Three-Motor Plug-in Hybrid",
            profileImage: "logo192.png",
            userName: "Car and Driver",
            category: "Automotive",
        },
        {
            uuId: "9b24be2c-1f0a-11ee-be56-0242ac120002",
            imageUrl:
                "https://i.pinimg.com/originals/0e/b5/d4/0eb5d40de268f48c828dd5c00700ea80.jpg",
            title: "56 Vintage Recipes from the '30s Worth Trying Today",
            profileImage: "logo192.png",
            userName: "Taste of Home",
            category: "Food",
        },
        {
            uuId: "10b24be2c-1f0a-11ee-be56-0242ac120002",
            imageUrl:
                "https://i.pinimg.com/originals/0e/b5/d4/0eb5d40de268f48c828dd5c00700ea80.jpg",
            title: "56 Vintage Recipes from the '30s Worth Trying Today",
            profileImage: "logo192.png",
            userName: "Taste of Home",
            category: "Food",
        },
        {
            uuId: "11b24be2c-1f0a-11ee-be56-0242ac120002",
            imageUrl:
                "https://i.pinimg.com/originals/0e/b5/d4/0eb5d40de268f48c828dd5c00700ea80.jpg",
            title: "56 Vintage Recipes from the '30s Worth Trying Today",
            profileImage: "logo192.png",
            userName: "Taste of Home",
            category: "Food",
        },
        {
            uuId: "12b24be2c-1f0a-11ee-be56-0242ac120002",
            imageUrl:
                "https://imageio.forbes.com/blogs-images/bridgetarsenault/files/2019/01/Talavera-Chef-Samantha-Sanz.jpg?format=jpg&width=1440",
            title: "Top resturants to try in Dubai",
            profileImage: "logo192.png",
            userName: "Taste of Home",
            category: "Food",
        },
        {
            uuId: "13b24be2c-1f0a-11ee-be56-0242ac120002",
            imageUrl:
                "https://i.pinimg.com/originals/0e/b5/d4/0eb5d40de268f48c828dd5c00700ea80.jpg",
            title: "56 Vintage Recipes from the '30s Worth Trying Today",
            profileImage: "logo192.png",
            userName: "Taste of Home",
            category: "Food",
        },
        {
            uuId: "14b24be2c-1f0a-11ee-be56-0242ac120002",
            imageUrl:
                "https://i.pinimg.com/originals/0e/b5/d4/0eb5d40de268f48c828dd5c00700ea80.jpg",
            title: "56 Vintage Recipes from the '30s Worth Trying Today",
            profileImage: "logo192.png",
            userName: "Taste of Home",
            category: "Food",
        },
        {
            uuId: "15b24be2c-1f0a-11ee-be56-0242ac120002",
            imageUrl:
                "https://imageio.forbes.com/blogs-images/bridgetarsenault/files/2019/01/Four-Seasons-Scottsdale-Chef-Samantha-Sanz-1200x1800.jpg?format=jpg&width=1440",
            title: "Meet Female Chefs Disrupting The Arizona Food Scene",
            profileImage: "logo192.png",
            userName: "Forbes",
            category: "Cooking",
        },
        {
            uuId: "16b24be2c-1f0a-11ee-be56-0242ac120002",
            imageUrl:
                "https://i.pinimg.com/originals/0e/b5/d4/0eb5d40de268f48c828dd5c00700ea80.jpg",
            title: "56 Vintage Recipes from the '30s Worth Trying Today",
            profileImage: "logo192.png",
            userName: "Taste of Home",
            category: "Food",
        },
        {
            uuId: "17b24be2c-1f0a-11ee-be56-0242ac120002",
            imageUrl: "https://www.si.com/.image/t_share/MTkzMjk3MDE3NDk2MTUxNjE5/audi-f1.jpg",
            title: "Is Audi's new F1 team set to rebrand itself?",
            profileImage: "logo192.png",
            userName: "F1 news",
            category: "Racing",
        },
        {
            uuId: "18b24be2c-1f0a-11ee-be56-0242ac120002",
            imageUrl:
                "https://imageio.forbes.com/blogs-images/bridgetarsenault/files/2019/01/Chef-Samantha-Sanz-Four-Seasons-Resort-Scottsdale.jpg?format=jpg&width=1440",
            title: "",
            profileImage: "logo192.png",
            userName: "Garden Route",
            category: "Food",
        },
        {
            uuId: "19b24be2c-1f0a-11ee-be56-0242ac120002",
            imageUrl:
                "https://i.pinimg.com/originals/0e/b5/d4/0eb5d40de268f48c828dd5c00700ea80.jpg",
            title: "56 Vintage Recipes from the '30s Worth Trying Today",
            profileImage: "logo192.png",
            userName: "Taste of Home",
            category: "Food",
        },
        {
            uuId: "20b24be2c-1f0a-11ee-be56-0242ac120002",
            imageUrl:
                "https://hips.hearstapps.com/hmg-prod/images/bestcars50k-1592330400.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
            title: "The 20 Best Sports (And Sporty) Cars You Can Buy For Under $50,000",
            profileImage: "logo192.png",
            userName: "Auto Week",
            category: "Food",
        },
    ];

    const filteredCards = cards.filter(
        (card) =>
            card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            card.userName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="app">
            <header className="header">
                <h1>Pinterest Clone</h1>

                <div className="create-title">
                    <button className="Home-button">HOME</button>
                    CREATE
                    <img src="drop-down-26.svg" alt="drop down icon" />
                </div>
                <input
                    type="text"
                    placeholder="Search for easy dinners, fashion, etc."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
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
