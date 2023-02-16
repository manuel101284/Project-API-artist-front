const express = require("express");
const v1ArtistRouter = require("./v1/routes/artistRouters");
//const router = express.Router;

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/v1", v1ArtistRouter);

app.listen(PORT, () => {
    console.log(`The server is working on port ${PORT}`)
});
