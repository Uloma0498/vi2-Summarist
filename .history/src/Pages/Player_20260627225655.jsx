import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState, useRef } from "react";
import Navlogo from "../assets/logo.png";
import Selected from "../components/UI/Selected";
import Recommended from "../components/UI/Recommended";
import Suggested from "../components/UI/Suggested";
import SidebarDesktop from "../components/UI/SidebarDesktop";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/init";
import SearchInput from "../components/UI/SearchInput";
import SignIn from "../components/UI/SignIn";

const Player = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [player, setPlayer] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const audioRef = useRef(null);
  const sidebarRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [audioDurationSeconds, setAudioDurationSeconds] = useState(null);
  const [remainingTime, setRemainingTime] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    const fetchPlayer = async () => {
      try {
        const response = await axios.get(
          `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${bookId}`,
        );
        setPlayer(response.data);
      } catch (error) {
        console.error("Error fetching player details:", error);
      }
    };
    if (bookId) {
      fetchPlayer();
    }

    return () => unsubscribe();
  }, [bookId]);

  const closeModal = () => {
    setShowAuthModal(false);
  };

  const toggleMenu = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  const audio = audioRef.current;
  useEffect(() => {
    if (audio) {
      const handleLoadedMetadata = () => {
        setDuration(audio.duration);
      };

      const handleTimeUpdate = () => {
        setCurrentTime(audio.currentTime);
      };

      audio.addEventListener("loadedmetadata", handleLoadedMetadata);
      audio.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        audio.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleSeekChange = (event) => {
    const newTime = event.target.value;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleForward = () => {
    audioRef.current.currentTime += 10;
  };

  const handleBackward = () => {
    audioRef.current.currentTime -= 10;
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const formatTime = (seconds) => {
    seconds = Math.max(0, seconds);

    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");

    const remainingSeconds = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");

    return `${minutes}:${remainingSeconds}`;
  };

  function handleLoadedMetadata() {
    setAudioDurationSeconds(audio.duration);
    const audioDuration = formatTime(audio.duration);
    setDuration(audioDuration);
  };
    
      return (
        <section id="_next">
          <div className="wrapper">
            <SidebarDesktop />
            <div className="search__background">
              <div className="search__wrapper">
                <div className="search__content">
                  <SearchInput />
                  <button className="sidebar__toggle--btn" onClick={toggleMenu}>
                    <FontAwesomeIcon icon="bars" />
                  </button>
                </div>
              </div>
            </div>
            <div
              className={`sidebar__overlay ${isSidebarOpen ? "sidebar__overlay--visible" : "sidebar__overlay--hidden"}`}
            >
              <div
                className={`sidebar sidebar-mobile ${isSidebarOpen ? "sidebar--open" : "sidebar--closed"}`}
                ref={sidebarRef}
              >
                <div className="sidebar__logo">
                  <img
                    src={Navlogo}
                    alt="Logo"
                    className="nav__img nav__img--mask"
                  />
                </div>
                <div className="sidebar__wrapper">
                  <div className="sidebar__top">
                    <a className="sidebar__link--wrapper" href="/for-you">
                      <div className="sidebar__link--line active--tab"></div>
                      <div className="sidebar__icon--wrapper">
                        <FontAwesomeIcon icon="house" />
                      </div>
                      <div className="sidebar__link--text">For you</div>
                    </a>
                    <a className="sidebar__link--wrapper" href="/library">
                      <div className="sidebar__link--line"></div>
                      <div className="sidebar__icon--wrapper">
                        <FontAwesomeIcon icon="bookmark" />
                      </div>
                      <div className="sidebar__link--text">My Library</div>
                    </a>
                    <div className="sidebar__link--wrapper sidebar__link--not-allowed">
                      <div className="sidebar__link--line active--tab"></div>
                      <div className="sidebar__icon--wrapper">
                        <FontAwesomeIcon icon="pen-clip" />
                      </div>
                      <div className="sidebar__link--text">Highlights</div>
                    </div>
                    <div className="sidebar__link--wrapper sidebar__link--not-allowed">
                      <div className="sidebar__link--line"></div>
                      <div className="sidebar__icon--wrapper">
                        <FontAwesomeIcon icon="magnifying-glass" />
                      </div>
                      <div className="sidebar__link--text">Search</div>
                    </div>
                  </div>
                  <div className="sidebar__bottom">
                    <a className="sidebar__link--wrapper" href="/settings">
                      <div className="sidebar__link--line"></div>
                      <div className="sidebar__icon--wrapper">
                        <FontAwesomeIcon icon="gear" />
                      </div>
                      <div className="sidebar__link--text">Settings</div>
                    </a>
                    <div className="sidebar__link--wrapper sidebar__link--not-allowed">
                      <div className="sidebar__link--line"></div>
                      <div className="sidebar__icon--wrapper">
                        <FontAwesomeIcon icon="circle-question" />
                      </div>
                      <div className="sidebar__link--text">Help & Support</div>
                    </div>
                    <div className="sidebar__link--wrapper">
                      <div className="sidebar__link--line"></div>
                      <div className="sidebar__icon--wrapper">
                        <FontAwesomeIcon icon="arrow-right-from-bracket" />
                      </div>
                      <div className="sidebar__link--text">Logout</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             {player ? (
            <div className="summary">
              <div className="audio__book--summary">
                <div className="audio__book--summary-title">
                  {player.title}
                </div>
                <div className="audio__book--summary-text">
                  {player.summary}
                </div>
              </div>
              <div className="audio__wrapper">
                  <audio 
                   ref={audioRef} 
                   src={player.audioLink} 
                   type="audio/mpeg"
                   onTimeUpdate={handleTimeUpdate}
                   onLoadedMetadata=
                    />
                <div className="audio__track--wrapper">
                 <figure className="audio__track--image-mask">
                  <figure className="book__image--wrapper">
                  <img className="book__image" src={player.imageLink} alt={player.title} />
                  </figure>
                 </figure>
                <div className="audio__track--details-wrapper">
                  <div className="audio__track--title">
                    {player.title}
                  </div>
                  <div className="audio__track--author">
                    {player.author}
                  </div>
                </div>
                </div>
                <div className="audio__controls--wrapper">
                  <div className="audio__controls">
                  <button className="audio__controls--btn" onClick={handleBackward}>
                    <FontAwesomeIcon icon="backward-fast" />
                  </button>
                  <button className="audio__controls--btn audio__controls--btn--play" onClick={handlePlayPause}>
                    <FontAwesomeIcon icon={audioRef.current && !audioRef.current.paused ? "circle-pause" : "circle-play"} />
                  </button>
                  <button className="audio__controls--btn" onClick={handleForward}>
                    <FontAwesomeIcon icon="forward-fast" />
                  </button>
                </div>
              </div>
              <div className="audio__progress--wrapper">
                <div className="audio__time">
                  {Math.floor(currentTime / 60)}:{("0" + Math.floor(currentTime % 60)).slice(-2)}
                </div>
                <input 
                 type="range" 
                 min="0"
                 max={audioRef.current?.duration || 0}
                 value={currentTime}
                 onChange={handleSeekChange}
                 />
                <div className="audio__time">
                  {currentTime ? formatTime(audioRef.duration - currentTime) : duration}
                </div>
              </div>
              </div>
              </div>
            ) : (
                 <div>Loading...</div>
            )}
            </div>
            {showAuthModal && (
                    <div className="auth-modal-overlay">
                      <SignIn onClose={() => setShowAuthModal(false)} setIsOpen={setShowAuthModal} />
                    </div>
                  )}
            </section>
            )
}

export default Player;
