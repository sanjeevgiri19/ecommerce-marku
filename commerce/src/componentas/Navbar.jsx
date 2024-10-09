import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className="w-[20%] bg-zinc-200 h-full px-2 py-5">
          <div className="h-10 w-36 m-auto border mb-4 border-blue-400 rounded-md flex items-center justify-center ">
            <h1 className="text-regular text-blue-400 ">Add New Products</h1>
          </div>

          <hr className="border border-zinc-400 w-[80%] m-auto" />


          <h2 className="text-xl font-medium mt-3 mb-2 mx-3">Category Filter</h2>

          <div className="mr-44">
          <ul className="flex items-center flex-col list-none space-y-2">
            <li className="flex items-center">
              <div className="h-3 w-3 bg-blue-300 rounded-full inline-block"></div>
              <span className="text-zinc-800 font-medium pl-2">Cat 1</span>
            </li>
            <li className="flex items-center">
              <div className="h-3 w-3 bg-orange-300 rounded-full inline-block"></div>
              <span className="text-zinc-800 font-medium pl-2">Cat 2</span>
            </li>
            <li className="flex items-center">
              <div className="h-3 w-3 bg-green-300 rounded-full inline-block"></div>
              <span className="text-zinc-800 font-medium pl-2">Cat 3</span>
            </li>
          </ul>
            
          </div>

        </nav>
    </>
  )
}

export default Navbar