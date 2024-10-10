const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passportConfig = require("./middleware/passportConfig");
const cors = require("cors");
require("dotenv").config();

const initRouter = require("./routes");

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://jadhavss1608:xvgtlf4snVQN2hBc@pr1.zkhbt.mongodb.net/?retryWrites=true&w=majority&appName=pr1/jobportal"
  )
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.error(err));

// Create an Express application, set port for server
const app = express();
const port =process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(passportConfig.initialize());

// Initialize routes
initRouter(app);

// Start server

app.get("/",(req,res)=>{
  console.log("Your server is up and running.....");
  return res.status(200).json({
      success:true,
      message:"Your server is up and running.....",
  })
})

app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
  
});
