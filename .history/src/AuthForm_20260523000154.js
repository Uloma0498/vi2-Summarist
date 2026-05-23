import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Google from '../assets/google.png';



export default function AuthForm() {
    return (
        
        <div className="auth__wrapper">
        <div className="auth">
         <div className="auth__content">
            <div className="auth__title">
                Log in to Summarist
            </div>
         <button className="btn guest__btn--wrapper">
             <FontAwesomeIcon icon="user" className="guest__icon--mask google__icon--mask" />
            Login as a Guest
         </button>
         <div className="auth__separator">
            <span className="auth__separator--text">or</span>
         </div>
         <button className="btn google__btn--wrapper">
            <figure className="google__icon--mask">
               <img src="" alt="google" />
            </figure>
            Login with Google
         </button>
         <div className="auth__separator">
            <span className="auth__separator--text">or</span>
         </div>
         </div>
        </div>
        </div>
    )
}