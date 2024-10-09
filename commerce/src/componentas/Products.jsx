import React from 'react'

const Products = () => {
  return (
    <>
        <div className="w-[80%] h-full flex">
          <div className="p-52 flex ">
            <div>
              <img className="h-64 w-72 rounded" src="https://images.unsplash.com/photo-1511405946472-a37e3b5ccd47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFnfGVufDB8fDB8fHww" alt="products" />
            </div>

            <div className="ml-10 mt-6">
              <h1 className="text-xl font-semibold">The King's Slayer Jon Snow</h1>
              <h2 className="text-zinc-400 text-sm font-medium">Category</h2>
              <h2 className="font-medium my-3">$ 169.00</h2>
              <p className=" mb-6">Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
              <div>
                <button className="mr-3  px-4 py-1 border border-blue-400 text-blue-500">Edit</button>
                <button className="  px-4 font-medium py-1 border border-red-400 text-red-500">Delete</button>
              </div>

            </div>
          </div>

        </div>
    </>
  )
}

export default Products