import React from 'react';

// STYLES
import './styles/categories.scss';
import Category from './Category';

const categories = [
    {
        category: "Cabinets",
        description: "Custom Cabinets - Cabinet Door Installation - Islands - Pantries - Closets",
        images: [
            "https://lda.lowes.com/is/image/Lowes/DP18-142907_1-1_dt_KitchenCabinetry_2col_hero-Image?scl=1",
            "https://images.unsplash.com/photo-1579725942955-4d8377f8c66a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
            "https://images.unsplash.com/photo-1516888693095-f0e05366ddc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        category: "Stairs",
        description: "Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada.",
        images: [
            "https://images.unsplash.com/photo-1560170433-bc0adc32bccd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
            "https://images.unsplash.com/photo-1505334086731-6579ef4cf449?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1562764661-469bc3f331d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
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
