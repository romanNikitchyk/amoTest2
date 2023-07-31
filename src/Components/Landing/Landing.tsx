import React from 'react';
import styles from './Landing.module.css'
import solder from '../../assets/images/solder.png'
import {FutureOfEsports} from "../reusebleComponents/FutureOfEsports/FutureOfEsports";

export const Landing = () => {
  return (
    <section className={styles.landing}>
      <div className={styles.container}>
        <div className={styles.socialLinks}>
          <p>TWITCH</p> <p>INSTAGRAM</p> <p>FACEBOOK</p>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <FutureOfEsports/>
            <div className={styles.title}>
              Unleash the Next Generation of Gaming
            </div>
            <div className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Felis, nec donec in morbi pulvinar. Enim non
              pulvinar neque.
            </div>
            <div className={styles.buttons}>
              <p>Explore More</p>
              <p className={styles.teamButton}>View our team</p>
            </div>
          </div>
          <div className={styles.right}>
            <img src={solder} alt="solder"/>
          </div>
        </div>
      </div>
    </section>
  );
};

