const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    //cors is going to allow different ports to send requests to our API bridge
    origin: "http://localhost:3000",
  })
);

require("./config/mongoose.config");

require("./routes/product.routes")(app);

//our node server to listen on port 8000
app.listen(8000, () => console.log("Listening on Port 8000"));
