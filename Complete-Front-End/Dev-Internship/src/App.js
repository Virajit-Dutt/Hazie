import React, {useState, useEffect} from 'react';
import data from './data.json'
import './App.css';
import Navbar from './Components/Navbar';
import MainCont from './Components/MainCont';

function App() {

  const [viewCard, setViewCard] = useState(true)
  const cardDisp = () => {
    setViewCard(prevState => !prevState)
  }

  const [task, setTask] = useState('')

  const inputValue = (e) => {
    setTask(e.target.value)
  }

  // data.map(
  //   post => {
  //     if (task === post.cardHeading){
  //         setMainCardDisp(true)
  //     } else {
  //       setMainCardDisp(false)
  //     }
  //   }
  // )

  console.log(task)

  return (
    <div className="App">
      <Navbar />

      <div className="search-parent-div">
        {/* <form method='post' action='' id='searchForm'> */}
            <div className='search-box'>
              <input 
              type="text" 
              className='input-box'
              value={task}
              onChange = {inputValue}
              />
              <button className='search-btn' type='submit' onClick={cardDisp} >
                Search
              </button>
            </div>
        {/* </form> */}
      </div>

      {
        viewCard
        ?
        <MainCont task = {task} setTask = {setTask} />
        :
        <div className='main-card-alt'>

        </div>
      }
    </div>
  );
}

export default App;
