import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { AuthProvider } from "./AuthContext";
import ForYou from "./Pages/ForYou";
import SignIn from "./components/UI/SignIn";
import SignUp from "./components/UI/SignUp";
import BookDetails from "./Pages/BookDetails";
import Player from "./Pages/Player";
import Library from "./components/Library";
import Settings from "./components/Settings";
import SidebarDesktop from "./components/UI/SidebarDesktop";
import SearchInput from "./components/UI/SearchInput";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  return (
    <AuthProvider>
    <Router>
      <div className="App">
        <SidebarDesktop />
        <SearchInput />
        <div className="container">
          <div className="row">
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
              <Route path="/player/:bookId" element={<Player />} />
              <Route path="/library" element={<Library />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/choose"
            </Routes>
          </div>
        </div>

        {isOpen && <SignIn setIsOpen={setIsOpen} />}
        {isSignUpOpen && (
          <SignUp
            isOpen={isSignUpOpen}
            onClose={() => setIsSignUpOpen(false)}
          />
        )}
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
