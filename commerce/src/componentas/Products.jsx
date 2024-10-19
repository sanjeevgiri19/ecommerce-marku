import React, { useEffect, useState } from 'react'
// import { ProductContext } from '../utils/Context'
import axios from '../utils/axios'
import { useParams } from 'react-router-dom'
import Loading from './Loading'

const Products = () => {

  const [products, setProducts] = useState(null)

  const {id} = useParams()

  // const [Products] = useContext(ProductContext)

  const getSingleProduct = async () => {
    try {
     const {data} = await axios.get(`/products/${id}`)
     console.log(data);
     setProducts(data);
     
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    getSingleProduct();
  }, [])

  return (
    products ? (
    <>
        <div className="w-[80%] h-full flex">
          <div className="p-52 flex ">
            <div>
              <img className="h-64 w-72 rounded" src={`${product.image}`} alt="products" />
            </div>

            <div className="ml-10 mt-6">
              <h1 className="text-xl font-semibold"> {product.title} </h1>
              <h2 className="text-zinc-400 text-sm font-medium"> {product.category} </h2>
              <h2 className="font-medium my-3">$ {product.price} </h2>
              <p className=" mb-6"> {product.description} </p>
              <div>
                <button className="mr-3  px-4 py-1 border border-blue-400 text-blue-500">Edit</button>
                <button className="  px-4 font-medium py-1 border border-red-400 text-red-500">Delete</button>
              </div>

            </div>
          </div>

        </div>
    </> ) : (
      <Loading />
    )
  )
}

export default Products