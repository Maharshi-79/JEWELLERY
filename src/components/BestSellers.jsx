import { products } from '../data/mockData';
import ProductCard from './ProductCard';
import './BestSellers.css'; // Will reuse or create minimal styles

const BestSellers = () => {
    const bestSellers = products.filter(p => p.isBestSeller).slice(0, 4);

    return (
        <section className="section best-sellers">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Best Sellers</h2>
                    <p className="section-subtitle">Our most coveted pieces</p>
                </div>

                <div className="product-grid">
                    {bestSellers.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BestSellers;
