import React from 'react'

// STYLES
import './styles/nav.scss'

export default function Nav() {
    return (
        <div className="nav-container">
            <h1 className="logo">Hector Carpentry</h1>
            <div className="links-container" >
                <div className="link">Home</div>
                <div className="link">About</div>
                <div className="link">Kitchens</div>
                <div className="link">Stairs</div>
                <div className="link">Beams</div>
            </div>
            
        </div>
    )
}
