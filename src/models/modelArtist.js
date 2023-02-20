const mongoose = require("mongoose");

const ArtistSchema = new mongoose.Schema({
    artistGenre: {
        type: String,
        required: false
    },
    artistName: {
        type: String,
        required: true
    },
    artistLastname: {
        type: String,
        requiered: false
    },
    artistCountry: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("ArtistModel", ArtistSchema);
