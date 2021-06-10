import React, { useState } from 'react'

import './Expenses.css'
import Card from '../UI/Card'
import ExpensesList from './ExpensesList'
import ExpensesFilter from './ExpensesFilter'

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <Card className='expenses'>
      <ExpensesFilter 
        selected={filteredYear} 
        onChangeFilter={filterChangeHandler} 
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  )
}

export default Expenses
