import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import googleImage from '../../assets/google.png';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/init";
import SignUp from './SignUp';
import { useNavigate } from 'react-router-dom';


const SignIn = ({ setIsOpen }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginAsGuest = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, "guest@email.com", "guest123")
      .then(() => {
        setIsOpen(false);
        navigate("/for-you");
      })
      .catch((error) => {
        setErrorMessage("Guest login failed");
        console.log(error);
      });
  };

  const loginWithEmail = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setIsOpen(false);
        navigate("/for-you");
      })
      .catch((error) => {
        setErrorMessage("Email or password is incorrect");
        console.log(error);
      });
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSignUpClick = () => {
    setSignUpOpen(true);
  };

    return (
        <div className="auth__wrapper">
        <div className="auth">
         <div className="auth__content">
            <div className="auth__title">
                Log in to Summarist
            </div>
         <button className="btn guest__btn--wrapper" onClick={loginAsGuest}>
             <FontAwesomeIcon icon="user" className="guest__icon--mask google__icon--mask" />
            Login as a Guest
         </button>
         <div className="auth__separator">
            <span className="auth__separator--text">or</span>
         </div>
         <button className="btn google__btn--wrapper">
            <figure className="google__icon--mask">
               <img src={googleImage} alt="Google" className="google__icon--mask" />
            </figure>
            Login with Google
         </button>
         <div className="auth__separator">
            <span className="auth__separator--text">or</span> 
         </div>
         <form className="auth__main--form" onSubmit={loginWithEmail}>
            <input className="auth__main--input" 
                   type="text" 
                   placeholder="Email Address"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   required />
            <input className="auth__main--input" 
                   type="password" 
                   placeholder="Password">
            <button className="btn" onClick={login}>
               Login
            </button>
         </form>
         </div>
         <div className="auth__forgot--password">Forgot your password?</div>
         <button className="auth__switch--btn" onClick={handleSignUpClick}>
            Don't have an account?
         </button>
         <FontAwesomeIcon icon="xmark" className="auth__close--btn" onClick={handleClose} />
        </div>
        <SignUp isOpen={isSignUpOpen} onClose={() => setSignUpOpen(false)} />
        </div>
    )}

    export default SignIn;