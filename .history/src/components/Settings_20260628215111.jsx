import React  from "react";
import login from "../assets/login.png";

const Settings = () => {
    const  [isLoggedIn, setIsLoggedIn] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false); 
    
        const handleLogout = () => {
            setIsLoggedIn(false);
        };
    
        const handleLogin = () => {
            setIsModalOpen(true);
        };
    
        const closeModal = () => {
            setIsModalOpen(false); 
        };
    
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
  );
};

export default Settings;