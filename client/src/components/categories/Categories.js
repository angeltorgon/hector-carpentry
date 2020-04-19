import React from 'react';

// STYLES
import './styles/categories.scss';
import Category from './Category';

const categories = [
    {
        category: "cabinets",
        description: "Custom Cabinets - Cabinet Door Installation - Islands - Pantries - Closets",
        images: [
            "https://drive.google.com/uc?id=1RTgropK3v_fc0CYIamRh5GGiJUHC723s",
            "https://drive.google.com/uc?id=1RC_9Vc1xa6QgRzX-HTVakRlCnmXO-SEN",
            "https://drive.google.com/uc?id=1RrLC5Ov_NLuDNjE88SSPnvaCN1CRL1ua"
        ]
    },
    {
        category: "stairs",
        description: "Step Installation - Ballister Installation - Hand Rail Installation",
        images: [
            "https://drive.google.com/uc?id=1Qt8NwqPlH2fEO4qdNQl3xhBmFLz871Xn",
            "https://images.unsplash.com/photo-1505334086731-6579ef4cf449?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            "https://drive.google.com/uc?id=1QhTrg636lNArp3yVDCxNxnhiwUbNn_mX"
        ]
    },
    {
        category: "trim",
        description: "Base Boards - Window Sills - Trim - Crown Moulding - Wainscoting",
        images: [
            "https://drive.google.com/uc?id=1RCZpWfvb1VihU9d5qG_Wlg9v6xL3r_qy",
            "https://i.pinimg.com/originals/bc/90/82/bc9082949bb0e555f2582a290cb0ec71.jpg",
            "https://live.staticflickr.com/2335/2182808920_21e7c4ca50_b.jpg"
        ]
    },
    {
        category: "doors",
        description: "Door Installation - Door Replacemt - Exterior - Interior",
        images: [
            "https://image.made-in-china.com/202f0j00sTSftHjgaRqK/Interior-Solid-Wooden-Door-Design-for-Your-House-PR-D02-.jpg",
            "https://marvin-architectural.co.uk/wp-content/uploads/2017/01/Wooden-Patio-Door-London.jpg",
            "https://cdn.homedit.com/wp-content/uploads/2011/06/dark-wood-floor-with-white-door.jpg"
        ]
    },
]

export default function Categories() {
    return (
        <div className="categories-container">
            {
                categories.map((category) => <Category category={category}/>)
            }
        </div>
    )
}
