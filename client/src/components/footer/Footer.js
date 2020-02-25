import React from 'react';

// STYLES
import './styles/footer.scss';

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-links-container" >
                {/* <div className="page-links-container" >
                    <a className="link" href="#">Home</a>
                    <a className="link" href="#">About</a>
                    <a className="link" href="#">Kitchens</a>
                    <a className="link" href="#">Stairs</a>
                    <a className="link" href="#">Beams</a>
                </div> */}
                <div className="social-links-container" >
                    <div className="social-link">
                        <img src="https://seeklogo.com/images/I/instagram-logo-A807AD378B-seeklogo.com.png"/>
                    </div>
                    <div className="social-link">
                        <img src="https://image.flaticon.com/icons/png/512/59/59439.png"/>
                    </div>
                </div>
            </div>
            <p>HectorCarpentry.com © 2020 </p>
        </div>
    )
}
