
import React from 'react';
import styles from './HeroSection.module.css';

export const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/9646fb5565f8172ef6af06ca47bbe26d58bd46ae?placeholderIfAbsent=true"
            className={styles.backgroundImage}
            alt="Coffee background"
          />
          <div className={styles.overlay}></div>
          
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              elza coffee
            </h1>
            <p className={styles.subtitle}>
              Today's good mood is sponsored by coffee
              <br />
              search for your coffee now
            </p>
            <div className={styles.buttonContainer}>
              <button className={styles.primaryButton}>
                <span>shop now</span>
              </button>
              <button className={styles.secondaryButton}>
                <span>catalog</span>
              </button>
            </div>
          </div>
          
          <article className={styles.coffeeCard}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/16d4724511fc90475f597d74b08fad0cb4c5a740?placeholderIfAbsent=true"
              className={styles.coffeeImage}
              alt="Coffee cup"
            />
            <div className={styles.coffeeTextContainer}>
              <h2 className={styles.coffeeTitle}>
                but first coffee
              </h2>
              <button className={styles.coffeeButton}>
                <span>hurry up</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/00ace8551974faa0f57e0d35fc40114156884e30?placeholderIfAbsent=true"
                  className={styles.arrowIcon}
                  alt="Arrow icon"
                />
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
