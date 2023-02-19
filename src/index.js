const express = require("express");
//const v1ArtistRouter = require("./v1/routes/artistRouters");
const bodyParser = require("body-parser");

const mongoose = require("mongoose"); // This is for the conecction to a mongoDB Database
const cors = require("cors")

const app = express();
const PORT = process.env.PORT || 3000;

const v1ArtistRouter = require("./v1/routes/artistRouters"); // Conect to mongoDB
const conecctionOptions = { useUnifiedTopology: true, useNewUrlParser: true }; // Conect to mongoDB

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// This let to conect the app with a mongoDB
mongoose.connect("mongodb://127.0.0.1:27017/MusicDB", conecctionOptions)
    .then(() => console.log("The conection is OK"))
    .catch((err) => console.log(err));

app.use("/api/v1/artists", v1ArtistRouter);

app.listen(PORT, () => {
    console.log(` The server is working on port ${PORT}`)
});

process.on('uncaughtException', function (err) {
    console.log(err);
});