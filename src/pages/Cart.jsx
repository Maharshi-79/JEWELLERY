import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import './Cart.css';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

    if (cart.length === 0) {
        return (
            <div className="cart-page container section cart-empty">
                <h1 className="cart-title">Shopping Cart</h1>
                <p>Your cart is currently empty.</p>
                <Link to="/shop" className="btn btn-primary mt-4">
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="cart-page container section">
            <h1 className="cart-title">Shopping Cart</h1>

            <div className="cart-layout">
                {/* Cart Items */}
                <div className="cart-items">
                    <div className="cart-header grid-header mobile-hidden">
                        <span>Product</span>
                        <span>Price</span>
                        <span>Quantity</span>
                        <span>Total</span>
                        <span></span>
                    </div>

                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <div className="item-product">
                                <Link to={`/product/${item.id}`} className="item-image">
                                    <img src={item.image} alt={item.name} />
                                </Link>
                                <div className="item-details">
                                    <Link to={`/product/${item.id}`} className="item-name">{item.name}</Link>
                                    <span className="item-category">{item.category}</span>
                                </div>
                            </div>

                            <div className="item-price mobile-label" data-label="Price">
                                ${item.price.toLocaleString()}
                            </div>

                            <div className="item-quantity mobile-label" data-label="Quantity">
                                <div className="quantity-controls">
                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                        <Minus size={14} />
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                        <Plus size={14} />
                                    </button>
                                </div>
                            </div>

                            <div className="item-total mobile-label" data-label="Total">
                                ${(item.price * item.quantity).toLocaleString()}
                            </div>

                            <div className="item-actions">
                                <button onClick={() => removeFromCart(item.id)} className="remove-btn" aria-label="Remove">
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className="cart-actions-row">
                        <button className="btn btn-outline text-sm" onClick={clearCart}>Clear Cart</button>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="cart-summary">
                    <h2>Order Summary</h2>
                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>${cartTotal.toLocaleString()}</span>
                    </div>
                    <div className="summary-row">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <div className="summary-total">
                        <span>Total</span>
                        <span>${cartTotal.toLocaleString()}</span>
                    </div>
                    <button className="btn btn-primary checkout-btn full-width">
                        Proceed to Checkout <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
