
import { useState } from 'react';
import './App.css';

function App() {

  const [minNumber , setMinNumber] = useState(0)

  const [maxNumber , setMaxNumber] = useState(1)

  const [randomNumber, setRandomNumber] = useState()

  const handleRandom = (e) => {
    e.preventDefault()
    console.log("min number",typeof +minNumber)
    console.log("max number" , maxNumber)
    console.log("some", +minNumber + +maxNumber)
    setRandomNumber(Math.floor(Math.random() * (+maxNumber - +minNumber +1) + +minNumber))
  }



  return (
    <div className="App">

      <div>
        <label>Please choose the lowest number:</label>
        <input type="number" value={minNumber} onChange = {(e) => setMinNumber(e.target.value)}/>
      </div>

      
      <div>
        <label>Please choose the highest number:</label>
        <input type="Number" value={maxNumber} onChange = {(e) => setMaxNumber(e.target.value)}/>
      </div>

      <div>
        <form onSubmit={handleRandom}>
        <h4>Get you random number here!</h4>
        <button>Click!</button>
        </form>
        <h3>{randomNumber}</h3>
      </div>
    </div>
  );
}

export default App;
