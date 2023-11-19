import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  // We expect an array of pokemon objects back and so we will
  //    choose an empty array as the initial value to be held
  //    in state
  const [product, setProduct] = useState([]);

  // this will run immediately after the JSX is rendered
  useEffect(() => {
    fetch(" https://fakestoreapi.com/products") 
      .then((response) => {
        // this will return the data from the response object
        //    in a json format
        console.log(response)

        return response.json();
      })
      .then((response) => {
        // store the json converted data in state so it can be displayed
        setProduct(response);
      })
      .catch((err) => {
        console.log(err);
      });

    // no clean up statement is required since we are not using resources
    //    that will continue to run
  }, []);
  // The empty array as the second parameter makes it so that useEffect
  //    does NOT run more than once

  // using an ordered list to match the wireframe
  return (
    <div className="App" style={{ width: "200px", margin: "auto" }}>
      <ol>
        <h1>all title of the products </h1>
        {product.map((prod, index) => {
          return <li key={index}>
            <h2>{prod.title}</h2>
      <p>{prod.description}</p>

            </li>;
        })}

      </ol>
    </div>
  );
}

export default App;
