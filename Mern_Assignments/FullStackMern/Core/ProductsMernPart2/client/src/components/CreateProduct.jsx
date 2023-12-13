import { useState } from "react";
import axios from "axios";




const CreateProduct = (props) => {
  console.log(props)
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/products", {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setTitle("");
        setPrice("");
        setDescription("");
        


        
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error creating product");

      });
  };

  return (
    <div className="page-container">
      <div className="card">
        <header>Product Manager</header>

        <form onSubmit={submitHandler}>
          <div className="form-fields">
            <label>Title</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              name="title"
              type="text"
              required={true}
              autoFocus={true}

            />
          </div>

          <div className="form-fields">
            <label>Price</label>
            <input
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              name="price"
              type="number"
              required={true}
            />
          </div>

          <div className="form-fields">
            <label>Description</label>
            <input
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              name="description"
              type="text"
              required={true}

            />
          </div>

          <div className="form-fields">

            <input className="submit-input" type="submit" value="Create" />

          </div>

        </form>


      </div>

    </div>
    
  );
};

export default CreateProduct;
