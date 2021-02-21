import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PizzaForm from './PizzaForm'

const initialFormValues = {
    // pizza size dropdown //
    size: '',

    // radio buttons //
    sauce: '',

    // checkboxes //
    pepperoni: false,
    sausage: false,
    canadianBacon: false,
    spicyItalianSausage: false,
    grilledChicken: false,
    onions: false,
    greenPeppers: false,
    dicedTomatoes: false,
    blackOlives: false,
    roastedGarlic: false,
    artichokeHearts: false,
    threeCheese: false,
    pineapple: false,
    extraCheese: false,

    // text input //
    instructions: ''

}

const initialFormErros = {
    size: '',
    sauce: '',
    instructions: ''
}

const initialPizza = []


export default  function Pizza() {
  const [pizza, setPizza] = useState(initialPizza)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErros)

  const postNewPizza = newPizza => {
    axios.post("https://reqres.in/")
      .then(res => {
        console.log(res.data)
        setPizza([res.data, ...pizza])
        setFormValues(initialFormValues)
      })
      .catch(err => console.log(err))
  }
    
  return(
    <div className='form container'>
      <h1>Make Your Pizza</h1>
      <PizzaForm />
    </div>
  )
}