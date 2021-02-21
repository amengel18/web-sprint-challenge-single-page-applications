import React from 'react'
import { useHistory } from 'react-router-dom'

export default function HomePage () {
  let history = useHistory()
  const routeToShop = () => {
    history.push("/pizza")
  }
  
  return (
    <div className='home-wrapper'>
      <h1>Lambda Eats</h1>
      <button 
        onClick={routeToShop}
        className='pizza-button'
      >
      Pizza?
      </button>
    </div>
  )
}