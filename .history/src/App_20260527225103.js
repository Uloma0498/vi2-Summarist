import './App.css';
import { useState } from 'react';
import { auth } from "./firebase/init";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import ForYou from './Pages/ForYou';
import SignIn from './components/UI/SignIn';
import SignUp from './components/UI/SignUp';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path='/signup' element={SignUp} />
      <Route path='/login' element={SignIn} />
      <Route path='/for-you' element={ForYou} />
      <Route path='/' element={Home} />
      </Routes>
      <Home setIsOpen={setIsOpen} />} />
    </div>
    </Router>
  )
}

export default App;
