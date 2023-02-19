const {v4: uuid} = require("uuid");
//const Artist = require("../database/Artist");
const Artist = require("../models/modelArtist");

const getAllArtists = () => {
    const allArtists = Artist.getAllArtists();
    return allArtists;
}

const getOneArtist = (artistId) => {
    const uniqueArtist = Artist.getOneArtist(artistId);
    return uniqueArtist;
};

const createNewArtist = (newArtist) => {
    const artistToInsert = {
        ...newArtist,
        artistId: uuid()
    }
    const createdArtist = Artist.createNewArtist(artistToInsert);
    return createdArtist
}

const updateOneArtist = (artistId, changesArtist) => {
    const updatedArtist = Artist.updateOneArtist(artistId, changesArtist);
    return updatedArtist;
}

const deleteOneArtist = (artistId) => {
    Artist.deleteOneArtist(artistId);
}

module.exports = {
    getAllArtists,
    getOneArtist,
    createNewArtist,
    updateOneArtist,
    deleteOneArtist
}