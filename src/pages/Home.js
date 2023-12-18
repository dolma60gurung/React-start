import React, { useState } from 'react'
import Sample from './Sample';
import { movie } from '../dummy/movie_data';

const Home = () => {

  const [count, setCount] = useState(0);
  const addTo = () =>{
    setCount((prev) => prev + 1 );
  }
  const minusTo = () =>{
    setCount((prev) => prev - 1 );
  }

 const moviedata = movie;
 const m = {
  mo : 90
 };
  return (
    <div className='p-5'>
      <h1>{count}</h1>
      <Sample  minusTo={minusTo} some={900} addTo={addTo}/>
    </div>
  )
}

export default Home
