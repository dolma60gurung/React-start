import React from 'react'

const Sample = ({minusTo,props, addTo, }) => {
  console.log(props);
  return (
    <div>
      <button onClick={minusTo}>MinusTo</button>
      <br />
      <button onClick={addTo}>AddTo</button>
      <h1>sample page</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque maiores, facilis molestiae quia recusandae illum? Quia ad tempore inventore earum?</p>
    </div>
  )
}

export default Sample
