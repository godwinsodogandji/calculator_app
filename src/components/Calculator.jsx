import React, { useState } from 'react'
import Button from './Button'
import Display from './Display'

function Calculator() {
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

    const handleClear = () => {
        setFirstNumber('0')
        setSecondNumber('0')
        setOperator('')
        setResult('0')
        setIsResultDisplayed(false)
    }

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
    const buttons = [
        { value: '1', onClick: handleNumberClick },
        { value: '2', onClick: handleNumberClick },
        { value: '3', onClick: handleNumberClick },
        { value: '+', onClick: handleOperatorClick },
        { value: '4', onClick: handleNumberClick },
        { value: '5', onClick: handleNumberClick },
        { value: '6', onClick: handleNumberClick },
        { value: '-', onClick: handleOperatorClick },
        { value: '7', onClick: handleNumberClick },
        { value: '8', onClick: handleNumberClick },
        { value: '9', onClick: handleNumberClick },
        { value: '*', onClick: handleOperatorClick },
        { value: '0', onClick: handleNumberClick },
        { value: 'C', onClick: handleClear },
        { value: '=', onClick: handleEqualClick },
        { value: '/', onClick: handleOperatorClick }
    ]

  return(
    <div className = 'calculator' >
      <h1>Calculator</h1>
      <Display 
        firstNumber={firstNumber} 
        operator={operator} 
        secondNumber={secondNumber} 
        result={result} 
      />
      <div className="buttons">
        {buttons.map(button => (
          <Button 
            key={button.value} 
            value={button.value} 
            onClick={button.onClick} 
          />
        ))}
      </div>
    </div >
  )
}

export default Calculator