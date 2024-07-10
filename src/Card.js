import React, { useState } from "react";
import "./style.css";

const Card = ({ uuId, imageUrl, profileImage, userName, category, title }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="card-container" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >

            <div className="card-box">

                <img src={imageUrl} alt={title} className="card-image" />

                {isHovered && (

                    <>

                        <div className="card-category">

                            <div className="card-category-title">

                                {category}
                                <img src="drop-down-25.svg" alt="drop down icon" />

                            </div>

                        </div>

                        <button className="save-button">Save</button>

                        <button className="share-button">

                            <img src="share-icon.svg" alt="Share icon" />

                        </button>

                        <button className="more-options-button">

                            <img src="three-dots-more-indicator.svg" alt="More options icon" />

                        </button>

                    </>

                )}

            </div>

            <div className="card-title">{title}</div>

            <div className="card-info">

                <img className="profile-image" src={profileImage} alt={userName} />
                <span className="user-name">{userName}</span>

            </div>

        </div>

    );

};

export default Card;
