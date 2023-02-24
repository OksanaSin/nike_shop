import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import productsData from '../data/productsData';

function Home() {
    return (
        <div className="home">
            <div className="hero">
                <div className="hero-text">
                    <h1>New Arrival</h1>
                    <p>Check out the latest Nike shoes</p>
                    <Link to="/products" className="btn btn-primary">
                        View Products
                    </Link>
                </div>
                <div className="hero-image">
                    <img src="/images/nike-shoe-store-hero.jpg" alt="Nike shoe store hero" />
                </div>
            </div>
            <div className="container">
                <h2>Featured Products</h2>
                <div className="product-list">
                    {productsData.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
