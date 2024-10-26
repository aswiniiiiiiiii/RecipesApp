import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'

const View = () => {
  const {id} = useParams()
  console.log(id);
  const [recipes,setRecipes] = useState({})

  useEffect(()=>{
    if(sessionStorage.getItem("allRecipe")){
      const allRecipe = JSON.parse(sessionStorage.getItem("allRecipe"))
     setRecipes( allRecipe?.find(item=>item.id==id))
    }
  },[])
  console.log(recipes);
  
  return (

    <>
      <Header />
      <div style={{paddingTop:'70px',paddingBottom:'40px'}} className="flex content-center items-center mx-5">
        <div className="grid grid-cols-2 items-center border shadow-lg rounded-sm">
            <img width={'100%'} style={{height: '500px'}} src={recipes?.image} alt="" />
             <div className='ms-5 '>
             <h4 className='text-xl font-bold mt-5 '>PID : {recipes?.id}</h4>
                <h1 className="text-4xl font-bold pt-2 ">{recipes?.name}</h1>
                
                <h4 className="font-bold text-green-600 pt-3 text-xl">Cuisine :{recipes?.cuisine}</h4>
                <h4 className="font-bold pt-3 text-yellow-400  text-xl">Rating :{recipes?.rating}</h4>
                <h4 className="font-bold pt-3 text-black text-xl">Difficulity :{recipes?.difficulty}</h4>
                <h4 className="font-bold pt-3 text-black text-xl">Meal Type :{recipes?.mealType }</h4>
                <h4 className="font-bold pt-3 text-black text-xl">Cooking Time  :{recipes?.cookTimeMinutes}</h4>
                <p className='text-xl pt-3'>
                    <span className="font-bold ">Ingredients:</span>{recipes?.ingredients}
                </p>
                <p className='text-xl pt-3 mb-5'>
                    <span className="font-bold">Instructions:</span>{recipes?.instructions}
                </p>
             </div>
        </div>
       
      </div>
    </>
  )
}

export default View
