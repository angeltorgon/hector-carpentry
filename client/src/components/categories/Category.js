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
            <p>{props.category.description}</p>
            <img src={image}/>
        </div>
    )
}
