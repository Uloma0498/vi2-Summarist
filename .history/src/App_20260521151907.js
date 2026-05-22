import './App.css';
import Nav from './components/Nav';
import Landing from './components/Landing';
import AuthForm from './AuthForm';
import Features from './components/Features';


function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Features />
      <AuthForm />
    </div>
  )
}

export default App;
