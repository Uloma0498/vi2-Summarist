import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import googleImage from '../src/assets/google.png'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/init";
import AuthFormUp from "./AuthFormUp";
import { useNavigate } from 'react-router-dom';


const AuthForm = ({ setIsOpen }) => {
   const [user, setUser] = useState({});
   const [errorMessage, setErrorMessage] = useState('');
   const [isSignUpOpen, setSignUpOpen] = useState(false);
   const navigate = useNavigate();

   useEffect(() => {
      onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
      });
   }, []);

   const login = (e) => {
      e.pre
      signInWithEmailAndPassword(auth, 'guest@email.com', 'guest123')
      .then(({ user }) => {
         setUser(user);
         navigate('/for-you');
      })
      .catch((error) => {
         setErrorMessage('User not found')
         console.log(error);
      })
   }

   function logout() {
      signOut(auth)
      setUser({})
   }

   const handleClose = () => {
      setIsOpen(false);
   }

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
         <button className="btn guest__btn--wrapper" onClick={login}>
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
         <form className="auth__main--form">
            <input className="auth__main--input" type="text" placeholder="Email Address"></input>
            <input className="auth__main--input" type="password" placeholder="Password"></input>
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
        <AuthFormUp isOpen={isSignUpOpen} onClose={() => setSignUpOpen(false)} />
        </div>
    )}

    export default AuthForm;