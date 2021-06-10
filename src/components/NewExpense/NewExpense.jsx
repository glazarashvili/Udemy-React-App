import React from 'react'

import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = ({ onAddExpense }) => {

  const [isEditing, setIsEditing] = React.useState(false)

  const startEditingHandler = () => {
    setIsEditing(true)
  }

  const stopEditingHandler = () => {
    setIsEditing(false)
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    console.log(expenseData)
    onAddExpense(expenseData)
    setIsEditing(false)
  }

  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
  )
}

export default NewExpense
