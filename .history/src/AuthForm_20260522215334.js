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
            <figure className="google__icon--mask guest__icon--mask">
               <img src={Google} alt="Google" />
         
            </figure>
            Login as a Guest
         </button>
         <div className="auth__separator">
            <span className="auth__separator--text">or</span>
         </div>
         <button className="btn google__btn--wrapper">
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