import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
    return (
        <div className="card">
            <img src={product.image} alt={product.name} />
            <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p className="card-text">${product.price}</p>
                <Link to={`/products/${product.id}`} className="btn btn-primary">
                    View Product
                </Link>
            </div>
        </div>
    );
}

export default ProductCard;
