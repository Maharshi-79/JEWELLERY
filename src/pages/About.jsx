import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="about-hero">
                <div className="container">
                    <h1>Our Story</h1>
                </div>
            </div>

            <section className="container section about-content">
                <div className="about-grid">
                    <div className="about-text">
                        <h2>Crafting Elegance Since 1990</h2>
                        <p>
                            Founded in the heart of New York, Luxe Gem began with a simple mission: to create timeless jewellery that celebrates life's most precious moments.
                        </p>
                        <p>
                            We believe that jewellery is more than just an accessory; it's a reflection of your unique story. Each piece in our collection is meticulously handcrafted by master artisans using only the finest ethically sourced materials.
                        </p>
                        <p>
                            From the sparkle of a diamond to the warm glow of gold, our creations are designed to be cherished for generations.
                        </p>
                    </div>
                    <div className="about-image">
                        <img src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Jewellery making" />
                    </div>
                </div>

                <div className="values-section">
                    <h2>Our Values</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <h3>Quality</h3>
                            <p>Uncompromising standards in every detail.</p>
                        </div>
                        <div className="value-card">
                            <h3>Integrity</h3>
                            <p>Ethical sourcing and transparent pricing.</p>
                        </div>
                        <div className="value-card">
                            <h3>Artistry</h3>
                            <p>Celebrating the beauty of handcrafted design.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
