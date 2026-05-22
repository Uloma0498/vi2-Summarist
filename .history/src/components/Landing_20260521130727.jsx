import React from 'react';
import la

const Landing = () => {
    return (
        <section id="landing">
          <div className="container">
            <div className="row">
                <div className="landing__wrapper">
                    <div className="landing__content">
                    <h1 className="landing__content--title">
                        Gain more knowledge in less time
                    </h1>
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
                        <img src="" alt=""></img>
                    </figure>
                </div>
            </div>
            
          </div>
        </section>
    )
}

export default Landing;