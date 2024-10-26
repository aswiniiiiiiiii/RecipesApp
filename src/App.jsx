import { Routes,Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Home from './pages/Home'
import Pnf from './pages/Pnf'
import View from './pages/View'
import Recipe from './pages/Recipe'

function App() {

  return (
    <>
    
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:id/View' element={<View/>}/>
      <Route path='/*' element={<Pnf/>}/>
      <Route path='/Recipe' element={<Recipe/>}/>

     </Routes>
     <Footer/>
    </>
  )
}

export default App
