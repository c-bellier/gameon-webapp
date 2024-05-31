import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Help from './Help';
import About from './About';
import Cart from './Cart';
import Shop from './Shop';
import "../css/topbar.css";
import { CartContext } from './CartContext';

const App = () => {

  const { cart } = useContext(CartContext);

  return (
      <Router>
      <div className="topbar">
        <Link to="/">
        <div className="logo">
          <img
            className="logo-img"
            src="/images/logo50.png"
          />
        </div>
        </Link>
        <Link to="/shop">
        <div className="tab">
          <img
            className="shopping-bag-hand"
            src="/images/shopping-bag.svg"
          />
          <div className="text-wrapper">SHOP</div>
        </div>
        </Link>
        <Link to="/about">
        <div className="tab">
          <img
            className="img"
            src="/images/information-circle.svg"
          />
          <div className="text-wrapper">ABOUT</div>
        </div>
        </Link>
        <Link to="/help">
        <div className="tab">
          <img
            className="img"
            src="/images/help-question.svg"
          />
          <div className="text-wrapper">HELP</div>
        </div>
        </Link>
        <div className="fill" />
        <Link to="/cart">
        <div className="cart">
          <img 
            className="shopping-cart" 
            src="/images/shopping-cart.svg"
          />
          <div className="cart-label">CART ({cart.reduce((total, item) => total + item.quantity, 0)})</div>
        </div>
        </Link>
      </div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
      </Routes>
      </Router>
  );
};

export default App
