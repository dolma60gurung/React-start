import React from 'react'
import { useParams } from 'react-router'
// import { useLocation, useParams } from 'react-router'

const DetailPage = () => {
const data = useParams();
console.log(data);
  return (
    <div>
    <h1>Detail page </h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eaque quas dolorem porro aliquid nihil neque harum cum atque repudiandae voluptate inventore aut, doloribus aspernatur id quisquam, soluta doloremque deserunt, eligendi praesentium quis. Error repudiandae quasi doloribus! Illo ratione quia natus similique quisquam ipsam sapiente mollitia odit consequuntur tempora, repellat vitae officiis suscipit eum eos! Nobis, iusto ipsa animi quaerat debitis mollitia? Totam ratione iste odit a provident. Esse cumque voluptates tenetur perferendis blanditiis qui quae eveniet velit alias doloribus, dolorum voluptatum harum unde necessitatibus natus reiciendis porro! Similique fugit quo ea qui praesentium ipsa ducimus et facere aperiam ullam!</p>
    </div>
  )
}

export default DetailPage
