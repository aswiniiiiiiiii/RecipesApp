import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{ height: '300px' }} className='bg-yellow-300 container-fluid flex flex-col  mt-5'>
    <div className='flex  justify-between w-full  p-5'> 
      
      <div style={{ width: '400px' }}>
        <Link className='text-black text-2xl font-bold' to={'/'}> 
          <i className="fa-solid fa-utensils me-1"></i>Recipes
        </Link>
        <p className='mt-3'>Designed and built with all the love in the world by the June 2024 Batch student with the help of our contributors.</p>
        <p>Code licensed Aswini, docs CC BY 3.0</p>
        <p>Currently v1.0.0</p>
      </div>
  
      <div className='flex flex-col'>
        <h1 className='text-xl font-bold mb-2'>Links</h1>
        <Link to={'/'}>Home</Link>
        <Link to={'/Recipe'}>Cart</Link>
      </div>
  
      <div className='flex flex-col'>
        <h1 className='text-xl font-bold mb-2'>Guides</h1>
        {/* <Link to={'https://react.dev/'}>React</Link>
        <Link to={'https://react-bootstrap.github.io/'}>React Bootstrap</Link>
        <Link to={'https://reactrouter.com/en/main'}>React Router</Link> */}
      </div>
  
      <div className="flex flex-col">
        <h5 className='text-xl font-bold mb-2'>Contact Us</h5>
        <div className='d-flex'>
          <input placeholder='Enter your email here' type="text" name="" id="" className='text-black rounded' />
          <button style={{width:'30px'}} className='rounded bg-orange-500 ms-3'>
            <i className='fa-solid fa-arrow-right'></i>
          </button>
        </div>
        <div className='icons flex justify-between mt-3'>
          <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'>
            <i className='fa-brands fa-twitter text-black '></i>
          </a>
          <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'>
            <i className='fa-brands fa-instagram text-black'></i>
          </a>
          <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'>
            <i className='fa-brands fa-facebook text-black'></i>
          </a>
          <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'>
            <i className='fa-brands fa-linkedin text-black'></i>
          </a>
          <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'>
            <i className='fa-brands fa-github text-black'></i>
          </a>
          <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'>
            <i className='fa-solid fa-phone text-black'></i>
          </a>
        </div>
      </div>
    </div>
  
    {/* Now the paragraph will appear below the content */}
    <p className=' text-center mb-3 '>Copyright &copy; 2024 E Cart June24 Batch Student. Built with React.</p>
  </div>
  
  )
}

export default Footer