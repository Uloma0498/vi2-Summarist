import './App.css';
import Nav from './components/Nav';
import Landing from './components/Landing';


function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <AuthForm />
    </div>
  )
}

export default App;
