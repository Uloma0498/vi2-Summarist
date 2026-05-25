import React from 'react';
import googleImage from '../src/assets/google.png'

const AuthFormUp = ({ isOpen, onClose }) => {

    const handleClose = () => {
      setIsOpen(false);
   }

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
            <button className="btn" onClick={signup}>
               Sign Up
            </button>
         </form>
         </div>
         <button className="auth__switch--btn">Already have an account?</button>
         <FontAwesomeIcon icon="xmark" className="auth__close--btn" onClick={handleClose} />
        </div>
        </div>
    )}

    export default AuthFormUp;
