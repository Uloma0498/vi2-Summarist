import React, { useState } from 'react';
import googleImage from '../src/assets/google.png'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase/init";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const AuthFormUp = ({ isOpen, onClose }) => {
 if (!isOpen) return null;

 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const handleSignUp = (e) => {
    e.preventDefault();
          createUserWithEmailAndPassword(auth, 'email', 'password')
          .then((user) => {
             console.log(user)
          })
          .catch((error) => {
             console.log(error);
          })
 };

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
         <form className="auth__main--form">
            <input className="auth__main--input" type="text" placeholder="Email Address"></input>
            <input className="auth__main--input" type="password" placeholder="Password"></input>
            <button className="btn" onClick={handleSignUp}>
               Sign Up
            </button>
         </form>
         </div>
         <button className="auth__switch--btn">Already have an account?</button>
         <FontAwesomeIcon icon="xmark" className="auth__close--btn" onClick={onClose} />
        </div>
        </div>
    )}

    export default AuthFormUp;
