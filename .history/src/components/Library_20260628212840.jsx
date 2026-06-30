import React from "react";
import login from ".."

const Library = () => {
    return (
        <div className="container">
              <div className="row">
               <div className="section__title page__title">
                Settings
               </div>
               <div className="settings__login--wrapper">
                <img alt="login" src={login} />
                <div className="settings__login--text">
                  Login in to your account to see your details.
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