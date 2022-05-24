const mongoose = require("mongoose");

const ConnectDB = (url) => {
  return mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((res) =>
      console.log("connected to the database enjoy curd operations!..")
    )
    .catch((err) => console.log(err));
};



module.exports=ConnectDB