require("dotenv").config();
const express = require("express");
const cors = require("cors");
const memberRouter = require("./routes/member");
const notFound = require("./middleware/notFound");
const ConnectDB = require("./db/connectdb");
const errorHandlerMiddleware = require("./middleware/error-handler")
const app = express();
const port = process.env.PORT || 8080;
app.use(cors({
  origin:"*",
}));
app.use(express.json());

//routes
app.use("/api/v1/", memberRouter);

//middleware
app.use(errorHandlerMiddleware)
app.use(notFound);
const start = async () => {
  try {
    await ConnectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`we are listening on ${port}....`));
  } catch (error) {
    console.log(error);
  }
};

start();
