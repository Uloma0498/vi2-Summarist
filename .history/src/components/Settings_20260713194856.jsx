import React, { useState, useEffect } from "react";
import loginlogo from "../assets/login.png";
import SignIn from "../components/UI/SignIn";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useSubscription } from '../SubscriptionContext';

const auth = getAuth();

const Settings = () => {
  const { login, logout } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { selectedPlan } = useSubscription();
  const [user, setUser] = useState(null);
console.log(auth.currentUser);
  const isLoggedIn = !!user;

  const handleLogin = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleUpgrade = () => {
    navigate("/choose-plan");
  };

  const planLabels = {
    premiumPlus: "Premium Plus",
    premiumMonthly: "Premium",
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="section__title page__title">Settings</div>
        {isLoggedIn ? (
          <>
            <div className="setting__content">
              <div className="settings__sub--title">Your Subscription plan</div>
              <div className="settings__text">{planLabels[selectedPlan || "Basic"}</div>
              <button
                className="btn settings__login--btn"
                onClick={handleUpgrade}
              >
                Upgrade to Premium
              </button>
            </div>
            <div className="setting__content">
              <div className="settings__sub--title">Email</div>
              <div className="settings__text">{user?.email}</div>
            </div>
          </>
        ) : (
          <div className="settings__login--wrapper">
            <img alt="login" src={loginlogo} />
            <div className="settings__login--text">
              Login in to your account to see your details.
            </div>
            <button className="btn settings__login--btn" onClick={handleLogin}>
              Login
            </button>
            {isModalOpen && (
              <SignIn onClose={closeModal} setIsOpen={setIsModalOpen} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
