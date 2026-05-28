import './App.css';
import SignIn from './components/UI/SignIn';
import { useState } from 'react';
import { auth } from "./firebase/init";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import SignUp from './components/UI/SignUp';
import ForYou from './Pages/ForYou';


function App() {
  const [isOpen, setIsOpen] = useState(fasle);
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path='/signup' component={SignUp} />
      <Route path='/login' component={SignIn} />
      <Route path='/for-you' component={ForYou} />
      <Route path='/' component={Home} />
      </Routes>
      <Home />
      {isOpen && <SignIn setIsOpen={setIsOpen} />}
    </div>
    </Router>
  )
}

export default App;
