const mongoose = require("mongoose");

const ArtistSchema = new mongoose.Schema({
    artistGenre: String,
    artistName: String,
    artistLastname: String,
    artistCountry: String
})

module.exports = mongoose.model("ArtistModel", ArtistSchema);
