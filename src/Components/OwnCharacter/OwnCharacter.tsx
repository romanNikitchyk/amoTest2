import React from 'react';
import styles from './OwnCharacter.module.css'
import solder from '../../assets/images/solder2.png'
import character1 from '../../assets/images/character1.png'
import character2 from '../../assets/images/character2.png'
import character3 from '../../assets/images/character3.png'
import {FutureOfEsports} from "../reusebleComponents/FutureOfEsports/FutureOfEsports";

export const OwnCharacter = () => {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <img src={solder} alt="solder2"/>
      </div>
      <div className={styles.right}>
        <FutureOfEsports/>
        <div className={styles.title}>
          Customize your Own Character
        </div>
        <div className={styles.text}>
          Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et
          quasi architecto beatae.
        </div>
        <div className={styles.pics}>
          <img src={character1} alt="character1"/>
          <img src={character2} alt="character2"/>
          <img src={character3} alt="character3"/>
        </div>
        <div className={styles.picContainer}>
        </div>
      </div>
    </section>
  );
};

