import React, { useState } from 'react';
import Nav from '../components/Nav';
import Landing from '../components/Landing';
import Features from '../components/Features';
import Reviews from '../components/Reviews';
import Numbers from '../components/Numbers';
import Footer from '../components/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <Nav />
        <Landing />
        <Features />
        <Reviews />
        <Numbers />
        <Footer />
        {isOpen && <SignIn setIsOpen={setIsOpen} />}
        </>
    )
}

export default Home;