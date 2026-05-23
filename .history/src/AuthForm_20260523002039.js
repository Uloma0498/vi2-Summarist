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
         <button className="btn guest__btn--wrapper">
             <FontAwesomeIcon icon="user" className="guest__icon--mask google__icon--mask" />
            Login as a Guest
         </button>
         <div className="auth__separator">
            <span className="auth__separator--text">or</span>
         </div>
         <button className="btn google__btn--wrapper">
            <figure className="google__icon--mask">
               <img src="" alt="" />
            </figure>
            Login with Google
         </button>
         <div className="auth__separator">
            <span className="auth__separator--text">or</span>
         </div>
         <form className="auth__main--form">
            <input className="auth__main--input" type="text" placeholder="Email Address"></input>
            <input className="auth__main--input" type="password" placeholder="Password"></input>
            <button class="btn">
               Login
            </button>
         </form>
         </div>
         <div className="auth__forgot--password">Forgot your password?</div>
         <button className="auth__switch--btn">Don't have an account?</button>
         <FontAwesomeIcon icon="xmark" className="auth__close--btn" />
        </div>
        </div>
    )
}