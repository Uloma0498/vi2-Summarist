import './App.css';
import Nav from './components/Nav';
import Landing from './components/Landing';
import AuthForm from './AuthForm';


function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <AuthForm />
      <Feature />
    </div>
  )
}

export default App;
