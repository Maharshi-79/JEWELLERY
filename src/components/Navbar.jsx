import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { cartCount } = useCart();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <Link to="/" className="logo">
                    LUXE GEM
                </Link>

                {/* Desktop Menu */}
                <div className="nav-links desktop-only">
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                <div className="nav-icons">
                    <button className="icon-btn" aria-label="Search">
                        <Search size={22} />
                    </button>
                    <Link to="/cart" className="icon-btn cart-icon" aria-label="Cart">
                        <ShoppingBag size={22} />
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </Link>
                    <button className="icon-btn mobile-only" onClick={toggleMenu} aria-label="Menu">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="mobile-menu">
                    <Link to="/" onClick={toggleMenu}>Home</Link>
                    <Link to="/shop" onClick={toggleMenu}>Shop</Link>
                    <Link to="/about" onClick={toggleMenu}>About Us</Link>
                    <Link to="/contact" onClick={toggleMenu}>Contact</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
