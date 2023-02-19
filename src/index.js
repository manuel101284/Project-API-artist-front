const express = require("express");
//const v1ArtistRouter = require("./v1/routes/artistRouters");
const v1ArtistRouter = require("./v1/routes/artistRouters"); // Conect to mongoDB
const bodyParser = require("body-parser");
require("dotenv").config();
const mongoose = require("mongoose"); // This is for the conecction to a mongoDB Database
const cors = require("cors")

const app = express();
const port = process.env.PORT || 3000;
mongoose.set("strictQuery", true);

const conecctionOptions = { useUnifiedTopology: true, useNewUrlParser: true }; // Conect to mongoDB

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use("/api/v1/artists", v1ArtistRouter);

// This let to conect the app with a mongoDB
// mongoose.connect(process.env.MONGODB_URI)
//     .then(() => console.log("Conectado a MongoDB Atlas"))
//     .catch((err) => console.error(err))

mongoose.connect("mongodb://127.0.0.1:27017/MusicDB", conecctionOptions)
    .then(() => console.log("The conection is OK"))
    .catch((err) => console.log(err));



app.listen(port, () => {
    console.log(` The server is working on port ${port}`)
});

process.on('uncaughtException', function (err) {
    console.log(err);
});