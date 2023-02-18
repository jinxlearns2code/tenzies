import { useState, React } from 'react'
import './App.css'
import Die from '../components/Die'

function App() {
  const [dieNum, setDieNum] = useState(allNewDice())

  function allNewDice() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        let num = Math.floor(Math.random() * 6) + 1
        arr.push(num)
    }
    return arr
  }

  const diceElements = dieNum.map(die => <Die value={die} />)
  
  return (
    <main>
      <h1>Tenzies</h1>
		  <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      
      <div id="dice-container">
        {diceElements}
      </div>   
      <button className="button">Roll</button>
    </main>
  )
}

export default App
