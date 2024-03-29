import React, { useRef } from 'react'
import styles from "../../components/AboutMeText/Home.module.css";

export default function AboutMeText({primary, secondary}) {

  const text1 = useRef(null);
  const text2 = useRef(null);

  return (
    <div className={styles.textContainer}>
      <p className={styles.primary} ref={text1}>{primary}</p>
      <p className={styles.secondary} ref={text2}>{secondary}</p>
    </div>
  )
}