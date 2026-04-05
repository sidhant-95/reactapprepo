import React, {useEffect,useState}from "react";
import axios from "axios";

function CategoryForm() {
  const [name, setName] = useState(""); 
    const [categories, setCategories] = useState([]);

   // 🔹 Fetch categories
  const loadCategories = () => {
    axios.get("https://ef-product-api-app-eubuhddmgycggze3.centralindia-01.azurewebsites.net/api/Categories/getallcategory")
      .then(res => {
        setCategories(res.data);
      })
      .catch(err => console.error(err));
  };
  useEffect(() => {
    loadCategories();
  }, []);
 

    const handleSubmit = (e) => {
        if (!name) {
          alert("Please enter category name");
          return;
        };
      console.log("Button clicked");
      e.preventDefault();
      const data={
        name:name
      };   

      axios.post('https://ef-product-api-app-eubuhddmgycggze3.centralindia-01.azurewebsites.net/api/Categories/AddCategory',  data )
        .then(response => {
          console.log('Category created:', response.data);
          setName("");
          loadCategories(); // Refresh the category list
        })
        .catch(error => {
          console.error('Error creating category:', error);
        });
    };
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add Category</h2>
      <div className="d-flex mb-3">
        {/* 🔹 Input */}
        <input
          type="text"
          placeholder="Enter category"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={handleSubmit} style={{ marginLeft: "10px" }}>
          Add
        </button>
      </div>
      <hr />

     <h2 className="mt-4">Category List</h2>
      <table className="table table-bordered table-striped mt-3">
       <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action1</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((c) => (
            <tr key={c.Id || c.id}>
              <td>{c.Id || c.id}</td>
              <td>{c.Name || c.name}</td>
              <td>
                <button className="btn btn-sm btn-outline-primary">Edit</button>
              </td>
              <td>
                <button className="btn btn-sm btn-outline-danger">Delete</button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CategoryForm;