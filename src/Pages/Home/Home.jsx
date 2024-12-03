import React, { useState } from "react";
import Navbar from "../../Components/Navbar/navbar";
import Popular from "../../Components/PopularArtists/popular";
import styles from "./Home.module.css";
import Library from "../../Components/Library/library";
import Previewf from "../../Components/PreviewFooter/previewf";

const Home = () => {
  const auth = localStorage.getItem("user");

  const [searchedSong, isSearchedSong] = useState("");

  const handlesongsearch = (data) => {
    isSearchedSong(data);
  };

  // console.log(searchedSong);

  return (
    <div className={styles.home}>
      <Navbar sendDataToParent={handlesongsearch}/>
      <div className={styles.content}>
        <div className={styles.col1}>
          <Library searchedSong={searchedSong}/>
        </div>
        <div className={styles.col2}>
          <Popular />
        </div>
      </div>
      {!auth && <Previewf />}
    </div>
  );
};

export default Home;
