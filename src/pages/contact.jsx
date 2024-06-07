import React, {useState} from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import model from '../images/model.png';
import tick from '../images/tick.jpg';

const Contact = () => {
    const navigate = useNavigate();
    const [popupVisible, setPopupVisible] = useState(false);

    const openPopup = () => {
        setPopupVisible(true);
    };

    const closePopup = () => {
        setPopupVisible(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        openPopup();
    };

    return (
        <div>
            <div class="header">
            <Navbar  page={"contact"} />
                <div class="content">
                    <div class="lfttxt">

                        <h1 className="saira-condensed-bold">contact</h1>
                        <p className="saira-condensed-regular">
                            Aslam Garments is a leading manufacturer of garments in Tamil Nadu.
                            We have been in the business for over 20 years and have built a
                            reputation for quality and reliability. Our products are made from
                            the finest materials and are designed to last. We offer a wide range
                            of garments for all age ranged people.
                        </p>
                        <button onClick={() => navigate('/shop/')}>Shop Now</button>
                        <button onClick={() => navigate('/#category')}>Explore</button>
                    </div>
                    <img src={model} alt="Model Images" />
                </div>
            </div>

            <div className="contact-info">
                <div className="contact-item">
                 <span className="material-symbols-outlined">location_on</span>
                    <p>43 Eachanari Rd, Tirupur 1234</p>
                </div>
                <div className="contact-item">
                <span className="material-symbols-outlined">email</span>
                    <p>aslamgarments1@.com</p>
                </div>
                <div className="contact-item">
                <span className="material-symbols-outlined">phone</span>
                    <p>+91 12345 67890</p>
                </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <input type="text" name="first-name" placeholder="First name" required />
                    <input type="text" name="last-name" placeholder="Last name" required />
                </div>
                <input type="email" name="email" placeholder="Email address" required />
                <textarea name="message" placeholder="Message"></textarea>
                <button type="submit">Send Message</button>
            </form>
            {popupVisible && (
                <div className="popup open-popup" id="popup">
                  <img src={tick} alt="success" />
                    <h2>Thank You</h2>
                    <p>Your details have been successfully submitted. Thanks!</p>
                    <button type="button" onClick={closePopup}>OK</button>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default Contact;