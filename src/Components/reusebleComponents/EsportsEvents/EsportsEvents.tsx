import React from 'react';
import styles from './EsportsEvents.module.css'
type EsportsEventsPropsType = {
  img:string
  date:string
  title: string
}
export const EsportsEvents = (props:EsportsEventsPropsType) => {
  const {img, date, title} = props
  return (
    <div className={styles.container}>
      <img src={img} alt="eventPic"/>
      <span className={styles.date}>{date}</span>
      <span className={styles.title}>{title}</span>
    </div>
  );
};

