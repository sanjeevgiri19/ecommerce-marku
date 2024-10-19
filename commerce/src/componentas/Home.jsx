import Navbar from './Navbar';
import { Link } from "react-router-dom";
import { ProductContext } from '../utils/Context';
import { useContext } from 'react';
import Loading from './Loading';

const Home = () => {
  const [products] = useContext(ProductContext);
  console.log(products);

  return (
    products ? (
      <>
        <Navbar />
        <div className='w-[85%] mx-auto pt-4 grid grid-cols-4 gap-2'>
          {products.map((product, index) => (
            <Link
             key={product.id}
             to={`/products/${product.id}`}
              className='border border-gray-300 p-3 rounded-lg hover:shadow-xl transition-shadow duration-200'
            >
              <img
                className="h-48 w-full object-cover rounded mb-3 hover:scale-105 transition-transform duration-200 cursor-pointer"
                src={product.image}
                // alt={product.title}
              />
              <h1 className="text-lg font-semibold hover:text-blue-600">{product.title}</h1>
            </Link>
          ))}
        </div>
      </>
    ) : (
      <Loading />
    )
  );
};

export default Home;
