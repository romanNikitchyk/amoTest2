import React from 'react';
import styles from './Footer.module.css'
import logo from '../../assets/images/logo.svg'

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <img src={logo} alt="logo"/>
          <div>Lorem ipsum dolor amet,
            consectetur adipiscing elit.
            Eget nisl nunc quam ac sed turpis volutpat.
            Cursus sed massa non .
          </div>
        </div>
        <div>
          <h3>Menu Item</h3>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Shop</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h3>Other Pages</h3>
          <ul>
            <li>Styleguide</li>
            <li>Changelog</li>
            <li>licenses</li>
            <li>Team</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

