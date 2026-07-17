import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/init";
import SignIn from "../components/UI/SignIn";

const Player = () => {
  const { bookId } = useParams();
  const [, setSidebarOpen] = useState(false);
  const [player, setPlayer] = useState(null);
  const [, setIsLoggedIn] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const audioRef = useRef(null);
  const sidebarRef = useRef(null);
  const [, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const  [, setAudioDurationSeconds] = useState(null);
  

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
  }, [bookId, setIsLoggedIn]);

  
  useEffect(() => {
    if (audioRef.current) {
      function handleLoadedMetadata(event) {
      const audio = event.currentTarget;

      setDuration(audio.duration);
      setAudioDurationSeconds(audio.duration);
      }
      
      const handleTimeUpdate = () => {
      const audio = audioRef.current;
      if (!audio) return;

     setCurrentTime(audio.currentTime);
    };
    }
  }, []);

  const handlePlayPause = async () => {
  const audio = audioRef.current;

  if (!audio) return;

  if (audio.paused) {
    try {
      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Audio could not play:", error);
    }
  } else {
    audio.pause();
    setIsPlaying(false);
  }
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
  const audio = audioRef.current;
  if (!audio) return;

  audio.currentTime += 10;
  };

const handleBackward = () => {
  const audio = audioRef.current;
  if (!audio) return;

  audio.currentTime -= 10;
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
  }, [setSidebarOpen]);

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
    
    setDuration(audioDuration);
  }

  return (
    <>
      {player ? (
        <div className="summary">
          <div className="audio__book--summary">
            <div className="audio__book--summary-title">{player.title}</div>
            <div className="audio__book--summary-text">{player.summary}</div>
          </div>

          <div className="audio__wrapper">
            <audio
              ref={audioRef}
              src={player.audioLink}
              type="audio/mpeg"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
            />

            <div className="audio__track--wrapper">
              <figure className="audio__track--image-mask">
                <figure className="book__image--wrapper">
                  <img
                    className="book__image"
                    src={player.imageLink}
                    alt={player.title}
                  />
                </figure>
              </figure>

              <div className="audio__track--details-wrapper">
                <div className="audio__track--title">{player.title}</div>
                <div className="audio__track--author">{player.author}</div>
              </div>
            </div>

            <div className="audio__controls--wrapper">
              <div className="audio__controls">
                <button
                  className="audio__controls--btn"
                  onClick={handleBackward}
                >
                  <FontAwesomeIcon icon="backward-fast" />
                </button>

                <button
                  className="audio__controls--btn audio__controls--btn--play"
                  onClick={handlePlayPause}
                >
                  <FontAwesomeIcon
                    icon={
                      audioRef.current && !audioRef.current.paused
                        ? "circle-pause"
                        : "circle-play"
                    }
                  />
                </button>

                <button
                  className="audio__controls--btn"
                  onClick={handleForward}
                >
                  <FontAwesomeIcon icon="forward-fast" />
                </button>
              </div>
            </div>

            <div className="audio__progress--wrapper">
              <div className="audio__time">
                {Math.floor(currentTime / 60)}:
                {("0" + Math.floor(currentTime % 60)).slice(-2)}
              </div>

              <input
                type="range"
                min="0"
                max={audioRef.current?.duration || 0}
                value={currentTime}
                onChange={handleSeekChange}
              />

              <div className="audio__time">
                {currentTime
                  ? formatTime(audio.duration - currentTime)
                  : duration}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}

      {showAuthModal && (
        <div className="auth-modal-overlay">
          <SignIn
            onClose={() => setShowAuthModal(false)}
            setIsOpen={setShowAuthModal}
          />
        </div>
      )}
    </>
  );
};

export default Player;