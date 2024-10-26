import React, { useEffect, useState } from 'react'
import b2 from '../assets/images/kitchen.jpg'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllRecipes } from '../redux/slices/recipeSlice'
import Search from '../components/Search'
const Home = () => {
    const dispatch = useDispatch()
    const { allRecipe, loading, error } = useSelector(state => state.recipeReducer)
    // console.log(allRecipe,loading,error);
    const [currentPage,setCurrentPage] = useState(1)
    const recipePerPage = 8
    const totalPage = Math.ceil(allRecipe?.length/recipePerPage)
    const currentPageLastRecipesIndex = currentPage * recipePerPage
    const currentPageFirstRecipesIndex = currentPageLastRecipesIndex - recipePerPage
    const visibleRecipeCards = allRecipe?.slice(currentPageFirstRecipesIndex,currentPageLastRecipesIndex)

    const naviagteToNextPage =()=>{
        if(currentPage!=totalPage){
            setCurrentPage(currentPage+1)
        }
    }

    const naviagteToPrevPage =()=>{
        if(currentPage!=1){
            setCurrentPage(currentPage-1)
        }
    }

    useEffect(() => {
        dispatch(fetchAllRecipes())
    }, [])
    return (

        <>
            <Header  />
            <div>
                <div className='flex justify-center items-center'>
                    <h2 style={{ position: 'absolute', marginTop: '45rem' }} className='text-yellow-300 font-bolder text-7xl text-center font-extrabold'>Find Your Favourite Foods <span className='text-white'>Recipes</span></h2>
                </div>
                <img style={{ height: '400px', width: '100%',  }} className='img-fluid w-100' src={b2} alt="" />
            </div>
            <Search/>
            {/* card */}
            <div style={{ paddingTop: '10px' }} className='container px-3 mx-auto'>

            {
                loading ?
                <div className='flex justify-center items-center my-5 text-lg'>
                    <img width={'70px'} height={'70px'} className='me-2' src="https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif" alt="loading" />Loading...
                </div>
                :
                <>
                    <div className='grid grid-cols-4 gap-4 mt-5 mb-10'>
                        {
                            allRecipe?.length>0 ?
                            visibleRecipeCards?.map(item=>(
                             <div key={item?.id}  className="card rounded shadow-xl border p-2">
                            <img width={'100%'} style={{height:'300px'}} src={item?.image} alt="" />
                            <div className="text-center">
                                <div className="text-lg font-bold">{item?.name}</div>
                                <div className="text-md ">Cuisine Type:{item?.cuisine}</div>
                                <div className="text-md  text-yellow-400">Rating:{item?.rating}</div>

                                <div className='my-4'>
                                    <Link className="bg-yellow-500 rounded p-2 mt-3 " to={`/${item?.id}/View`}>View More..</Link>
                                </div>
                            </div>
                        </div>
                            ))
                            :
                            <div className="flex justify-center items-center my-5 text-center font-bold text-red-600">No Recipes Found!!</div>
                        }
                    </div>
                    <div className="text-center text-lg font-bold my-5 ">
                      <span onClick={naviagteToPrevPage} className='cursor-pointer'><i className="fa-solid fa-backward me-5"></i></span>
                      <span >{currentPage} of {totalPage}</span>
                      <span onClick={naviagteToNextPage}  className='cursor-pointer'><i className="fa-solid fa-forward ms-5"></i></span>

                    </div>
            </>}
            </div>
        </>
    )
}

export default Home
