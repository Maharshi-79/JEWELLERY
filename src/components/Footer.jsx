import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-section brand">
                    <Link to="/" className="footer-logo">LUXE GEM</Link>
                    <p className="footer-text">
                        Crafting timeless elegance for the modern soul. Our jewellery is designed to make every moment precious and every memory everlasting.
                    </p>
                    <div className="social-icons">
                        <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                        <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                    </div>
                </div>

                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shop">Shop Collection</Link></li>
                        <li><Link to="/about">Our Story</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <ul>
                        <li>
                            <MapPin size={18} />
                            <span>123 Fifth Avenue, New York, NY 10160</span>
                        </li>
                        <li>
                            <Mail size={18} />
                            <span>contact@luxegem.com</span>
                        </li>
                        <li>
                            <Phone size={18} />
                            <span>+1 (555) 123-4567</span>
                        </li>
                    </ul>
                </div>

                <div className="footer-section newsletter">
                    <h3>Newsletter</h3>
                    <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Enter your email" required />
                        <button type="submit" className="btn btn-primary">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Luxe Gem Jewellery. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
