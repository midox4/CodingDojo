const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

//const CHAT_ENGINE_PROJECT_ID = "d01f12db-6090-4390-b39a-4e9a83bc0641";
// const CHAT_ENGINE_PRIVATE_KEY = "";

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  // Store a user-copy on Chat Engine!
  // Docs at rest.chatengine.io
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username:username , secret : username,first_name:username },
      { headers: { "Private-Key": "c98b8ae2-d1be-4668-81bd-ed663d4bc81a" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

// app.post("/login", async (req, res) => {
//   const { username, secret } = req.body;

//   // Fetch this user from Chat Engine in this project!
//   // Docs at rest.chatengine.io
//   try {
//     const r = await axios.get("https://api.chatengine.io/users/me/", {
//       headers: {
//         "Project-ID": CHAT_ENGINE_PROJECT_ID,
//         "User-Name": username,
//         "User-Secret": secret,
//       },
//     });
//     return res.status(r.status).json(r.data);
//   } catch (e) {
//     return res.status(e.response.status).json(e.response.data);
//   }
// });

// vvv On port 3001!
const port =3001
app.listen(port, (req,res)=>{
  console.log(`server running on port ${port}`)
});