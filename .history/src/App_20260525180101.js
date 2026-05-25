import './App.css';
import Nav from './components/Nav';
import Landing from './components/Landing';
import Features from './components/Features';
import Reviews from './components/Reviews';
import Numbers from './components/Numbers';
import Footer from './components/Footer';
import AuthForm from './AuthForm';
import AuthFormUp from './AuthFormUp';
import { useState } from 'react';
import { auth } from "./firebase/init";


function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Features />
      <Reviews />
      <Numbers />
      <Footer />
      {isOpen && <AuthForm setIsOpen={setIsOpen} />}
      {isOpen }
    </div>
  )
}

export default App;
