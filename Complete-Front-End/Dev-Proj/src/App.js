import react from 'react'
import './App.css';
import Landing from './Components/Landing-page';
import MainCont from './Components/Main-Cont'
import AboutUs from './Components/about-us.js'

function App() {
  return (
    <div className="App">
      <Landing />
      <MainCont />
      <AboutUs />
    </div>
  );
}

export default App;
