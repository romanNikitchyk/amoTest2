import React from 'react';
import styles from './LatestNews.module.css'
import {FutureOfEsports} from "../reusebleComponents/FutureOfEsports/FutureOfEsports";
import gamePad from '../../assets/images/gamePad.png'
import gamer from '../../assets/images/gamer.png'
import motherBoard from '../../assets/images/motherBoard.png'
import keyBoard from '../../assets/images/keyBoard.png'
import headPhones from '../../assets/images/headPhones.png'
import {EsportsEvents} from "../reusebleComponents/EsportsEvents/EsportsEvents";

export const LatestNews = () => {
  const events = [
    {pic:gamer,date: 'April 2, 2021', title: 'NAVI reveals s1mple fifth anniversary'},
    {pic: motherBoard, date: 'April 2, 2021', title: 'A1esports Shares new picture'},
    {pic:keyBoard, date: 'April 2, 2021', title: 'T1 unveil partnership with Razer'},
    {pic: headPhones, date: 'April 2, 2021', title: 'RX secures content partnership with'}
  ]
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.leftWrap}>
          <FutureOfEsports/>
          <div className={styles.title}>
            Latest News & Articles
          </div>
        </div>
        <div className={styles.button}>
          <p>Read More</p>
        </div>
      </div>
      <div className={styles.picsContainer}>
        <div className={styles.bigPic}>
          <img src={gamePad} alt="gamePad"/>
          <div className={styles.date}>April 2, 2021</div>
          <div className={styles.title}>Esports Group teams up with the Indianapolis Colts</div>
        </div>

        <div className={styles.smallPics}>
          {events.map((event, index)=>{
            return(<EsportsEvents
                key={index}
                img={event.pic}
                date={event.date}
                title={event.title}/>
            )
          })}
        </div>
      </div>
    </section>
  );
};

