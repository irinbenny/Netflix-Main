/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {
  const[show, setShow]=useState(false)
  useEffect(()=>{
    window.addEventListener("scroll",()=>{//first arg should be event & sec arg should be execute
      if(window.scrollY>500){
        setShow(true)
      }
      else{
        setShow(false)
      }
    })
  })//dependency is null
  return (
    <div className={` ${show && 'nav-black'} nav`}>
      <img width={'150px'} src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png" alt="" />
    </div>
  )
}

export default Navbar