import React from 'react'
import { useParams } from 'react-router'

const DetailPage = () => {

  const data = useParams();
  console.log(data);
  return (
    <div>
      <h1>This is a detail page</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi molestias, laudantium magnam doloremque nostrum impedit voluptas, placeat alias dolores possimus vitae dolorem ab ullam veniam perspiciatis, itaque debitis fugiat illo incidunt rem inventore nesciunt. Suscipit illo deleniti velit neque. Enim tenetur nostrum optio similique iure animi saepe laborum eum aspernatur.
      </p>
    </div>
  )
}

export default DetailPage
