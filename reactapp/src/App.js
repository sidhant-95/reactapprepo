import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { loginRequest } from "./auth/msalConfig";
import CategoryForm from "./CategoryForm";

//import ProductPage from "./ProductPage"; // we will create
function App() {
    const { instance } = useMsal();
    const isAuthenticated = useIsAuthenticated();

    const handleLogin = async () => {
      try {
       instance.loginRedirect(loginRequest);
      } catch (error) {
        console.error(error);
      }
    };
    const handleLogout = () => {
      instance.logoutPopup();
    };
    if (!isAuthenticated) {
      return (
        <div>
          <h2>Please Login</h2>
          <button onClick={handleLogin}>Login</button>
        </div>
      );
    }
   return (
     <Router>
       <div className="d-flex">
         {/* 🔹 LEFT SIDEBAR */}
         <div
           className="bg-dark text-white p-3"
           style={{ width: "200px", height: "100vh" }}
         >
           <h4>Menu</h4>

           <ul className="nav flex-column">
             <li className="nav-item">
               <Link className="nav-link text-white" to="/category">
                 Add Category
               </Link>
             </li>
           </ul>

           <button onClick={handleLogout} className="btn btn-danger mt-3">
             Logout
           </button>
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
