import React from 'react'

// STYLES
import './styles/nav.scss'

export default function Nav() {
    return (
        <div className="nav-container">
            <div className="links-container" >
                <div className="link">HOME</div>
                <div className="link">ABOUT</div>
                <div className="link">KITCHENS</div>
                <div className="link">STAIRS</div>
                <div className="link">BEAMS</div>
            </div>
            <h1 className="logo">Hector Carpentry</h1>
        </div>
    )
}
