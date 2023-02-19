import React, { useState, useEffect } from 'react'
import './App.css'
import Die from '../components/Die'
import { nanoid } from "nanoid"
import Confetti from 'react-confetti'

function App() {

  const [dieNum, setDieNum] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    const allDieHeld = dieNum.every(die => die.isHeld)
    const firstDieValue = dieNum[0].value
    const allDieValue = dieNum.every(die => die.value === firstDieValue)

    if (allDieHeld && allDieValue) {
      setTenzies(true)
      console.log("you've won")
    }
  }, [dieNum])

  function generateNewDice() {
    let num = Math.floor(Math.random() * 6) + 1
    return {
      value: num, 
      isHeld: false,
      id: nanoid()
      }
  }

  function allNewDice() {
    const arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(generateNewDice())
    }
    return arr
  }

  function rollDice() {
    if (!tenzies) {
      setDieNum(prevDieNum => prevDieNum.map(die => {
        return die.isHeld ?
          die :
          generateNewDice()
      }))
    } else {
      setTenzies(false)
      setDieNum(allNewDice())
    }
  }

  function holdDice(id) {
    setDieNum(prevDieNum => prevDieNum.map(die => {
      return die.id === id ?
        { ...die, isHeld: !die.isHeld } :
        die 
    }))
  }

  const diceElements = dieNum.map(die =>
    <Die key={die.id} value={die.value} isHeld={die.isHeld} handleClick={() => holdDice(die.id)} />
  )


  
  return (
    <main>
      {tenzies && <Confetti />}
      <h1>Tenzies</h1>
		  <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      
      <div id="dice-container">
        {diceElements}
      </div>   
      <button
        className="button"
        onClick={rollDice}
      >
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  )
}



export default App
