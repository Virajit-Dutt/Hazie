import './App.css';
import React, {useState} from 'react';
import Navbar from './Component/NavBar';
import UploadArea from './Component/UploadArea';
import DisplayArea from './Component/DisplayArea';

function App() {

  const [dispCont, setDispCont] = useState("none")

  return (
    <div className="App">
        <Navbar />
        <div className='upload-parent-div'>
          <div className = "upload-area-class">
            <UploadArea  dispCont = {dispCont} setDispCont = {setDispCont} />
          </div>
          <div className = "display-area-class">
            <DisplayArea  dispCont = {dispCont} setDispCont = {setDispCont} />
          </div>
        </div>
    </div>

  );
}

export default App;
