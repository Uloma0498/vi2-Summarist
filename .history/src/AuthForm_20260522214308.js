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
            <figure className
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