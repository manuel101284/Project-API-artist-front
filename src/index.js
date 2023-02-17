const express = require("express");
const v1ArtistRouter = require("./v1/routes/artistRouters");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1/artists", v1ArtistRouter);

app.listen(PORT, () => {
    console.log(`The server is working on port ${PORT}`)
});
