'use client';
import styles from './page.module.css';
import Tasks from '@/components/Tasks';
import { useState } from 'react';

export default function Home() {
  const [detailBox, setDetailBox] = useState(null);
  return (
    <div className={styles.main}>
      <Tasks
        detailBox={detailBox}
        setDetailBox={setDetailBox}
      />

      <div className={detailBox ? styles.detailBoxShow : null}>
        <button className={styles.closeButton} onClick={() => {
          setDetailBox(null);
        }}>X</button>
        <div className={styles.detailBoxName} >{detailBox ? detailBox.task.name : null}</div>
        <div className={styles.detailBoxDescription}>{detailBox ? detailBox.task.description : null}</div>
      </div>
    </div>
  );
}
