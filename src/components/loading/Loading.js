import React from 'react';
import { BiBrain } from 'react-icons/bi';

const Loading = ({text, color}) => {
  return (
    <div className='loadingContainer'>
      <div className="brain-icon" style={{color:color}}>
        <BiBrain size={50} />
      </div>
      <p className='loadingText' style={{color:color}}>{text}</p>
    </div>
  )
}

export default Loading