import Hero from '../components/Hero';
import FeaturedCollections from '../components/FeaturedCollections';
import BestSellers from '../components/BestSellers';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <>
            <Hero />
            <FeaturedCollections />
            <BestSellers />
            <Testimonials />
        </>
    );
};

export default Home;
