import React from 'react';

// STYLES
import './styles/categories.scss';
import Category from './Category';

const categories = [
    {
        category: "cabinets",
        description: "Custom Cabinets - Cabinet Door Installation - Islands - Pantries - Closets",
        images: [
            "https://lda.lowes.com/is/image/Lowes/DP18-142907_1-1_dt_KitchenCabinetry_2col_hero-Image?scl=1",
            "https://images.unsplash.com/photo-1579725942955-4d8377f8c66a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
            "https://images.unsplash.com/photo-1516888693095-f0e05366ddc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        category: "stairs",
        description: "Step Installation - Ballister Installation - Hand Rail Installation",
        images: [
            "https://images.unsplash.com/photo-1560170433-bc0adc32bccd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
            "https://images.unsplash.com/photo-1505334086731-6579ef4cf449?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1562764661-469bc3f331d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        ]
    },
    {
        category: "trim",
        description: "Base Boards - Window Sills - Trim - Crown Moulding - Wainscoting",
        images: [
            "https://wisconsinbarnhouse.weebly.com/uploads/1/1/9/8/11981788/3887675_orig.jpg",
            "https://i.pinimg.com/originals/bc/90/82/bc9082949bb0e555f2582a290cb0ec71.jpg",
            "https://live.staticflickr.com/2335/2182808920_21e7c4ca50_b.jpg"
        ]
    },
    {
        category: "doors",
        description: "Door Installation - Door Replacemt - Exterior - Interior",
        images: [
            "https://image.made-in-china.com/202f0j00sTSftHjgaRqK/Interior-Solid-Wooden-Door-Design-for-Your-House-PR-D02-.jpg",
            "https://lh3.googleusercontent.com/proxy/1AS5IjjJ9kbEbLKb6A9qYksInhh6t7QHbZplID6oE-vZWatR_N4snBEseIP6aseC-UJl1YIaxJFt18ltK1fPnOE6AM03FoLi-7J6KeeI1OpG_tYME_DZueqLyPu9xBinE6H3ngCsbVZPqG8Bc0mO7E67z8aiUuaVoK6kGTSK9KzMG7esP9lFOJ64u9g",
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
