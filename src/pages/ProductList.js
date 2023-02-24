import React, {useState} from 'react';
import {Col, Container, Form, Row} from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import productsData from '../data/productsData';

const ProductList = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredProducts = productsData.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Our Products</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Control
                        type="text"
                        placeholder="Search by name"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </Col>
            </Row>
            <Row className="my-4">
                {filteredProducts.map((product) => (
                    <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <ProductCard product={product}/>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProductList;
