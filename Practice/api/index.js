const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");


dotenv.config();
app.use(express.json()); // allow data is format json.

// app.use("/images", express.static(path.join(__dirname, "/images")));

// app.use(express.static(path.join(__dirname, "build")));
// // handel problem: reload -> 404 in heroku
// app.get("/:id", (req, res) => {
//   res.sendFile(path.join(__dirname, '/build/index.html'));
// });
// app.get("/post/:id", (req, res) => {
//   res.sendFile(path.join(__dirname, "/build/index.html"));
// });

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Backend Connected to MongoDB..."))
  .catch((err) => console.log(err));

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "images/image_client");
//   },
//   filename: (req, file, cb) => {
//     cb(null, req.body.name);
//   },
// });

// const upload = multer({ storage: storage });
// app.post("/api/upload", upload.single("file"), (req, res) => {
//   res.status(200).json("File has been uploaded");
// });

app.use("/api/auth", authRoute);
// app.use("/api/users", userRoute);
// app.use("/api/posts", postRoute);
// app.use("/api/categories", categoryRoute);

app.listen(process.env.PORT, () => {
  console.log("Backend is running " + process.env.PORT);
});
