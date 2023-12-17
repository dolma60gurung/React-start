import React from 'react'
import { meals } from '../dummy/meal_data'
import { useNavigate } from 'react-router'
const Home = () => {
const nav = useNavigate();
  return (
    <div className='p-5 grid grid-cols-3 gap-5 '>
    {meals.map((meal) => {
      return <div  onClick={() => nav(`/detail/${meal.idCategory}`,{state: meal })} key={meal.idCategory} className='cursor-pointer' >
        <h1>{meal.strCategory}</h1>
        <img src={meal.strCategoryThumb} alt="" />
        <p>{meal.strCategoryDescription.substring(0,20)+'...'}</p>
        </div>
    })}
    </div>
  )
}

export default Home
