import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content container">
                <h1 className="hero-title fade-in">Timeless Elegance</h1>
                <p className="hero-subtitle fade-in-delay">Discover our exclusive collection of handcrafted luxury jewellery.</p>
                <Link to="/shop" className="btn btn-primary hero-btn fade-in-delay-2">
                    Shop Collection
                </Link>
            </div>
        </section>
    );
};

export default Hero;
