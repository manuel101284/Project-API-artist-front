const express = require("express");
const router = express.Router();
const artistController = require("../../controllers/artistController")

router
    .get("/", artistController.getAllArtists)

    .get("/:artistId", artistController.getOneArtist)

    .post("/:artistId", artistController.createNewArtist)

    .patch("/:artistId", artistController.updateOneArtist)

    .delete("/:artistId", artistController.deleteOneArtist)

module.exports = router;