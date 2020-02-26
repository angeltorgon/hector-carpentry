import React, { useState, useEffect } from 'react';

// STYLES
import './styles/category.scss';

export default function Category(props) {
    const [ image, setImage ] = useState();

    useEffect(() => {
        console.log("props -- ", props);
        setImage(props.category.images[0]);
    }, [])

    if(!image) {
        return null
    }

    return (
        <div className="category-container">
            <img src={image}/>
        </div>
    )
}
