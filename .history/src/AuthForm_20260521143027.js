import React from 'react';

export default function AuthForm() {
    return (
        <
        <div className="auth__wrapper">
         <div className="auth__content">
            <div className="auth__title">
                Log in to Summarist
            </div>
         <button className="btn guest__btn--wrapper">
            Login as Guest
         </button>
         <div className="auth__separator">
            <span className="auth__separator--text">or</span>
         </div>
         <button className="btn google__btn--wrapper">
            Login with Google
         </button>
         </div>

        </div>
    )
}