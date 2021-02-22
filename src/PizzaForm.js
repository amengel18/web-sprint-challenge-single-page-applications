import React from 'react'

export default function PizzaForm(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors
  } = props
  
  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }
  
  const onChange = evt => {
    const { name, value, type, checked } = evt.target
    const returnValue = type === "checkbox" ? checked : value
    change (name, returnValue)
  }
  
  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Build your own pizza:</h2>

        <button disabled={disabled}>Submit Order</button>

        <div className='errors'>
          <div>{errors.size}</div>
          <div>{errors.sauce}</div>
          <div>{errors.instructions}</div>
        </div>
        
      </div>

      <div className='form-group inputs'>
        <h3>Build your own pizza</h3>
        
        <label>Choice of size (required)
          <select 
            onChange={onChange}
            value={values.size}
            name='size'
          >
            <option value=''>-Select a size-</option>
            <option value='small'>Small 10"</option>
            <option value='medium'>Medium 12"</option>
            <option value='large'>Large 14'</option>
            <option value='extra large'>Extra Large 16"</option>
          </select>
        </label>

        <label>Choice of sauce (required)
          <label>Original Red
            <input 
              name="sauce"
              type="radio"
              value="original red"
              onChange={onChange}
              checked={values.sauce === "original red"}
            />
          </label>
          <label>Garlic Ranch
            <input 
              name="sauce"
              type="radio"
              value="garlic ranch"
              onChange={onChange}
              checked={values.sauce === "garlic ranch"}
            />
          </label>
          <label>BBQ Sauce
            <input 
              name="sauce"
              type="radio"
              value="bbq sauce"
              onChange={onChange}
              checked={values.sauce === "bbq sauce"}
            />
          </label>
          <label>Spinach Alfredo
            <input 
              name="sauce"
              type="radio"
              value="spinach alfredo"
              onChange={onChange}
              checked={values.sauce === "spinach alfredo"}
            />
          </label>
        </label>

        <label>Add Toppings (optional)
          <label>Pepperoni 
            <input 
              name="pepperoni"
              type="checkbox"
              checked={values.pepperoni}
              onChange={onChange}
            />
          </label>
          <label>Sausage 
            <input 
              name="sausage"
              type="checkbox"
              checked={values.sausage}
              onChange={onChange}
            />
          </label>
          <label>Canadian Bacon 
            <input 
              name="canadianBacon"
              type="checkbox"
              checked={values.canadianBacon}
              onChange={onChange}
            />
          </label>
          <label>Spicy Italian Sausage 
            <input 
              name="spicyItalianSausage"
              type="checkbox"
              checked={values.spicyItalianSausage}
              onChange={onChange}
            />
          </label>
        </label>

        <label>Special Instructions 
          <input 
            name="instructions"
            type="text"
            value={values.instructions}
            onChange={onChange}
          />
        </label>
      </div>
    </form>
  )
}