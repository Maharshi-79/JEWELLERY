import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/mockData';
import ProductCard from '../components/ProductCard';
import { Filter, X } from 'lucide-react';
import './Shop.css';

const Shop = () => {
    const [searchParams] = useSearchParams();
    const categoryParam = searchParams.get('category');

    const [filteredProducts, setFilteredProducts] = useState(products);
    const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'All');
    const [priceRange, setPriceRange] = useState(5000);
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    useEffect(() => {
        let result = products;

        // Filter by Category
        if (selectedCategory !== 'All') {
            result = result.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());
        }

        // Filter by Price
        result = result.filter(p => p.price <= priceRange);

        setFilteredProducts(result);
    }, [selectedCategory, priceRange]);

    // Update selected category if URL param changes
    useEffect(() => {
        if (categoryParam) {
            setSelectedCategory(categoryParam);
        }
    }, [categoryParam]);

    const categories = ['All', 'Gold', 'Diamond', 'Silver'];

    return (
        <div className="shop-page container section">
            <div className="shop-header">
                <h1>Shop Collection</h1>
                <button
                    className="mobile-filter-btn btn btn-outline"
                    onClick={() => setIsMobileFilterOpen(true)}
                >
                    <Filter size={18} style={{ marginRight: '8px' }} /> Filters
                </button>
            </div>

            <div className="shop-layout">
                {/* Sidebar Filters */}
                <aside className={`shop-sidebar ${isMobileFilterOpen ? 'open' : ''}`}>
                    <div className="sidebar-header mobile-only">
                        <h3>Filters</h3>
                        <button onClick={() => setIsMobileFilterOpen(false)}>
                            <X size={24} />
                        </button>
                    </div>

                    <div className="filter-group">
                        <h3>Category</h3>
                        <div className="category-list">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    className={`category-btn ${selectedCategory.toLowerCase() === cat.toLowerCase() ? 'active' : ''}`}
                                    onClick={() => {
                                        setSelectedCategory(cat);
                                        setIsMobileFilterOpen(false);
                                    }}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="filter-group">
                        <h3>Max Price: ${priceRange.toLocaleString()}</h3>
                        <input
                            type="range"
                            min="0"
                            max="5000"
                            step="100"
                            value={priceRange}
                            onChange={(e) => setPriceRange(Number(e.target.value))}
                            className="price-range"
                        />
                        <div className="price-labels">
                            <span>$0</span>
                            <span>$5,000+</span>
                        </div>
                    </div>
                </aside>

                {/* Product Grid */}
                <main className="shop-grid">
                    {filteredProducts.length > 0 ? (
                        <div className="product-grid">
                            {filteredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="no-products">
                            <p>No products found matching your criteria.</p>
                            <button
                                className="btn btn-outline"
                                onClick={() => {
                                    setSelectedCategory('All');
                                    setPriceRange(5000);
                                }}
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Shop;
