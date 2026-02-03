import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="container section">
                <h1 className="text-center mb-5">Contact Us</h1>

                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h2>Get In Touch</h2>
                        <p className="contact-intro">
                            Have a question about our collections or need assistance with your order? We're here to help.
                        </p>

                        <ul className="info-list">
                            <li>
                                <MapPin className="contact-icon" />
                                <div>
                                    <strong>Store Location</strong>
                                    <p>123 Fifth Avenue, New York, NY 10160</p>
                                </div>
                            </li>
                            <li>
                                <Phone className="contact-icon" />
                                <div>
                                    <strong>Phone</strong>
                                    <p>+1 (555) 123-4567</p>
                                </div>
                            </li>
                            <li>
                                <Mail className="contact-icon" />
                                <div>
                                    <strong>Email</strong>
                                    <p>contact@luxegem.com</p>
                                </div>
                            </li>
                            <li>
                                <Clock className="contact-icon" />
                                <div>
                                    <strong>Hours</strong>
                                    <p>Mon-Fri: 10am - 8pm</p>
                                    <p>Sat-Sun: 11am - 6pm</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="contact-form-container">
                        <h2>Send a Message</h2>
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <label>Subject</label>
                                <input type="text" placeholder="Subject" />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows="5" placeholder="Your Message" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
