import React from 'react'
import { UseUserContext } from './UserContext'
import {BsArrowDown} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <center>
        <div className='display-5'>Welcome to the quiz app</div>
        <br />
        <div className='display-5'>Click here to enter</div>
        <br />
        <div className='display-5'> <BsArrowDown/></div>
        <br />
        <Link className='display-5' to="/instruction" style={{"textDecoration": "none"}}>Click here</Link>
    </center>
  )
}

export default Welcome