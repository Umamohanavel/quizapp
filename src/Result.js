import React from 'react'
import { UseUserContext } from './UserContext'
import { questions } from './questions'

const Result = () => {
  const {mark} = UseUserContext()
  return (
    <div className='display-5'>
      Your mark is {mark} / {questions.length}
    </div>
  )
}

export default Result