import React from 'react'

// STYLES
import './styles/nav.scss'

export default function Nav() {
    return (
        <div className="nav-container">
            <div className="links-container" >
                <a href="#top" className="link">Top</a>
                <a href="#cabinets" className="link">Cabinets</a>
                <a href="#stairs" className="link">Stairs</a>
                <a href="#trim" className="link">Trim</a>
                <a href="#doors" className="link">Doors</a>
            </div>
            <h1 className="logo">Hector Carpentry</h1>
        </div>
    )
}
