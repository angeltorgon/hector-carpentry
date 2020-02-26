import React from 'react';

// STYLES
import './styles/categories.scss';
import Category from './Category';

const categories = [
    {
        category: "Kitchens",
        description: "Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada.",
        images: [
            "https://lda.lowes.com/is/image/Lowes/DP18-142907_1-1_dt_KitchenCabinetry_2col_hero-Image?scl=1",
            "https://images.unsplash.com/photo-1579725942955-4d8377f8c66a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
        ]
    }
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
