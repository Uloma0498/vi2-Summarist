import React, { useState } from 'react';
import landing from '../assets/landing.png';

const Landing = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleLoginClick = () => {
        setModalOpen(true); 
    };

    const handleCloseModal = () => {
        setModalOpen(false); 
    };

    return (
        <section id="landing">
          <div className="container">
            <div className="row">
                <div className="landing__wrapper">
                    <div className="landing__content">
                    <h1 className="landing__content__title">
                        Gain more knowledge in less time
                    </h1>
                    <p className="landing__content__subtitle">
                        Great summaries for busy people, individuals who barely have time to read, and even people who don't like to read.
                    </p>
                    <a href="/">
                    <button className="btn home__cta--btn" onClick={handleLoginClick}>
                        Login
                    </button>
                    </a>
                    </div>
                    <figure className="landing__image--mask">
                        <img src={landing} alt="Landing" />
                    </figure>
                    <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
                </div>
            </div> 
          </div>
        </section>
    )
}

export default Landing;