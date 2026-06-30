import React from "react";
import loginlogo from "../assets/login.png";

const Library = () => {
    return (
        <div className="container">
              <div className="row">
                <div className="for-you__title">
                 Saved Books
                </div>

               <div className="settings__login--wrapper">
                <img alt="login" src={loginlogo} />
                <div className="settings__login--text">
                  Login in to your account to see your library.
                </div>
                <button className="btn settings__login--btn">
                  Login
                </button>
               </div>
        
              </div>
            </div>
    )
}

export default Library;