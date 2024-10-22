import Navbar from "./Navbar";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import { useContext, useEffect, useState } from "react";
import Loading from "./Loading";
import { CircularProgress } from "@mui/material";
import axios from "../utils/axios";

const Home = () => {
  // Access the products array from the ProductContext
  const [products] = useContext(ProductContext);
  // console.log(products);

  const { search } = useLocation(); //uselocation() is used to get information about the current location(URL) of application.
  // console.log(search);
  const category = decodeURIComponent(search.split("=")[1]); //decodeURIComponent() is  used to extract and decode a query parameter from a URL's search string.
  // console.log(category);

  const [filteredProducts, setfilteredProducts] = useState(null);

  const getProductCategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setfilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!filteredProducts || category == "undefined")
      setfilteredProducts(products); //if filteredproduct ko value xaina or category undefined xa vane setfilteredproduct ma products halne
    if (category != "undefined") getProductCategory(); // if category undefined xa vane getproductcategory call hanne
  }, [category, products]); //every refresh ma chalxa

  // console.log(filteredProducts);

  return products ? (
    <>
      <Navbar />
      <div className="w-[85%] mx-auto pt-20 grid grid-cols-4 gap-2">
        {filteredProducts &&
          filteredProducts.map((product, index) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="border border-gray-300 p-3 rounded-lg hover:shadow-xl transition-shadow duration-200"
            >
              <img
                className="h-48 w-full object-cover rounded mb-3 hover:scale-105 transition-transform duration-200 cursor-pointer"
                src={product.image}
                alt={product.title}
              />
              <h1 className="text-lg font-semibold hover:text-blue-600">
                {product.title}
              </h1>
            </Link>
          ))}
      </div>
    </>
  ) : (
    // CircularIndeterminate
    <CircularProgress />
  );
};

export default Home;
