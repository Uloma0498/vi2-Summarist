import './App.css';
import AuthForm from './AuthForm';
import { useState } from 'react';
import { auth } from "./firebase/init";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Pages/Home';
import AuthFormUp from './AuthFormUp';


function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Router>
    <div className="App">
      <Route path='/signup' component={AuthFormUp} />
      
      <Home />
      {isOpen && <AuthForm setIsOpen={setIsOpen} />}
    </div>
    </Router>
  )
}

export default App;
