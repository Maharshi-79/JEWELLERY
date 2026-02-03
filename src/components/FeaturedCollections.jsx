import { Link } from 'react-router-dom';
import { categories } from '../data/mockData';
import './FeaturedCollections.css';

const FeaturedCollections = () => {
    return (
        <section className="section featured-collections">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Featured Collections</h2>
                    <p className="section-subtitle">Explore our curated selections</p>
                </div>

                <div className="collections-grid">
                    {categories.map((category) => (
                        <Link to={`/shop?category=${category.id}`} key={category.id} className="collection-card">
                            <div className="collection-image-wrapper">
                                <img src={category.image} alt={category.name} className="collection-image" />
                                <div className="collection-overlay">
                                    <h3 className="collection-name">{category.name}</h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCollections;
