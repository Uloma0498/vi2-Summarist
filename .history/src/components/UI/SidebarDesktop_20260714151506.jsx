import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navlogo from "../../assets/logo.png";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignIn from "./SignIn";
import { useAuth } from "../../AuthContext";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const auth = getAuth();

const SidebarDesktop = () => {
  const { logout } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const isLoggedIn = !!user;

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = () => {
    setIsModalOpen(true);
  };

  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="sidebar-desktop">
      <div className="sidebar__logo">
        <img src={Navlogo} alt="Logo" className="nav__img nav__img--mask" />
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
          {isLoggedIn ? (
            <div className="sidebar__link--wrapper" onClick={handleLogout}>
              <div className="sidebar__link--line"></div>
              <div className="sidebar__icon--wrapper">
                <FontAwesomeIcon icon="arrow-right-from-bracket" />
              </div>
              <div className="sidebar__link--text">Logout</div>
            </div>
          ) : (
            <div className="sidebar__link--wrapper" onClick={handleLogin}>
              <div className="sidebar__link--line"></div>
              <div className="sidebar__icon--wrapper">
                <FontAwesomeIcon icon="arrowrightfrombracket" />
              </div>
              <div className="sidebar__link--text">Login</div>
            </div>
          )}
        </div>
      </div>
      {isModalOpen && (
        <div className="auth-modal-overlay">
          <SignIn
            onClose={() => setIsModalOpen(false)}
            setIsOpen={setIsModalOpen}
          />
        </div>
      )}
    </div>
  );
};

export default SidebarDesktop;
