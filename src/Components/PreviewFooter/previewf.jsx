import React from 'react';
import styles from "./previewf.module.css";

const Previewf = () => {
  return (
    <div className={styles.previewf}>
        <div className={styles.paras}>
            <p>Preview of Spotify</p>
            <p className={styles.preview}>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
        </div>
        <div className={styles.signupBtn}>
            <button>Sign up free</button>
        </div>
    </div>
  )
}

export default Previewf;