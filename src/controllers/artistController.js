const artistService = require("../services/artistService");

const getAllArtists = (req, res) => {
    const allArtists = artistService.getAllArtists(); 
    res.send("Get all Artists");
}

const getOneArtist = (req, res) => {
    const oneArtist = artistService.getOneArtist(req.params.artistId);
    res.send(`Get Artist ${req.params.artistId}`);
}

const createNewArtist = (req, res) => {
    const createdArtist = artistService.createNewArtist(req.params.artistId);
    res.send(`Create Artist ${req.params.artistId}`);
}

const updateOneArtist = (req, res) => {
    const  updatedArtist = artistService.updateOneArtist(req.params.artistId);
    res.send(`Update Artist ${req.params.artistId}`);
}

const deleteOneArtist = (req, res) => {
    artistService.deleteOneArtist();
}

module.exports = {
    getAllArtists,
    getOneArtist,
    createNewArtist,
    updateOneArtist,
    deleteOneArtist
}