import React from 'react'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
    <div  style={{height:'100vh'}} className='flex flex-col justify-center items-center text-center text-clip '>
        <h2 className='font-bold text-9xl '>404</h2>
        <img width={'600px'} src="https://i.pinimg.com/originals/a3/59/56/a35956ec9f42082d3eeee4ba1b506060.gif" alt="" />
        <h3 className='text-3xl font-bold pb-2'>Look Like You're Lost</h3>
        <h4 className='text-2xl text-yellow-600 font-bold'>The Page You Are Looking For Not Avilable!!</h4>
        <Link to={'/'} className="text-black mt-3 bg-green-500 rounded p-3">Back to Home</Link>
    </div>
  )
}

export default Pnf
