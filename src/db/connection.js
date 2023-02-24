const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
// mongodb+srv://vanshul_dahiya:manish@cluster0.1uoalh5.mongodb.net/dyanmic?retryWrites=true&w=majority
// .connect("mongodb://0.0.0.0:27017/dynamic")
mongoose
  .connect(
    "mongodb+srv://vanshul_dahiya:manish@cluster0.1uoalh5.mongodb.net/dyanmic?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connection successful");
  })
  .catch((e) => {
    console.log(e.message);
  });
