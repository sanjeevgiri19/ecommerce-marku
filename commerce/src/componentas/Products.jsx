import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
// import axios from "../utils/axios";
import { Link, useNavigate, useParams } from "react-router-dom";

import CircularIndeterminate from "./Loading";
import { toast } from "react-toastify";

const Products = () => {

  const navigate = useNavigate();
  const [products, setProducts] = useContext(ProductContext);
  const [product, setproduct] = useState(null);

  const { id } = useParams();

  // const getSingleProduct = async () => {
  //   try {
  //     const { data } = await axios.get(`/products/${id}`);
  //     //  console.log(data);
  //     setProduct(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    // getSingleProduct();
    if(!product) {
      setproduct(products.filter((p) => p.id == id)[0]);
    }
  }, []);

  const deleteHandler = (id) => {
    const filteredProducts = products.filter((p) => p.id !== id)
    setProducts(filteredProducts);
    localStorage.setItem("products", JSON.stringify(filteredProducts))
    toast.error("Product Deleted Successfully")
    navigate("/");
  }
  

  return product ? (
    <>
      <div className="w-[80%] h-full flex">
        <div className="pt-44 pl-64 flex ">
          <div>
            <img
              className="h-64 w-72 rounded"
              src={`${product.image}`}
              alt="products"
            />
          </div>

          <div className="ml-10 mt-6 w-[75%] h-2/3 ">
            <h1 className="text-xl font-semibold"> {product.title} </h1>
            <h2 className="text-zinc-400 text-sm font-medium">
              {" "}
              {product.category}{" "}
            </h2>
            <h2 className="font-medium my-3">$ {product.price} </h2>
            <p className=" mb-6"> {product.description} </p>
            <div>
              <Link to={`/edit/${product.id}`} className="mr-3  px-4 py-1 border border-blue-400 text-blue-500">
                Edit
              </Link>

              <button onClick={() => deleteHandler(product.id)} className="  px-4 font-medium py-1 border border-red-400 text-red-500">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <CircularIndeterminate />
  );
};

export default Products;
