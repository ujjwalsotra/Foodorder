import React from 'react'
import Input from '../../UI/Input'
import classes from './MealItemform.module.css'
function MealItemform(props) {
  return (
    <form className={classes.form}>
        <Input label="Amount" input={{
            id: 'amount'+props.id,
            type: 'number',
            min: '0',
            max: '5',
            step: '1',
            defaultValue: '1'
        }} />
        <button>Add</button>
    </form>
  )
}

export default MealItemform