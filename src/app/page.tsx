import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Image 
        src="/under-construction.png" 
        alt="Under Construction" 
        width={900} 
        height={300} 
        className={styles.image} 
      />
      <h1 className={styles.title}>Site Under Construction</h1>
      <p className={styles.description}>
        We’re working hard to bring you an amazing experience. Stay tuned!
      </p>
    </div>
  );
};

export default Home;
