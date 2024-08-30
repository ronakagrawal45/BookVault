const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
require("./conn/conn")

const user =require("./routes/user");
const Books = require("./routes/book");
const Favorite = require("./routes/favorite");
const Cart = require("./routes/cart")
const Order = require("./routes/order");
app.use(cors());
app.use(express.json());

app.use("/api/v1",user);
app.use("/api/v1",Books);
app.use("/api/v1",Favorite);
app.use("/api/v1",Cart);
app.use("/api/v1",Order);


//creating port
app.listen(process.env.PORT, ()=>{
    console.log(`Server Started at port ${process.env.PORT}`);
})