import React from 'react'

function Button({ value, onClick }) {
  return (
    <button 
      onClick={() => onClick(value)} 
      className="buttons button"
    >
      {value}
    </button>
  )
}

export default Button