import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [products] = useContext(ProductContext);

  // Extract distinct categories if products exist
  let distinctCategory =
    products &&
    products.reduce((acc, currVal) => [...acc, currVal.category], []);
  distinctCategory = [...new Set(distinctCategory)];

  

  // Generate random colors for each category
  const generateColor = () => {
    return `rgba(${(Math.random() * 255).toFixed(0)}, ${(
      Math.random() * 255
    ).toFixed(0)}, ${(Math.random() * 255).toFixed(0)}, 0.5)`;
  };
 

  return (
    <nav className="w-[20%] h-full px-2 py-5">
      <div className="h-10 w-36 m-auto border mb-4 border-blue-400 rounded-md flex items-center justify-center ">
        <Link to="/create" className="text-regular text-blue-400 ">
          Add New Products
        </Link>
      </div>

      <hr className="border border-zinc-400 w-[80%] m-auto" />

      <h2 className="text-xl font-medium mt-3 mb-2 mx-3">Category Filter</h2>

      <ul>
        {distinctCategory.map((catg, index) => (
          <Link key={index} to={`/?category=${catg}`}>
            <li className="list-none flex items-center mb-2">
              <div
                style={{ backgroundColor: generateColor() }}
                className="h-3 w-3 rounded-full inline-block"
              ></div>
              <span className="text-zinc-800 font-medium pl-2">{catg}</span>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
