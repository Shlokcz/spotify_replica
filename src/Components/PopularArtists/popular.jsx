import React, { useEffect, useRef } from "react";
import styles from "./popular.module.css";
import Footer from "../Footer/footer";
import { useNavigate } from "react-router-dom";

const Popular = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const isGuestFlowAllowed = localStorage.getItem("isGuestFlowAllowed");
  const hasRedirected = useRef(false);

  useEffect(() => {
    if (!auth && !hasRedirected.current && !isGuestFlowAllowed) {
      const timer = setTimeout(() => {
        navigate("/login");
        hasRedirected.current = true; // Mark redirection as done
      }, 30000);

      return () => clearTimeout(timer);
    }
  }, [auth, navigate]);

  const handleClick = () => {
    if (!auth) {
      navigate("/login");
    }
  };

  const cards = [
    {
      src: "/images/pritam.jpg",
      artistName: "Pritam",
    },
    {
      src: "/images/sachin_jigar.jpg",
      artistName: "Sachin-Jigar",
    },
    {
      src: "/images/arjit.jpg",
      artistName: "Arjit Singh",
    },
    {
      src: "/images/a_r_rahman.jpg",
      artistName: "A R Rahman",
    },
    {
      src: "/images/atif.jpg",
      artistName: "Atif Aslam",
    },
    {
      src: "/images/vishal_shekhar.jpg",
      artistName: "Vishal-Shekhar",
    },
    {
      src: "/images/vishal.jpg",
      artistName: "Vishal Singh",
    },
    {
      src: "/images/diljit.jpg",
      artistName: "Diljit Dosanjh",
    },
    {
      src: "/images/udit.jpg",
      artistName: "Udit Narayan",
    },
    {
      src: "/images/honey.jpg",
      artistName: "Yo Yo Honey Singh",
    },
    {
      src: "/images/darshan.jpg",
      artistName: "Darshan Raval",
    },
    {
      src: "/images/anuv.jpg",
      artistName: "Anuj Jain",
    },
    {
      src: "/images/sonu.jpg",
      artistName: "Sonu Nigam",
    },
    {
      src: "/images/kk.jpg",
      artistName: "K K",
    },
    {
      src: "/images/badshah.jpg",
      artistName: "Badshah",
    },
    {
      src: "/images/karan.jpg",
      artistName: "Karan Aujla",
    },
    {
      src: "/images/shreya.jpg",
      artistName: "Shreya Goshal",
    },
  ];

  const handlePlay = (songUrl) => {
    const audio = new Audio(songUrl);
    audio.play();
  };

  return (
    <div
      className={styles.popular}
      style={{ height: auth ? "85.5%" : "calc(100% - (90px + 90px))" }}
    >
      <h1>Popular Artists</h1>
      <div className={styles.cards}>
        {cards.map((item, id) => (
          <div key={id} className={styles.card} onClick={handleClick}>
            <img src={item.src} alt="error-404" />
            {/* Play button */}
            <div className={styles.playButton}>
              <button onClick={() => handlePlay(item.songUrl)}><img src="/images/play.png" alt="error-404"/></button>
            </div>
            <h6>{item.artistName}</h6>
            <p>Artist</p>
          </div>
        ))}
      </div>
      <div className={styles.about}>
        <div className={styles.aboutSection}>
          <h6>Company</h6>
          <p>About</p>
          <p>Jobs</p>
          <p>For the Record</p>
        </div>
        <div className={styles.aboutSection}>
          <h6>Communities</h6>
          <p>About</p>
          <p>Jobs</p>
          <p>For the Record</p>
        </div>
        <div className={styles.aboutSection}>
          <h6>Useful links</h6>
          <p>About</p>
          <p>Jobs</p>
          <p>For the Record</p>
        </div>
        <div className={styles.aboutSection}>
          <h6>Spotify Plans</h6>
          <p>About</p>
          <p>Jobs</p>
          <p>For the Record</p>
        </div>
        <div className={styles.icons}>
          <div>
            <img src="/images/instagram.png" alt="error-404" />
          </div>
          <div>
            <img src="/images/twitter.png" alt="error-404" />
          </div>
          <div>
            <img src="/images/facebook.png" alt="error-404" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Popular;
