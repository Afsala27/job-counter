import { useState } from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(0)

  const addcount = () => {
    setCounter(counter+1)

  }
  const deccount = () =>{
    setCounter(counter-1)
  }
   
  const clear = () =>{
    setCounter((counter) => counter=0)
  }
  
  const today = new Date()
  const date = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`

  return (
    <div className="App">
      <header className="card">
          <h4>{date}</h4>
          <h2> Job Count : {counter}</h2>
          <button onClick={addcount}> + </button>
          <button onClick={deccount}> - </button>
          <button onClick={clear}> Clear </button>
      </header>
    </div>
  );
}

export default App;
