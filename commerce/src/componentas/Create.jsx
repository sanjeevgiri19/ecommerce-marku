import React, { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";

const Create = () => {
  const [products, setProducts] = useContext(ProductContext);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const AddProductHandler = (e) => {
    e.preventDefault();

    if (
      title.trim().length < 5 ||
      category.trim().length < 5 ||
      image.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert("Each input must have some specific characters");
      return;
    }

    const id = nanoid();
    const product = {
      id,
      title,
      image,
      category,
      price,
      description,
    };
    
    console.log(product);

    // Update the products state safely
    setProducts((prevProducts) => ({
      ...prevProducts,
      [id]: product,
    }));
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
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder="Title"
        className="text-xl rounded w-1/2 outline-none border border-zinc-400 py-1 px-2"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="Category"
          className="text-xl rounded w-[48%] outline-none border border-zinc-400 py-1 px-2"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          placeholder="Price"
          className="text-xl rounded w-[48%] outline-none border border-zinc-400 py-1 px-2"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        placeholder="Enter product description"
        className="text-xl rounded border outline-none py-1 px-2 border-zinc-400 w-1/2 mb-3"
        rows="8"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <div className="w-1/2">
        <button className="text-regular border border-blue-400 rounded-md px-3 py-2 text-blue-400">
          Add New Products
        </button>
      </div>
    </form>
  );
};

export default Create;
