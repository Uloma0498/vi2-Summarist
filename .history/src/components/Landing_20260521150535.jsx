import React from 'react';
import landing from '../assets/landing.png';

const Landing = () => {
    return (
        <section id="landing">
          <div className="container">
            <div className="row">
                <div className="landing__wrapper">
                    <div className="landing__content">
                    <h1 className="landing__content--title">
                        Gain more knowledge
                    </h1>
                    <
                    <p className="landing__content--subtitle">
                        Great summaries for busy people, individuals who barely have time to read, and even people who don't like to read.
                    </p>
                    <a href="/">
                    <button className="btn home__cta--btn">
                        Login
                    </button>
                    </a>
                    </div>
                    <figure className="landing__img--mask">
                        <img src={landing} alt="Landing" />
                    </figure>
                </div>
            </div>
            
          </div>
        </section>
    )
}

export default Landing;