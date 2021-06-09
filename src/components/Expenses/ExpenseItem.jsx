import React from 'react'

import './ExpenseItem.css'
import Card from '../UI/Card'
import ExpenseData from './ExpenseData'

const ExpenseItem = ({ amount, title, date }) => {
  return (
    <Card className='expense-item'>
      <ExpenseData date={date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{amount}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem
