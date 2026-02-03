const express = require("express");
const connection = require("./config/db");
const dotenv=require("dotenv")
const userRoute  = require("./router/userRouter");
const productRoute=require("./router/productRouter")
const app = express();
const PORT =  4000;
const cors=require("cors")


dotenv.config();
app.use(cors())

connection();
app.use(express.json())

app.use("/api", userRoute);
app.use("/api", productRoute)

app.listen(PORT, () => {
  console.log("Server listening on port :", PORT);
});
