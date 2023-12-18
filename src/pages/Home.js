import React, { useState } from 'react'
import Contact from './Contact';

const Home = () => {
  const [data, setData] = useState([]);

  const addSome = (obj) => {
    setData([...data, obj]);
  }
  const remove =(index) => {
    data.splice(index,1);
    setData([...data]);
  }

console.log(data);
  return (
    <div>
      <Contact addSome={addSome} />

      {data.map((post,i) => {
        return <div key={i} className='shadow-xl max-w-lg flex items-baseline justify-between'>
         <div>
           <h1>{post.title}</h1>
          <p>{post.detail}</p></div>

          <button onClick={remove}><i className ="fa-solid fa-trash"></i></button>
        </div>
      })}
    </div>
  )
}

export default Home
