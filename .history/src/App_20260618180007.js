import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import ForYou from './Pages/ForYou';
import SignIn from './components/UI/SignIn';
import SignUp from './components/UI/SignUp';
import BookDetails from './Pages/BookDetails';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setIsOpen={setIsOpen}
                setIsSignUpOpen={setIsSignUpOpen}
              />
            }
          />
          <Route path="/for-you" element={<ForYou />} />
          <Route path="/book/:bookId" element={<BookDetails />} />
          <Route path="/players/" element={<Players />} />
        </Routes>

        {isOpen && <SignIn setIsOpen={setIsOpen} />}
        {isSignUpOpen && (
          <SignUp
            isOpen={isSignUpOpen}
            onClose={() => setIsSignUpOpen(false)}
          />
        )}
      </div>
    </Router>
  );
}

export default App;