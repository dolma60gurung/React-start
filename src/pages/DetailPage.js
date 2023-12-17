import React from 'react'
import { useLocation } from 'react-router'

const DetailPage = () => {
  const data = useLocation();
  console.log(data)
  return (
    <div>

    </div>
  )
}

export default DetailPage
