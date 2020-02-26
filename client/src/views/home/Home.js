import React from 'react';

// COMPONENTS
import Header from '../../components/header/Header';
import Categories from '../../components/categories/Categories';
import Contact from '../../components/contact/Contact';

// STYLES
import './styles/home.scss';

export default function Home() {
    return (
        <div className="home-container">
            <Header/>
            <h1 className="about-h1">ABOUT</h1>
            <p className="bio">Hello! My name is Hector. I am a carpenter from the Houston area with over 15 years of experience. I have gained a wide variety of skills throughout my career including building <strong>kitchen cabinets</strong>, <strong>stairs</strong>, <strong>trim</strong>, and <strong>doors</strong>.</p>
            <div className="line-break"></div>
            <Categories />
            <div className="line-break"></div>
            <Contact />
        </div>
    )
}
