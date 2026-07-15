
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