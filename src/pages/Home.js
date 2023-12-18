import React, { useEffect, useState } from 'react'

const Home = () => {
  const [n, setN] = useState(0);
  useEffect(() => {
    console.log('hello');
  },[n])
  return (
    <div>

      {/* hello is called when value changes everytime */}
      <button onClick={() => setN((prev) => (prev+1))}>Change to</button>
      {/* instead of prev + 1, we can also use n+1 in above line */}

    </div>
  )
}

export default Home
