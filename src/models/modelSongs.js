const mongoose  = require("mongoose")

const SongSchema = new mongoose.Schema({
    songId: String,
    artistId: String,
    songTitle: String,
    songYear: Number,
    songAlbum: String
})

module.exports = mongoose.model("SongModel", SongSchema)