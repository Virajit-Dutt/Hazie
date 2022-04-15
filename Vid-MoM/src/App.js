import './App.css';
import Navbar from './Component/NavBar';
import UploadArea from './Component/UploadArea';
import DisplayArea from './Component/DisplayArea';

function App() {
  return (
    <div className="App">
        <Navbar />
        <div className='upload-parent-div'>
          <div className = "upload-area-class">
            <UploadArea />
          </div>
          <div className = "display-area-class">
            <DisplayArea  />
          </div>
        </div>
    </div>

  );
}

export default App;
