import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { ShoppingBag, ArrowLeft, Star, Truck, ShieldCheck, RefreshCw } from 'lucide-react';
import { useState } from 'react';
import './ProductDetails.css';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const product = products.find(p => p.id === parseInt(id));
    const [activeImage, setActiveImage] = useState(0);

    if (!product) {
        return (
            <div className="container section text-center">
                <h2>Product not found</h2>
                <button onClick={() => navigate('/shop')} className="btn btn-primary mt-4">
                    Back to Shop
                </button>
            </div>
        );
    }

    const handleAddToCart = () => {
        addToCart(product);
        // Optional: Toast notification
    };

    const handleBuyNow = () => {
        addToCart(product);
        navigate('/cart');
    };

    return (
        <div className="product-details-page container section">
            <button onClick={() => navigate(-1)} className="back-btn">
                <ArrowLeft size={18} /> Back
            </button>

            <div className="product-details-grid">
                {/* Product Images */}
                <div className="product-gallery">
                    <div className="main-image-wrapper">
                        <img src={product.image} alt={product.name} className="main-image" />
                    </div>
                    {/* Mock secondary images (using same generic one for demo) */}
                    <div className="thumbnail-list">
                        {[product.image, product.image, product.image].map((img, index) => (
                            <button
                                key={index}
                                className={`thumbnail-btn ${activeImage === index ? 'active' : ''}`}
                                onClick={() => setActiveImage(index)}
                            >
                                <img src={img} alt={`View ${index + 1}`} />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div className="product-info-column">
                    <span className="product-category-tag">{product.category}</span>
                    <h1 className="details-title">{product.name}</h1>

                    <div className="rating-container">
                        <div className="stars">
                            <Star size={16} fill="#C9A24D" color="#C9A24D" />
                            <Star size={16} fill="#C9A24D" color="#C9A24D" />
                            <Star size={16} fill="#C9A24D" color="#C9A24D" />
                            <Star size={16} fill="#C9A24D" color="#C9A24D" />
                            <Star size={16} fill="#C9A24D" color="#C9A24D" />
                        </div>
                        <span className="rating-text">(12 Reviews)</span>
                    </div>

                    <div className="price-container">
                        <span className="current-price">${product.price.toLocaleString()}</span>
                    </div>

                    <p className="product-description">{product.description}</p>

                    <div className="action-buttons">
                        <button className="btn btn-outline flex-1" onClick={handleAddToCart}>
                            <ShoppingBag size={18} style={{ marginRight: '8px' }} /> Add to Cart
                        </button>
                        <button className="btn btn-primary flex-1" onClick={handleBuyNow}>
                            Buy Now
                        </button>
                    </div>

                    <div className="features-list">
                        <div className="feature-item">
                            <Truck size={20} />
                            <span>Free specialized shipping</span>
                        </div>
                        <div className="feature-item">
                            <ShieldCheck size={20} />
                            <span>2 Year Warranty</span>
                        </div>
                        <div className="feature-item">
                            <RefreshCw size={20} />
                            <span>30 Day Returns</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
