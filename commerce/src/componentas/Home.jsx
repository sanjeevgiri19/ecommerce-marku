import React from 'react'
import Navbar from './Navbar'
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='w-[80%] pt-4 pl-4 flex flex-wrap  flex-col'>
        <Link
          to="/products"
          className='h-72 w-64 flex flex-col items-center border bprder-black p-2'>
          <img className="h-56 w-52 rounded hover:scale-105 cursor-pointer" src="https://images.unsplash.com/photo-1511405946472-a37e3b5ccd47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFnfDB8fDB8fHww" alt="products" />
          <h1 className=" mt-4 hover:text-blue-600 font-semibold cursor-pointer">Lorem ipsum dolor sit amet.</h1>
        </Link>
      </div>
    </>

  )
}

export default Home