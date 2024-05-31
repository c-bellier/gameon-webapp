import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { CartContext } from './CartContext';
import '../css/cart.css';
import { createReceipt } from './ApiUtils';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const getAvailableSizes = (product) => {
    let sizes = [];
    for (let stock of product.sizeChart) {
      if (stock.quantity > 0) {
        sizes.push(stock.size);
      }
    }
    return sizes;
  }

  const handleQuantityChange = (product, increment) => {
    const maxQuantity = getMaxQuantity(product, product.selectedSize);
    const newQuantity = product.quantity + increment;
    const quantity = Math.min(newQuantity, maxQuantity);
    updateQuantity(product, quantity);
  };

  const handleSizeChange = (product, newSize) => {
    product.selectedSize = newSize;
    const maxQuantity = getMaxQuantity(product, newSize);
    const newQuantity = Math.min(product.quantity, maxQuantity);
    updateQuantity(product, newQuantity);
  };

  const getMaxQuantity = (product, size) => {
    const sizeItem = product.sizeChart?.find(sizeChart => sizeChart.size === size);
    return sizeItem ? sizeItem.quantity : 0;
  }

  const createReceiptJSON = (cart, customer) => {
    const receipt = {
      reference: new Date().toISOString() + cart.map(item => item.reference + item.quantity).join(''),
      products: cart.map(item => ({
        product: item._id,
        size: item.selectedSize,
        quantity: item.quantity,
      })),
      totalAmount: cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2),
      customer: customer,
    };
    console.log('Receipt JSON:', receipt);
    return receipt;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const customer = {
      name: e.target[0].value,
      email: e.target[1].value,
      phone: e.target[2].value,
    };
    console.log(await createReceipt(createReceiptJSON(cart, customer)));
    alert('Proceeding to payment...');
    cart.forEach(item => removeFromCart(item.reference));
  }

  return (
    <div className="cart-container">
      <Helmet>
        <title>GameOn! - Cart</title>
      </Helmet>
      <h2>Your shopping cart</h2>
      {cart.length === 0 ? (
        <p>The cart is empty</p>
      ) : (
        <>
          <div className="cart-header">
            <span>Product</span>
            <span>Brand</span>
            <span>Price</span>
            <span>Size</span>
            <span>Quantity</span>
          </div>
          {cart.map(item => (
            <div key={item.reference} className="cart-item">
            <span>{item.name}</span>
            <span>{item.brand}</span>
            <span>{item.price.toFixed(2)} €</span>
            <span>
              <select
              className='size-select'
              defaultValue={item.sizeChart.find(stock => stock.quantity > 0)?.size}
              onChange={(e) => handleSizeChange(item, e.target.value)}
              >
                {getAvailableSizes(item).map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </span>
            <span>
                <button className='qty-btn' onClick={() => handleQuantityChange(item, -1)} disabled={item.quantity <= 1}>-</button>
                <span className='quantity'>{item.quantity}</span>
                <button className='qty-btn' onClick={() => handleQuantityChange(item, 1)} disabled={item.quantity >= getMaxQuantity(item, item.selectedSize)}>+</button>
            </span>
            <button className='rmv-btn' onClick={() => removeFromCart(item.reference)}>Remove</button>
          </div>
          ))}
          <div className='totals'>
            Total : {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)} €
             | {cart.reduce((total, item) => total + item.quantity, 0)} item{cart.reduce((total, item) => total + item.quantity, 0) > 1 ? 's' : '' } 
          </div>
          <form onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <div className='inputs'>
              <input type='text' placeholder='Your name' required />
              <input type='email' placeholder='Your email' required />
              <input type='text' placeholder='Your phone number' required />
            </div>
          <button className="checkout-button" type="submit">Proceed to payment</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Cart;
