const mongoose = require("mongoose");

const connection = async() => {
 await mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("MongoDb connected Successfully");
    })
    .catch((err) => console.log("Unable to connect mongodb", err));
};


module.exports=connection;