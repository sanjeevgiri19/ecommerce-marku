import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [products] = useContext(ProductContext);

  // Extract distinct categories if products exist
  let distinctCategory = products 
    ? [...new Set(products.map(product => product.category))]
    : [];

  // console.log(distinctCategory);

  // let distinctCategory = products && products.reduce((acc, currVal) => [...acc, currVal.category], []);
  // distinctCategory = [...new Set(distinctCategory)]
  // console.log(distinctCategory);


  const color = () => {
    return `rgba(${(Math.random()*255).toFixed()}, ${(Math.random()*255).toFixed()}, ${(Math.random()*255).toFixed()}, 0.5)`
  
    
  }
  // console.log(color());

  return (
    <>
        <nav className="w-[20%] bg-zinc-200 h-full px-2 py-5">
          <div className="h-10 w-36 m-auto border mb-4 border-blue-400 rounded-md flex items-center justify-center ">
            <h1 className="text-regular text-blue-400 ">Add New Products</h1>
          </div>

          <hr className="border border-zinc-400 w-[80%] m-auto" />


          <h2 className="text-xl font-medium mt-3 mb-2 mx-3">Category Filter</h2>

          <div className="">

            {distinctCategory.map((catg, index) => (

          <Link 
              key={index}
              to={`/?category=${catg}`}
          >
            <li className=" list-none">
              <div style={{backgroundColor: color()}} className="h-3 w-3 rounded-full inline-block"></div>
              <span className="text-zinc-800 font-medium pl-2">{catg}</span>
            </li>          
          </Link>
            ))}
            
          </div>

        </nav>
    </>
  )
}

export default Navbar