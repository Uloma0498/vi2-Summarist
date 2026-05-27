import './App.css';
import AuthForm from './AuthForm';
import { useState } from 'react';
import { auth } from "./firebase/init";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import AuthFormUp from './AuthFormUp';
import ForYou from './Pages/ForYou';


function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path='/signup' component={AuthFormUp} />
      <Route path='/login' component={AuthForm} />
      <Route path='/for-you' component={ForYou} />
      <Route path='/' component={Home} />

      </Routes>
      <Home />
      {isOpen && <AuthForm setIsOpen={setIsOpen} />}
    </div>
    </Router>
  )
}

export default App;
