import React, { useState } from 'react'

const Home = () => {
  const [count, setCount] = useState(0);
  const addTo = () =>{
    setCount((prev) => prev + 1 );
  }
  const minusTo = () =>{
    setCount((prev) => prev - 1 );
  }
  console.log('render');
  return (
    <div className='p-5'>
      <button onClick={addTo}>AddtTo</button>
      <h1>{count}</h1>
      <button onClick={minusTo}>MinusTo</button>
    </div>
  )
}

export default Home
