import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        console.log(res)
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <h1>Axios Get All Title Posts</h1>
      <h2>jsonplaceholder API</h2>
      <ol>
        {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
