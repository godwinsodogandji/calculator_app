import { useState } from 'react'
import './App.css'

function App() {
  const [firstNumber, setFirstNumber] = useState('0')
  const [secondNumber, setSecondNumber] = useState('0')
  const [operator, setOperator] = useState('')
  const [result, setResult] = useState('0')
  const [isResultDisplayed, setIsResultDisplayed] = useState(false)


  const handleNumberClick = (number) => {
    if (isResultDisplayed) {
      setFirstNumber(number)
      setSecondNumber('0')
      setOperator('')
      setResult('0')
      setIsResultDisplayed(false)
      return;
    }
    const firstNumberLength = firstNumber.length
    const secondNumberLength = secondNumber.length
    if (firstNumberLength < 10 && !operator) {
      setFirstNumber((preValue) => preValue === '0' ? number : preValue + number)
    } else if (secondNumberLength < 10 && operator) {
      setSecondNumber((preValue) => preValue === '0' ? number : preValue + number)
    }
  }



  const handleOperatorClick = (operator) => {
    setOperator(operator)
  }


  const handleKeyDown = (event) => {
    console.log(event);
  }

  const handleClear = () => {
    setFirstNumber('0')
    setSecondNumber('0')
    setOperator('')
    setResult('0')
    setIsResultDisplayed(false)
  }

  // Fonction pour limiter le nombre de chiffres affichés
  const limitTo10Digits = (number) => {
    const formatedValue = number.toString();

    let result;
    if (formatedValue.length > 10) {
      result = number.toPrecision(10)
    } else {
      result = number
    }
    setResult(result)
  }

  const handleEqualClick = () => {

    if (firstNumber && secondNumber && operator) {
      const num1 = parseInt(firstNumber)
      const num2 = parseInt(secondNumber)
      switch (operator) {
        case '+':
          limitTo10Digits(num1 + num2)
          break;
        case '-':
          limitTo10Digits(num1 - num2)
          break;
        case '*':
          limitTo10Digits(num1 * num2)
          break;
        case '/':
          if (num2 === 0) {
            setResult(0)
          } else {
            limitTo10Digits(num1 / num2)
          }
          break;
        default:
          break;
      }
    }
    setIsResultDisplayed(true)
  }




  return (
    <div onKeyDown={handleKeyDown} tabIndex="0" className='calculator'>


      <h1>Calculator</h1>
      <div className="display">
        <div>{firstNumber}</div>
        <div className='operator'>{operator}</div>
        <div>{secondNumber}</div>
        <div className='result'>
          <div>=</div>
          <div>{result}</div>
        </div>
      </div>

      <div className="buttons">
        <button onClick={() => handleNumberClick("1")}>1</button>
        <button onClick={() => handleNumberClick("2")}>2</button>
        <button onClick={() => handleNumberClick("3")}>3</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={() => handleNumberClick("4")}>4</button>
        <button onClick={() => handleNumberClick("5")}>5</button>
        <button onClick={() => handleNumberClick("6")}>6</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={() => handleNumberClick("7")}>7</button>
        <button onClick={() => handleNumberClick("8")}>8</button>
        <button onClick={() => handleNumberClick("9")}>9</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
        <button onClick={() => handleNumberClick("0")}>0</button>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleEqualClick()}>=</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
      </div>
    </div>
  )
}

export default App
