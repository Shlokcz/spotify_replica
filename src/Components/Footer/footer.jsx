import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  const date = new Date();
  return (
    <div className={styles.footer}>
      <div className={styles.line}></div>
      <p>@ {date.getFullYear()} Spotify AB</p>
    </div>
  );
};

export default Footer;
