
import React from 'react';
import styles from './Services.module.css';

export const Services = () => {
  const services = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/9784ae9497007810f507d4c0e0f02d8f3f57fb15?placeholderIfAbsent=true",
      title: "equipment"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/416fdd5e04b218d8db568722630a2d240c027331?placeholderIfAbsent=true",
      title: "type of coffee"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/1a50b27db5170fda12e03c072095fb3d8b223f6a?placeholderIfAbsent=true",
      title: "take a way"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/224c8c56702f2289237a19f09dd10fd167fcc2d3?placeholderIfAbsent=true",
      title: "beans variant"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/04530c39b9b77fa15117b87ea299b73f0beec3db?placeholderIfAbsent=true",
      title: "pastry"
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          services
        </h2>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <article
              key={index}
              className={styles.serviceCard}
            >
              <img
                src={service.icon}
                className={styles.serviceIcon}
                alt={`${service.title} icon`}
              />
              <div className={styles.serviceTitle}>
                {service.title}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
