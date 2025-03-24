import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Books from '../pages/Books'

const PagesLayout = (props) => {
  return (
    <div>
    <Navbar/>
    {props.children}
    <Footer/>
    
    </div>
  )
}

export default PagesLayout