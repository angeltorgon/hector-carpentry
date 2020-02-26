import React, { useState, useEffect } from 'react';

// STYLES
import './styles/category.scss';

export default function Category(props) {
    const [ image, setImage ] = useState();
    let [ currentImage, setCurrentImage ] = useState(0);

    useEffect(() => {
        setImage(props.category.images[currentImage]);
        setInterval(() => {
            if(currentImage === 1) {
                currentImage = 0;
            } else {
                currentImage ++;
            }
            setImage(props.category.images[currentImage]);
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
