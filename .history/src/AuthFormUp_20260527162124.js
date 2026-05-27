import React, { useState } from 'react';
import googleImage from '../src/assets/google.png'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase/init";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const AuthFormUp = ({ isOpen, onClose }) => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const handleSignUp = (e) => {
    e.preventDefault();
          createUserWithEmailAndPassword(auth, 'email', 'password')
          .then((user) => {
             history.pushState('/for-you');
          })
          .catch((error) => {
             console.log(error);
          })
 };

 if (!isOpen) return null;

    return (
        <div className="auth__wrapper">
        <div className="auth">
         <div className="auth__content">
            <div className="auth__title">
                Sign up for Summarist
            </div>
         <button className="btn google__btn--wrapper">
            <figure className="google__icon--mask">
               <img src={googleImage} alt="Google" className="google__icon--mask" />
            </figure>
            Sign up with Google
         </button>
         <div className="auth__separator">
            <span className="auth__separator--text">or</span> 
         </div>
         <form className="auth__main--form" onSubmit={handleSignUp}>
            <input className="auth__main--input" 
                 type="text" 
                 placeholder="Email Address"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 required
             />
            <input className="auth__main--input" 
                type="password" 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
             />
            <button className="btn" onClick={handleSignUp}>
               Sign Up
            </button>
         </form>
         </div>
         <button className="auth__switch--btn" onClick={onClose}>
            Already have an account?
        </button>
         <FontAwesomeIcon icon="xmark" className="auth__close--btn" onClick={onClose} />
        </div>
        </div>
    )}

    export default AuthFormUp;
