import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CategoryForm from "./CategoryForm";
//import ProductPage from "./ProductPage"; // we will create
function App() {
   return (
    <Router>
      <div className="d-flex">

        {/* 🔹 LEFT SIDEBAR */}
        <div className="bg-dark text-white p-3" style={{ width: "200px", height: "100vh" }}>
          <h4>Menu</h4>

          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/category">
                Add Category
              </Link>
            </li>

            {/* <li className="nav-item">
              <Link className="nav-link text-white" to="/product">
                Add Product
              </Link>
            </li> */}
          </ul>
        </div>

        {/* 🔹 RIGHT CONTENT */}
        <div className="flex-grow-1 p-4">
          <Routes>
            <Route path="/" element={<CategoryForm />} />
            <Route path="/category" element={<CategoryForm />} />
            {/* <Route path="/product" element={<ProductPage />} /> */}
          </Routes>
        </div>

      </div>
    </Router>
  );
}


  
export default App;
