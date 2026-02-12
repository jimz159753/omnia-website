import React from "react";

interface CardValueProps {
  title: string;
  image: string;
  description: string;
  styles: {
    card: React.CSSProperties;
    image: React.CSSProperties;
    title: React.CSSProperties;
    description: React.CSSProperties;
  };
}

const CardValue = ({ title, image, description, styles }: CardValueProps) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={title} height={110} style={styles.image} />
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.description}>{description}</p>
    </div>
  );
};

export default CardValue;
