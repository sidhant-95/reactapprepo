import React,{useEffect,useState} from "react";
import  axios from "axios";

function ProductPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);

  // 🔹 Load categories for dropdown
  useEffect(() => {
    axios.get("https://localhost:7041/api/Categories/getallcategory")
      .then(res => {
        setCategories(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  // 🔹 Submit product
  const handleSubmit = () => {
    if (!name || !price || !categoryId) {
      alert("Please fill all fields");
      return;
    }

    const data = {
      name: name,
      price: parseFloat(price),
      categoryId: parseInt(categoryId)
    };

    axios.post("https://localhost:7041/api/Product/AddProduct", data)
      .then(res => {
        console.log("Product Added:", res.data);
        alert("Product Added Successfully!");

        // clear form
        setName("");
        setPrice("");
        setCategoryId("");
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="container mt-4">
      <h2>Add Product</h2>

      {/* Name */}
      <div className="mb-3">
        <label>Product Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Price */}
      <div className="mb-3">
        <label>Price</label>
        <input
          type="number"
          className="form-control"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      {/* Category Dropdown */}
      <div className="mb-3">
        <label>Category</label>
        <select
          className="form-control"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option value="">Select Category</option>

          {categories.map(c => (
            <option key={c.Id || c.id} value={c.Id || c.id}>
              {c.Name || c.name}
            </option>
          ))}
        </select>
      </div>

      {/* Button */}
      <button className="btn btn-success" onClick={handleSubmit}>
        Add Product
      </button>
    </div>
  );
}
export default ProductPage;

