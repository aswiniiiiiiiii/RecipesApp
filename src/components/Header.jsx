import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-yellow-300 p-5 flex justify-between align-items-center'>
     <Link to={'/'}> <h3 className='text-2xl'><i class="fa-solid fa-utensils"></i> Recipes</h3></Link>
      {/* {
        insideHome &&
        <input onChange={e=>dispatch(searchRecipe(e.target.value.toLowerCase()))} placeholder='Serach Recipes here...' className='form-control px-5 py-2 rounded  me-5' type="text" name="" id="" />

      } */}
    </div>
  )
}

export default Header
