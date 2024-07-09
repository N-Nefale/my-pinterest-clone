import React, { useState } from 'react';

const Card = ({uuID,imageUrl,profileImage,profileName,Category,Title}) =>
{

    const [isHovered, setIsHovered] = useState(false);

    return (

        <div className='card' onMouseEnter={ setIsHovered(true)} onMouseLeave={setIsHovered(false)}>

            <img src={imageUrl} alt = {Title}/>

            <div className='card-Info'>

                <img className='profile-Image' src = {profileImage} alt = {profileName}/>

                <span className="profile-name">{profileName}</span>

            </div>

            <div className="card-title">{title}</div>

            {isHovered && <div className="card-category">{category}</div>}

        </div>

    );

};


export default Card;
