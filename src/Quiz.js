import React from 'react'
import Border from './Border'
import './Quiz.css'
import { questions } from './questions'
import { UseUserContext } from './UserContext'
import { Link } from 'react-router-dom'
import Result from './Result'
import Progress from './Progress'

const Quiz = () => {
    const {index, next, value, onRadioChange, submit, time, inter} = UseUserContext();
    const {id, q, o1, o2, o3} = questions[index]
  return (
  <>
  {time.min !== 1
    ?
    <div className='center'>
        <center className='display-5'>Quiz App</center>
        <Border> 
            <div className='content'>
                <p>{id}-{q}</p>
                <ul>
                    <li>
                        <label htmlFor="">
                            <input type="radio"
                                value={o1}
                                checked={value===o1}
                                onChange={onRadioChange}
                             />
                            <span className='p-2 h6'>{o1}</span>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="">
                            <input type="radio"
                                value={o2}
                                checked={value===o2}
                                onChange={onRadioChange} 
                            />
                            <span className='p-2 h6'>{o2}</span>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="">
                            <input type="radio" 
                                value={o3}
                                checked={value===o3}
                                onChange={onRadioChange}
                            /> 
                            <span className='p-2 h6'>{o3}</span>
                        </label>
                    </li>
                </ul>
                {index === questions.length - 1 ?
                    <Link className='display-5' to={"/result"} onClick={submit} style={{textDecoration: "none"}}>Submit</Link>
                    :<button className='btn btn-primary' onClick={next}>Next</button>
                }
            </div>
        </Border>
        <Progress/>
        <div className='display-5 text-center'>{time.min} : {time.sec}</div>
    </div>  
    :
    <>
    {clearInterval(inter)} 
    <Result/>
    </>
    }
</>
  )
}

export default Quiz