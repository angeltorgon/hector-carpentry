import React from 'react';

// STYLES
import './styles/contact.scss';

export default function Contact() {
    return (
        <div class="contact-container" id="contact">
            <h1 class="section-title">Get a Quote!</h1>
            <form data-netlify="true" class="contact-form" netlify>
                <div class="contact-top-inputs-container">
                    <div className="top-input-container left">
                        <label>Name</label>
                        <input type="text" class="contact-input top-input" placeholder="" />
                    </div>
                    <div className="top-input-container">
                        <label>Email</label>
                        <input type="text" class="contact-input top-input right" placeholder="" />
                    </div>
                </div>
                <div class="contact-bottom-inputs-container">
                    <div className="bottom-input-container">
                        <label>Subject</label>
                        <input type="text" className="contact-input" placeholder="" />
                    </div>
                    <div className="bottom-input-container" >
                        <label>Message</label>
                        <textarea className="contact-input textarea" placeholder=""></textarea>
                    </div>
                </div>
                <div class="contact-button-container">
                    <button type="submit" class="contact-button">Send</button>
                    <button type="reset" class=" contact-button clear-button">Clear Form</button>
                </div>
            </form>
        </div>
    )
}
