import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./componentas/Home.jsx";
// import Navbar from "./components/Navbar.jsx";
// import Products from "./components/Products";
import Products from "./componentas/Products";
import Create from "./componentas/Create.jsx";

function App() {
  const { search, pathname } = useLocation();
  console.log(search, pathname);

  return (
    <>
      <div className="w-full h-screen flex">
        {(pathname != "/" || search.length > 0) && (
          <Link
            to="/"
            className="text-red-500 fomt-semibold absolute top-10 left-[20%]"
          >
            Home
          </Link>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/products/:id" element={<Products />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
