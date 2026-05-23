import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


export default function AuthForm() {
    return (
        
        <div className="auth__wrapper">
        <div className="auth">
         <div className="auth__content">
            <div className="auth__title">
                Log in to Summarist
            </div>
         <button className="btn guest__btn--wrapper guest__icon--mask">
            <figure className="google__icon--mask">
             <FontAwesomeIcon icon="user" className="guest__icon--mask" />
            </figure>
            <div>Login as a Guest</div>
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