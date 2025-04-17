import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Cart2 from './Pages/Cart2'
import Blog from './Pages/Blog'
import Movie from './Pages/Movie'
import BlogContent from './Pages/BlogContent'

function App() {
  return (
    <div>
      <BrowserRouter basename='/day16'>
     <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>  
        <Route path='/about' element={<About/>}></Route>
        <Route path='/product' element={<Product/>}>
        <Route path='cart/:id?' element={<Cart/>}></Route>
        <Route path='cart2/:name' element={<Cart2/>}></Route>
        </Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/blogcontent/:id' element={<BlogContent/>}></Route>
        <Route path='/movie' element={<Movie/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App