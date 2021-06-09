import React, { useState } from 'react'

import './Expenses.css'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear) => {
    console.log('exp .js')
    console.log(selectedYear)
    setFilteredYear(selectedYear)
  }

  return (
    <Card className='expenses'>
      <ExpensesFilter 
        selected={filteredYear} 
        onChangeFilter={filterChangeHandler} 
      />
      {items.map(item => {
        return <ExpenseItem 
          key={item.id} 
          title={item.title} 
          amount={item.amount} 
          date={item.date} 
          />
      })}
    </Card>
  )
}

export default Expenses
