import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowCircleRight, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

// STYLES
import './styles/category.scss';

function moveRight(currentIndex) {
    if(currentIndex === 2) {
        currentIndex = 0;
    } else {
        currentIndex ++;
    }
    return currentIndex;
}

function moveLeft(currentIndex) {
    if(currentIndex === 0) {
        currentIndex = 2;
    } else {
        currentIndex --;
    }
    return currentIndex;
}

export default function Category(props) {
    const [ image, setImage ] = useState();
    let currImageIndex = 0;

    useEffect(() => {
        setImage(props.category.images[currImageIndex]);
        setInterval(() => {
            currImageIndex = moveRight(currImageIndex);
            setImage(props.category.images[currImageIndex]);
        }, 5000);
    }, [])

    const handleClick = (e) => {
        if(e.target.name == "right") {
            currImageIndex = moveRight(currImageIndex);
            setImage(props.category.images[currImageIndex]);
        } else {
            currImageIndex = moveLeft(currImageIndex);
            setImage(props.category.images[currImageIndex]);
        }
    }

    if(!image) {
        return <h1>Loading...</h1>
    }

    return (
        <div id={props.category.category} className="category-container">
            <h1>{props.category.category.toUpperCase()}</h1>
            <p className="description">{props.category.description}</p>
            <div className="image-container">
                <img src={image}/>
            </div>
            <div className="arrow-container">
                <FontAwesomeIcon onClick={handleClick} name="left" className="arrow-icon" icon={faArrowCircleLeft} size="3x" />
                <FontAwesomeIcon onClick={handleClick} name="right" className="arrow-icon" icon={faArrowCircleRight} size="3x" />
            </div>
        </div>
    )
}
