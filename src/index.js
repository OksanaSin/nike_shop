import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/products">
                <ProductList />
            </Route>
        </Switch>
    </Router>,
    document.getElementById('root')
);
