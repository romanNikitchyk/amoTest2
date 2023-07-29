import React from 'react';
import styles from './Landing.module.css'
import {Header} from "../Header/Header";
import {FirstSection} from "../FirstSection/FirstSection";
export const Landing = () => {
  return (
    <div className={styles.landing}>
      <Header/>
      <FirstSection/>
    </div>
  );
};

