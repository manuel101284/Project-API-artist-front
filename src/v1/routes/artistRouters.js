const express = require("express");
const artistController = require("../../controllers/artistController")

const router = express.Router();

router
    .get("/", artistController.getAllArtists)
    .get("/:artistId", artistController.getOneArtist)
    .post("/", artistController.createNewArtist)
    .patch("/:artistId", artistController.updateOneArtist)
    .delete("/:artistId", artistController.deleteOneArtist)

module.exports = router;