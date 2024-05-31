import React from 'react';
import { Helmet } from 'react-helmet';
import '../css/about.css';

const About = () => {
  return (
    <div className="about-container">
      <Helmet>
        <title>GameOn! - About</title>
      </Helmet>
      <h1>ABOUT US</h1>
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>At GameOn!, our mission is to provide the best sport experience possible. We strive to bring the latest and greatest products to our customers, ensuring a fun and enjoyable experience for athletes of all ages.</p>
      </section>
      <section className="about-section">
        <h2>Our History</h2>
        <p>GameOn! was founded in 2020 by a group of passionate athletes who wanted to create a one-stop shop for all sport needs. Since then, we have grown into a community of athletes who share a love for sport practice.</p>
      </section>
      <section className="about-section">
        <h2>Meet the Team</h2>
        <p>Our team is made up of experienced professionals who are dedicated to providing the best service possible. From our customer support team to our developers, everyone at GameOn! is here to help you have the best sport experience.</p>
      </section>
      <section className="about-section">
        <h2>Contact Us</h2>
        <p>If you have any questions or concerns, feel free to <a href="/contact">contact us</a>. We're here to help!</p>
      </section>
    </div>
  );
};

export default About;

