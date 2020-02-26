import React from 'react';

// COMPONENTS
import Header from '../../components/header/Header';

// STYLES
import './styles/home.scss';
import Categories from '../../components/categories/Categories';

export default function Home() {
    return (
        <div className="home-container">
            <Header/>
            <h1 >ABOUT</h1>
            <p className="bio">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta. Donec sollicitudin molestie malesuada. Cras ultricies ligula sed magna dictum porta.
            </p>
            <div className="line-break"></div>
            <Categories />
        </div>
    )
}
