const {v4: uuid} = require("uuid");
const Artist = require("../database/Artist");

const getAllArtists = () => {
    const allArtists = Artist.getAllArtists();
    return allArtists;
}

const getOneArtist = (oneArtist) => {
    const artist = Artist.getOneArtist(id);
    return artist;
}

const createNewArtist = (newArtist) => {
    const artistToInsert = {
        ...newArtist,
        id: uuid()
    }
    const createdArtist = Artist.createNewArtist(artistToInsert);
    return createdArtist
}

const updateOneArtist = (id, changesArtist) => {
    const updatedArtist = Artist.updateOneArtist(id, changesArtist);
    return updatedArtist;
}

const deleteOneArtist = (id) => {
    Artist.deleteOneArtist(id);
}

module.exports = {
    getAllArtists,
    getOneArtist,
    createNewArtist,
    updateOneArtist,
    deleteOneArtist
}