import React from 'react';

// STYLES
import './styles/contact.scss';

export default function Contact() {
    return (
        <div class="contact-container" id="contact">
            <h1 class="section-title">Get a Quote!</h1>
            <form data-netlify="true" class="contact-form" netlify>
                <div class="contact-top-inputs-container">
                <input type="text" class="contact-input top-inputs left" placeholder="Name" />
                <input type="text" class="contact-input top-inputs right" placeholder="Email" />
                </div>
                <div class="contact-bottom-inputs-container">
                <input type="text" class="contact-input" placeholder="Subject" />
                <textarea class="contact-input textarea" placeholder="Message"></textarea>
                </div>
                <div class="contact-button-container">
                <button type="submit" class="contact-button">Send</button>
                <button type="reset" class=" contact-button clear-button">Clear Form</button>
                </div>
            </form>
        </div>
    )
}
