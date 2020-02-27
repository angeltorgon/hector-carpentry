import React from 'react';

// STYLES
import './styles/footer.scss';

export default function Footer() {
    return (
        <div className="footer-container">
            <p className="contact-message">Email - Text - Call - DM</p>
            <p className="contact-info">hectorcarpentryhq@gmail.com </p>
            <p className="contact-info">832-407-4390</p>
            <div className="footer-links-container" >
                <div className="social-link">
                    <img src="https://seeklogo.com/images/I/instagram-logo-A807AD378B-seeklogo.com.png"/>
                </div>
                <div className="social-link">
                    <img src="https://image.flaticon.com/icons/png/512/59/59439.png"/>
                </div>
            </div>
            <p>hectorcarpentry.com©2020 All rights reserved.</p>
        </div>
    )
}
