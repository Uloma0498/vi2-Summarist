import React, { useState } from "react";
import login from "../assets/login.png";
import { AuthContext } from ".."
import SignIn from "../components/UI/SignIn"

const Settings = () => {
    const { isLoggedIn } = useContext(AuthContext);
    const [isModalOpen, setIsModalOpen] = useState(false); 
    
        const handleLogin = () => {
            setIsModalOpen(true);
        };
    
        const closeModal = () => {
            setIsModalOpen(false); 
        };
    
  return (
    <>
    <div className="container">
      <div className="row">
       <div className="section__title page__title">
        Settings
       </div>
       {isLoggedIn  ? (
        <>
       <div className="setting__content">
        <div className="settings__sub--title">
          Your Subscription plan
        </div>
        <div className="settings__text">
         Basic
        </div>
        <button className="btn settings__premium--btn">
         Upgrade to Premium
        </button>
       </div>
       <div className="setting__content">
        <div className="settings__sub--title">
          Email
        </div>
        <div className="settings__text">
         user@example.com
        </div>
       </div>
       </>
       ) : (
       <div className="settings__login--wrapper">
        <img alt="login" src={login} />
        <div className="settings__login--text">
          Login in to your account to see your details.
        </div>
        <button className="btn settings__login--btn" onClick={handleLogin}>
          Login
        </button>
        {isModalOpen && <SignIn onClose={closeModal} />}
       </div>
       )}
      </div>
    </div>
    </>
  );
};

export default Settings;