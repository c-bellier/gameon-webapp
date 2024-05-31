import React from 'react';
import { Helmet } from 'react-helmet';
import '../css/help.css';  // Assurez-vous de créer et styliser ce fichier CSS

const Help = () => {
  return (
    <div className="help-container">
      <Helmet>
        <title>GameOn! - Help</title>
      </Helmet>
      <h1>HELP & SUPPORT</h1>
      <section className="help-section">
        <h2>Frequently Asked Questions (FAQ)</h2>
        <p>Find answers to the most common questions about GameOn! in our <a href="/faq">FAQ section</a>.</p>
      </section>
      <section className="help-section">
        <h2>Customer Support</h2>
        <p>Need assistance? Our customer support team is here to help. You can reach us via <a href="/contact">contact form</a> or call us at (123) 456-7890.</p>
      </section>
      <section className="help-section">
        <h2>Account Management</h2>
        <p>Learn how to manage your account, update your profile, and change your settings in our <a href="/account">Account Management</a> page.</p>
      </section>
      <section className="help-section">
        <h2>Technical Support</h2>
        <p>If you encounter any technical issues, please visit our <a href="/technical-support">Technical Support</a> page for troubleshooting tips and guides.</p>
      </section>
      <section className="help-section">
        <h2>Billing & Payments</h2>
        <p>For questions related to billing and payments, visit our <a href="/billing">Billing & Payments</a> page.</p>
      </section>
    </div>
  );
};

export default Help;
