import React, { useState } from 'react';
import "./Counter.css"

function Counter() {
    const [count, setCount] = useState(0);
    return (
      <div className='counterContainer'>
        <button className='plusBtn' onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        {count}
        <button className='minusBtn' onClick={() => setCount(prevCount => {if(prevCount>0) return prevCount - 1
        else return prevCount})}>-</button>
      </div>
    );
  }


  
  export default Counter;