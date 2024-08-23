// src/components/HomePage.js
"use client";

import styles from "./HomePage.module.css"; // Import the CSS module

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {/* Image with fixed height (30% of viewport) */}
        <img
          src="/images/6.jpeg" // Path to your image in the public folder
          alt="Example Image"
          className={styles.image}
        />
        <div className={styles.overlayText}>Explore Our Destinations
        <div className={styles.optionsContainer}>
        <div className={styles.optionItem}>When</div>
        <div className={styles.optionItem}>Who</div>
        <div className={styles.optionItem}>More+</div>
      
    </div>
        </div>
      
     
      </div>
      
      {/* Rectangular container with 3 options */}
     

    </div>
  );
};

export default HomePage;
