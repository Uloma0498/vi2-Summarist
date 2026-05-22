import './App.css';
import Nav from './components/Nav';
import Landing from './components/Landing';
import Features from './components/Features';
import AuthForm from './AuthForm';
import Reviews from './components/Reviews';


function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Features />
      <Reviews />
      
      <AuthForm />
    </div>
  )
}

export default App;
