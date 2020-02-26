import React, { useState, useEffect } from 'react';

// STYLES
import './styles/category.scss';

export default function Category(props) {
    const [ image, setImage ] = useState();

    useEffect(() => {
        let currImageIndex = 0;
        setImage(props.category.images[currImageIndex]);
        setInterval(() => {
            if(currImageIndex === 2) {
                currImageIndex = 0;
            } else {
                currImageIndex ++;
            }
            setImage(props.category.images[currImageIndex]);
        }, 5000);
    }, [])

    if(!image) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="category-container">
            <h1>{props.category.category.toUpperCase()}</h1>
            <p className="description">{props.category.description}</p>
            <div className="image-container">
                <img src={image}/>
            </div>
        </div>
    )
}
