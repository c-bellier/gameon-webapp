import React from 'react';
import { Helmet } from 'react-helmet';
import '../css/home.css'; // Assurez-vous de créer et styliser ce fichier CSS

const Home = () => {
  return (
    <div className="home-container">
      <Helmet>
        <title>GameOn! - Home</title>
      </Helmet>
      <header className="home-banner">
        <img src="/images/banner.png" alt="GameOn Banner" className="banner-image" />
        <h1 className="banner-title">Welcome to GameOn!</h1>
        <p className="banner-subtitle">Your ultimate destination for sport gear</p>
      </header>
      <section className="home-section">
        <h2>New Arrivals</h2>
        <p>Check out the latest and greatest in sport gear.</p>
        <button className="home-button" onClick={() => window.location.href='/shop'}>Shop Now</button>
      </section>
      <section className="home-section">
        <h2>Special Offers</h2>
        <p>Don't miss our exclusive deals and discounts.</p>
        <button className="home-button" onClick={() => window.location.href='/shop'}>View Offers</button>
      </section>
      <section className="home-section">
        <h2>Why Choose GameOn?</h2>
        <p>We offer the best products, unbeatable prices, and top-notch customer service.</p>
      </section>
    </div>
  );
};

export default Home;
