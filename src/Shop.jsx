import React, { useState, useEffect, useContext } from 'react';
import '../css/shop.css';
import { Helmet } from 'react-helmet';
import { CartContext } from './CartContext';
import { getAllProducts } from './ApiUtils';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('ALL');
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    getAllProducts().then((data) => setProducts(data));
  }, []);

  const formatPrice = (price) => {
    return `${price.toFixed(2)} €`;
  };

  const handleSort = (criteria) => {
    setSortCriteria(criteria);
  };

  const getSortedProducts = () => {
    if (sortCriteria === 'ALL') {
      return products;
    }
    return products.filter(product => product.category.toUpperCase() === sortCriteria);
  };

  const sortedProducts = getSortedProducts();

  const formatSizes = (sizeChart) => {
    if (!sizeChart) {
      return '';
    } else if (sizeChart.every(sizeItem => sizeItem.quantity === 0) || sizeChart.length === 0) {
      return 'Out of stock';
    }
    return sizeChart
      .filter(sizeItem => sizeItem.quantity > 0)
      .map(sizeItem => sizeItem.size)
      .join(', ');
  };

  const isOutOfStock = (sizeChart) => {
    return !sizeChart || sizeChart.every(sizeItem => sizeItem.quantity === 0);
  };

  return (
    <div className="content">
      <Helmet>
        <title>GameOn! - Shop</title>
      </Helmet>
      <div className="subbar">
        <div className="subbar-label" onClick={() => handleSort('ALL')}>ALL</div>
        <div className="subbar-label" onClick={() => handleSort('CHILD')}>CHILD</div>
        <div className="subbar-label" onClick={() => handleSort('JUNIOR')}>JUNIOR</div>
        <div className="subbar-label" onClick={() => handleSort('SENIOR')}>SENIOR</div>
      </div>
      <div className="sub-content">
        <div className="products">
          {sortedProducts.map((product) => (
            <div className="product" key={product.reference}>
              <div className="image-container">
                <img className="image" alt="image" src={`/images/${product.reference}.jpg`} />
              </div>
              <div className="infos">
                <div className="text-wrapper">{product.name}</div>
                <div className="div">{product.brand}</div>
                <p className="div">{formatSizes(product.sizeChart)}</p>
                <div className="text-wrapper-2">{formatPrice(product.price)}</div>
                <button className="btn-add-to-cart" disabled={isOutOfStock(product.sizeChart)} onClick={() => addToCart(product)}>
                  <img
                    className="shopping-cart-add"
                    src={isOutOfStock(product.sizeChart) ? "/images/warning-triangle.svg" : "/images/shopping-cart-add.svg"}
                  />
                  <div className="text-wrapper-3">
                    {isOutOfStock(product.sizeChart) ? 'Out of Stock' : 'Add to cart'}
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;