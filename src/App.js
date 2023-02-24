import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Product from './pages/Product';

function App() {
  return (
      <Router>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product/:id" component={Product} />
        </Switch>
      </Router>
  );
}

export default App;
