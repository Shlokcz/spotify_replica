import React, { useState } from "react";
import styles from "./navbar.module.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ sendDataToParent }) => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  // const userCredentials = JSON.parse(auth);
  // console.log(userCredentials);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  const [isUserCard, setIsUserCard] = useState(false);
  const [searchSong, setSearchSong] = useState("");

  const handleUserCard = () => {
    setIsUserCard(!isUserCard);
    // console.log(isUserCard);
  };

  const closeCard = () => {
    setIsUserCard(false);
  };

  // console.log(searchSong);

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        {auth ? (
          <img
            src="/images/profile-user.png"
            alt="error-404"
            onClick={handleUserCard}
          />
        ) : (
          <img src="/images/logo.png" alt="logo_Img" />
        )}
      </div>

      {/* Blur Background */}
      <div
        className={`${styles.blurBackground} ${
          isUserCard ? styles.active : ""
        }`}
        onClick={closeCard}
      ></div>

      {/* User Info Card */}
      {/* <div className={`${styles.userCard} ${isUserCard ? styles.active : ""}`}>
        <div className={styles.userCardHeader}>User Information</div>
        <div className={styles.userCardBody}>
          <p>Email: {userCredentials.email}</p>
          <p>Plan: Premium</p>
          <button
            onClick={closeCard}
            style={{
              marginTop: "10px",
              padding: "6px 12px",
              borderRadius: "24px",
              backgroundColor: "#259b4e",
              border: "none",
              cursor: "pointer",
              color: "white",
            }}
          >
            Close
          </button>
        </div>
      </div> */}

      <div className={styles.homeandsearch}>
        <div className={styles.homeImg}>
          <img src="/images/home.png" alt="home_Img" />
        </div>
        <div className={styles.searchbar}>
          <img src="/images/search.png" alt="search_Img" />
          <input
            type="text"
            placeholder="What do you want to play?"
            onChange={(e) => {
              setSearchSong(e.target.value);
              sendDataToParent(e.target.value);
            }}
          />
          <img src="/images/browse.png" alt="browse_Img" />
        </div>
      </div>
      <div className={styles.btn}>
        {auth ? (
          <button className={styles.login} onClick={handleLogout}>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Log out
            </Link>
          </button>
        ) : (
          <>
            <button className={styles.signup}>
              <Link
                to="/signup"
                style={{ textDecoration: "none", color: "rgb(196, 196, 196)" }}
              >
                Sign up
              </Link>
            </button>
            <button className={styles.login}>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "black" }}
              >
                Log in
              </Link>
            </button>
          </>
        )}
        {/* <button className={styles.signup}>Sign up</button> */}
      </div>
    </div>
  );
};

export default Navbar;
