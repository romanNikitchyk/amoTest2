import React from 'react';
import styles from './Header.module.css'
import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/cart.svg'

export const Header = () => {
  const buttons = ['Home', 'About', 'Team', 'Shop', 'Pages']
  return (
    <header className={styles.header}>

      <img src={logo} alt="logo"/>
      <div className={styles.navigation}>
        {buttons.map((b)=>{
          return <p>{b}</p>
        })}
      </div>
      <div className={styles.contactUs}>
        <img className={styles.cart} src={cart} alt='cart'/>
        <p>Contact Us</p>
      </div>
    </header>
  );
};

