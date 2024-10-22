import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from '../utils/Context';
import { toast } from 'react-toastify';

const Edit = () => {

  const [products, setProducts] = useContext(ProductContext);
  const navigate = useNavigate();
  const {id} = useParams();
  const [product, setproduct] = useState(
   { 
    title: "",
    price: "",
    category: "",
    image: "",
    description: ""
  }
  )

  useEffect(() => {
     setproduct(products.filter((p) => p.id == id)[0]);
  }, [id])

  // console.log(product);
  

  const handleChange = (e) => {
  //  console.log (e.target.name, e.target.value);
   setproduct({...product, [e.target.name]: e.target.value });

  }

   const AddProductHandler = (e) => {
     e.preventDefault();

     if (
       product.title.trim().length < 5 ||
       product.category.trim().length < 5 ||
       product.image.trim().length < 5 ||
       product.price.trim().length < 1 ||
      product.description.trim().length < 5
     ) {
       alert("Each input must have some specific characters");
       return;
     }

     const pi = products.findIndex((p) => p.id == id)
    //  console.log(product, pi);
     
     const copyData = [...products]
     copyData[pi] = {...products[pi], ...product}
     console.log(copyData);
     
     

    //  const id = nanoid();
    //  const product = {
    //    id,
    //    title,
    //    image,
    //    category,
    //    price,
    //    description,
    //  };

    //  console.log(product);

     // Update the products state safely
     setProducts(copyData);
     localStorage.setItem("products", JSON.stringify(copyData));
     toast.success("Product Edited Successfully")
     navigate(-1);
   };

  return (
    <form
      onSubmit={AddProductHandler}
      className="w-screen h-screen flex items-center pt-[3%] flex-col gap-3"
    >
      <h1 className="text-2xl font-semibold mb-4">Add New Products</h1>
      <input
        type="url"
        placeholder="Image"
        className="text-xl rounded w-1/2 outline-none border border-zinc-400 py-1 px-2"
        name="image"
        onChange={handleChange}
        value={product && product.image}
      />

      <input
        type="text"
        placeholder="Title"
        className="text-xl rounded w-1/2 outline-none border border-zinc-400 py-1 px-2"
        name="title"
        onChange={handleChange}
        value={product && product.title}
      />

      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="Category"
          className="text-xl rounded w-[48%] outline-none border border-zinc-400 py-1 px-2"
          name="category"
          onChange={handleChange}
          value={product && product.category}
        />

        <input
          type="number"
          placeholder="Price"
          className="text-xl rounded w-[48%] outline-none border border-zinc-400 py-1 px-2"
          name="price"
          onChange={handleChange}
          value={product && product.price}
        />
      </div>

      <textarea
        placeholder="Enter product description"
        className="text-xl rounded border outline-none py-1 px-2 border-zinc-400 w-1/2 mb-3"
        rows="8"
        name="description"
        onChange={handleChange}
        value={product && product.description}
      ></textarea>

      <div className="w-1/2">
        <button className="text-regular border border-blue-400 rounded-md px-3 py-2 text-blue-400">
          Edit Products
        </button>
      </div>
    </form>
  );
}

export default Edit