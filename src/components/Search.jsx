import React from 'react'
import { useDispatch } from 'react-redux'
import { searchRecipe } from '../redux/slices/recipeSlice'

const Search = () => {
    const dispatch = useDispatch()
  return (
    <div className="flex justify-center items-center">
             <div style={{width: '50%'}} className='bg-yellow-300 flex justify-center  m-5 rounded shadow-red-300 '> 
                <input   onChange={e=>dispatch(searchRecipe(e.target.value.toLowerCase()))} placeholder='⁠Search Recipes by its cuisine ...' className='form-control w-full m-3 px-5 py-2 rounded  me-5' type="text" name="" id="" />
                </div>
    </div>
  )
}

export default Search
