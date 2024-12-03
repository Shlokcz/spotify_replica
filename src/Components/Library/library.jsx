import React, { useState, useRef, useEffect} from "react";
import styles from "./library.module.css";
import { useNavigate } from "react-router-dom";

const Library = ({ searchedSong }) => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const [currentSongIndex, setCurrentSongIndex] = useState(null); // To track current song index
  const [isPlaying, setIsPlaying] = useState(false); // To track if a song is playing
  const [currentTime, setCurrentTime] = useState(0); // Current playback time
  const [duration, setDuration] = useState(0); // Song duration
  const audioRefs = useRef([]); // Array to store refs for all audio elements
  const progressBarRef = useRef(null); // Ref for the progress bar

  const [name, setName] = useState("Shlok");
  // const lastCompRef = useRef();


  const handleClick = () => {
    if (!auth) {
      navigate("/login");
    }
  };

  const songs = [
    {
      src: "/images/chaardin.jpg",
      songName: "Chaar din",
      artistName: "Sandeep Brar",
      songLink:
        "https://ik.imagekit.io/shlokcz/songs/Char%20Din.mp3?updatedAt=1732523175791",
    },
    {
      src: "/images/kamlee.jpg",
      songName: "Kamlee",
      artistName: "SARRB, Starboy X",
      songLink:
        "https://ik.imagekit.io/shlokcz/songs/Kamlee%20-%20Sarrb.mp3?updatedAt=1732512442712",
    },
    {
      src: "/images/lajawab.png",
      songName: "Lajawab",
      artistName: "Taimour Baig",
      songLink:
        "https://ik.imagekit.io/shlokcz/songs/LAJAWAB%20-%20TAIMOUR%20BAIG%20_%20Prod.%20Dizzla%20D%20Beats%20(Official%20Lyrical%20Video).mp3?updatedAt=1732512424548",
    },
    {
      src: "/images/sajni.jpg",
      songName: "Sajni",
      artistName: "Ram Sampath",
      songLink:
        "https://ik.imagekit.io/shlokcz/songs/Sajni%20(Song)_%20Arijit%20Singh,%20Ram%20Sampath%20_%20Laapataa%20Ladies%20_%20%20Aamir%20Khan%20Productions.mp3?updatedAt=1732512441987",
    },
    {
      src: "/images/samjhava.jpg",
      songName: "Samjhava Lofi Mix",
      artistName: "KSW, Arjit Singh",
      songLink:
        "https://ik.imagekit.io/shlokcz/songs/_Slowed+Reverb_%20Samjhawan%20-%20Arjit%20Singh%20-%20Vhan%20Muzic%20_%20Lofi%20Mix%20_%20Music%20Lovers%20_%20Text%20Audio%20_viral.mp3?updatedAt=1732512443429",
    },
    {
      src: "/images/borntoshine.jpg",
      songName: "Born To Shine",
      artistName: "Diljit Dosanjh",
      songLink:
        "https://ik.imagekit.io/shlokcz/songs/Diljit%20Dosanjh_%20Born%20To%20Shine%20(Official%20Music%20Video)%20G.O.A.T.mp3?updatedAt=1732512443072",
    },
    {
      src: "/images/shor.jpg",
      songName: "Shor",
      artistName: "Mooroo",
      songLink:
        "https://ik.imagekit.io/shlokcz/songs/Shor.mp3?updatedAt=1732512443336",
    },
    {
      src: "/images/aasakooda.jpg",
      songName: "Aasa Kooda",
      artistName: "Sai Abhyankkar",
      songLink:
        "https://ik.imagekit.io/shlokcz/songs/Sai%20Abhyankkar%20-%20Aasa%20Kooda%20(Music%20Video)%20_%20Thejo%20Bharathwaj%20_%20Preity%20Mukundhan%20_%20Sai%20Smriti.mp3?updatedAt=1732512441002",
    },
    {
      src: "/images/zarasa.jpg",
      songName: "Zara Sa",
      artistName: "KK, KSW",
      songLink:
        "https://ik.imagekit.io/shlokcz/songs/Zara%20Sa%20Full%20Video%20-%20Jannat_Emraan%20Hashmi,%20Sonal_KK_Pritam_Sayeed%20Quadri_Mahesh%20Bhatt.mp3?updatedAt=1732512427299",
    },
    {
      src: "/images/fakelove.jpg",
      songName: "Fake Love",
      artistName: "Flowbo",
      songLink:
        "https://ik.imagekit.io/shlokcz/songs/FLOWBO%20-%20FAKE%20LOVE%20(Prod.%20shimplishtic)%20_%20OFFICIAL%20MUSIC%20VIDEO%20_%20BANTAI%20RECORDS.mp3?updatedAt=1732512402422",
    },
    {
      src: "/images/himmat.jpg",
      songName: "Himmat",
      artistName: "Kushagra Pxrasher",
      songLink:
        "https://ik.imagekit.io/shlokcz/songs/Himmat.mp3?updatedAt=1732512402268",
    },
    {
      src: "/images/takeiteasy.jpg",
      songName: "Take It Easy",
      artistName: "Karan Aujla, Ikky",
      songLink:
        "https://ik.imagekit.io/shlokcz/songs/Take%20It%20Easy%20(Official%20Video)%20Karan%20Aujla.%20_%20Ikky%20_%20Four%20You%20EP%20_%20Latest%20Punjabi%20Songs%202023.mp3?updatedAt=1732512404397",
    },
    {
      src: "/images/dopeshope.jpg",
      songName: "Dope Shope",
      artistName: "Yo Yo Honey Singh",
      songLink:
        "https://ik.imagekit.io/shlokcz/songs/YO%20YO%20HONEY%20SINGH%20-%20DOPE%20SHOPE%20(OFFICIAL%20VIDEO)%20-%20INTERNATIONAL%20VILLAGER.mp3?updatedAt=1732512405252",
    },
    {
      src: "/images/chaska.jpg",
      songName: "Chaska Ae Yaara Nu",
      artistName: "Raja Baath, Honey Singh",
      songLink:
        "https://ik.imagekit.io/shlokcz/songs/CHASKA%20_%20OFFICIAL%20VIDEO%20_%20RAJA%20BAATH%20&%20HONEY%20SINGH.mp3?updatedAt=1732512405517",
    },
    {
      src: "/images/angrejibeet.jpg",
      songName: "Angreji Beet",
      artistName: "Yo Yo Honey Singh",
      songLink:
        "https://ik.imagekit.io/shlokcz/songs/Angreji%20Beat%20%20Honey%20Singh%20Full%20Song%20_%20Cocktail%20_%20Deepika%20Padukone%20_%20Saif%20Ali%20Khan%20_%20Pritam.mp3?updatedAt=1732512403086",
    },
    {
      src: "/images/woofer.jpg",
      songName: "Woofer",
      artistName: "Dr. Jeus, Snoop Dogg",
      songLink:
        "https://ik.imagekit.io/shlokcz/songs/Dr%20Zeus%20-%20Woofer%20Official%20Song%20_%20Snoop%20Dogg%20_%20Zora%20Randhawa%20_%20Nargis%20Fakhri.mp3?updatedAt=1732512406094",
    },
    {
      src: "/images/amplifier.jpg",
      songName: "Amplifier",
      artistName: "Imran Khan",
      songLink:
        "https://ik.imagekit.io/shlokcz/songs/Imran%20Khan%20-%20Amplifier%20(Official%20Music%20Video).mp3?updatedAt=1732512406012",
    },
    {
      src: "/images/tasweer.jpg",
      songName: "Tasweer",
      artistName: "Taimour Baig, Raffey Anwar",
      songLink:
        "https://ik.imagekit.io/shlokcz/songs/Jokhay,%20JJ47,%20Talha%20Anjum%20-%20Tasweer%20(Official%20Audio).mp3?updatedAt=1732512400351",
    },
    {
      src: "/images/kanayaari.jpg",
      songName: "Kana Yaari",
      artistName: "Kaifi Khalil, Eva B",
      songLink:
        "https://ik.imagekit.io/shlokcz/songs/Coke%20Studio%20_%20Season%2014%20_%20Kana%20Yaari%20_%20Kaifi%20Khalil%20x%20Eva%20B%20x%20Abdul%20Wahab%20Bugti.mp3?updatedAt=1732512400209",
    },
    {
      src: "/images/downersatdusk.jpg",
      songName: "Downers At Dusk",
      artistName: "Talha Anjum, Umair",
      songLink:
        "https://ik.imagekit.io/shlokcz/songs/Downers%20At%20Dusk%20-%20Talha%20Anjum%20_%20Prod.%20by%20Umair%20(Official%20Music%20Video).mp3?updatedAt=1732524670981",
    },
    {
      src: "/images/husn.jpg",
      songName: "Husn",
      artistName: "Anuv Jain",
      songLink:
        "https://ik.imagekit.io/shlokcz/songs/Anuv%20Jain%20-%20HUSN%20(Official%20Video).mp3?updatedAt=1732512700014",
    },
  ];

  const handlePlayPause = (index) => {
    const selectedAudio = audioRefs.current[index];
    if (currentSongIndex === index) {
      // If the same song is clicked, toggle play/pause
      if (selectedAudio.paused) {
        selectedAudio.play();
        setIsPlaying(true);
      } else {
        selectedAudio.pause();
        setIsPlaying(false);
      }
    } else {
      // If a different song is clicked, stop the previous one and play the new one
      if (currentSongIndex !== null) {
        audioRefs.current[currentSongIndex]?.pause();
        audioRefs.current[currentSongIndex].currentTime = 0; // Reset previous song
      }
      selectedAudio.play();
      setCurrentSongIndex(index);
      setIsPlaying(true);
    }
    // Set duration for the new song
    setDuration(selectedAudio.duration || 0);
  };

  const handleNext = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    handlePlayPause(nextIndex);
  };

  const handlePrevious = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    handlePlayPause(prevIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSongIndex !== null && isPlaying) {
        const currentAudio = audioRefs.current[currentSongIndex];
        setCurrentTime(currentAudio?.currentTime || 0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [currentSongIndex, isPlaying]);

  const [filteredSongs, setFilteredSongs] = useState([]);

  // Filter songs whenever the search term changes
  useEffect(() => {
    console.log(searchedSong);
    console.log("xyz", songs);

    if (searchedSong !== "") {
      const filtered = songs.filter((item) =>
        item.songName.toLowerCase().includes(searchedSong.toLowerCase())
      );
      // console.log(filtered);
      console.log("shlok");
      setFilteredSongs(filtered);
    } else {
      setFilteredSongs(songs);
    }
  }, [searchedSong]);

  // console.log(songs.songName);

  return (
    <div
      className={styles.library}
      style={{ height: auth ? "89%" : "calc(100% - (75px + 65px))" }}
    >
      <div className={styles.lib}>
        <div className={styles.libImg}>
          <img src="/images/library.png" alt="error-404" />
          <h3>Your Library</h3>
        </div>
        <div className={styles.plusImg}>
          <img src="/images/plus.png" alt="error-404" />
        </div>
      </div>
      {auth ? (
        <div className={styles.ifUserLoggedin}>
          <div className={styles.playlistandartist}>
            <button>Playlists</button>
            <button>Artists</button>
          </div>
          <div className={styles.searchandrecent}>
            <img src="/images/search.png" alt="error-404" />
            <h5>Recents</h5>
          </div>
          <div className={styles.songs}>
            {filteredSongs.map((item, index) => (
              <div
                key={index}
                className={styles.song}
                onClick={() => handlePlayPause(index)}
              >
                <img src={item.src} alt="error-404" />
                <div className={styles.artistDetails}>
                  <p>{item.songName}</p>
                  <p>{item.artistName}</p>
                </div>
                <div className={styles.songPlayPause}>
                  {/* <button >
                    {currentSongIndex === index && isPlaying ? "Pause" : "Play"}
                  </button> */}
                  {item.songLink && (
                    <audio
                      ref={(el) => (audioRefs.current[index] = el)}
                      src={item.songLink}
                      crossOrigin="anonymous"
                    ></audio>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className={styles.card1}>
            <h4>Create your first playlist</h4>
            <p>It's easy, we'll help you</p>
            <button onClick={handleClick}>Create playlist</button>
          </div>
          <div className={styles.card2}>
            <h4>Let's find some podcasts to follow</h4>
            <p>We'll keep you updated on the episodes</p>
            <button onClick={handleClick}>Browse podcasts</button>
          </div>
          <div className={styles.legal}>
            <p>Legal</p>
            <p>Safety & Privacy center</p>
            <p>Privacy Policy</p>
            <p>Cookies</p>
            <p>About Ads</p>
            <p>Accessibility</p>
          </div>
          <div className={styles.language}>
            <button>
              <img src="/images/language.png" alt="error-404" />
              English
            </button>
          </div>
        </>
      )}

      {/* Playbar */}
      {currentSongIndex !== null && (
        <div className={styles.playbar}>
          <div className={styles.songInfo}>
            <img src={songs[currentSongIndex].src} alt="song" />
            <div>
              <h3>{songs[currentSongIndex].songName}</h3>
              <p>{songs[currentSongIndex].artistName}</p>
            </div>
          </div>
          <div className={styles.controls}>
            <button onClick={handlePrevious}>
              <img src="/images/previous.png" alt="error-404" />
            </button>
            <button onClick={() => handlePlayPause(currentSongIndex)}>
              {isPlaying ? (
                <img src="/images/pause.png" alt="error-404" />
              ) : (
                <img src="/images/play.png" alt="error-404" />
              )}
            </button>
            <button onClick={handleNext}>
              <img src="/images/next.png" alt="error-404" />
            </button>
          </div>
          <div className={styles.progressBar}>
            <span>
              {Math.floor(currentTime / 60)}:
              {Math.floor(currentTime % 60)
                .toString()
                .padStart(2, "0")}
            </span>
            <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={(e) =>
                (audioRefs.current[currentSongIndex].currentTime =
                  e.target.value)
              }
              ref={progressBarRef}
            />
            <span>
              {Math.floor(duration / 60)}:
              {Math.floor(duration % 60)
                .toString()
                .padStart(2, "0")}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Library;
