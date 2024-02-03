import React from 'react'
import { UseUserContext } from './UserContext'

const Progress = () => {
    const {percent} = UseUserContext();
    const width = percent + "%";
  return (
    <div>
        <div className="progress" style={{width:"100%",border:".5px solid black"}}>
            <div className="progress-bar" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width:width}}> 
            {percent}%
            </div>
        </div>
    </div>
  )
}

export default Progress