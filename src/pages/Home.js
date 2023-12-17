import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
const nav = useNavigate();
  return (
    <div>
      <button onClick={() => nav('/detail/dg1234567') } className='bg-green-500 rounded-s-md'>Go to detail page</button>
      <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores quo neque voluptas inventore hic fugit ut, velit cupiditate veritatis ducimus?</h1>


    </div>
  )
}

export default Home
