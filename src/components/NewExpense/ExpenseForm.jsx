import React, { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = ({ onSaveExpenseData }) => {

  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }

    onSaveExpenseData(expenseData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }

  const onTitleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  }

  const onAmountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
  }

  const onDateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  }


  return (
      <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label>Title</label>
            <input 
              type='text' 
              value={enteredTitle} 
              onChange={onTitleChangeHandler} 
            />
          </div>
          <div className='new-expense__control'>
            <label>Number</label>
            <input 
              type='number' 
              value={enteredAmount}
              min='0.01' 
              step='0.01' 
              onChange={onAmountChangeHandler} 
            />
          </div>
          <div className='new-expense__control'>
            <label>Date</label>
            <input 
              type='date' 
              min='2019-01-01' 
              max='2022-12-31'
              value={enteredDate} 
              onChange={onDateChangeHandler} 
            />
          </div>
        </div>
        <div className='new-expense__actions'>
         <button type='submit'>Add Expense</button>
        </div>
      </form>
  )
}

export default ExpenseForm
