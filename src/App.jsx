import { useState, React } from 'react'
import './App.css'
import Die from '../components/Die'

function App() {
  const [dieNum, setDieNum] = useState(allNewDice())

  function allNewDice() {
    const arr = [];
    for (let i = 0; i < 10; i++) {
        let num = Math.floor(Math.random() * 6) + 1
        arr.push({
          value: num, 
          isHeld: false
          })
    }
    return arr
  }

  function rollDice() {
    setDieNum(allNewDice())
  }

  const diceElements = dieNum.map(die => <Die value={die.value} />)
  
  return (
    <main>
      <h1>Tenzies</h1>
		  <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      
      <div id="dice-container">
        {diceElements}
      </div>   
      <button className="button" onClick={rollDice}>Roll</button>
    </main>
  )
}

export default App
