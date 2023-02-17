const artistService = require("../services/artistService");

const getAllArtists = (req, res) => {
    const allArtists = artistService.getAllArtists(); 
    res.send({ status: "OK", data: allArtists });
}

const getOneArtist = (req, res) => {
    const {
        params: { id },
    } = req;

    if(!id) {
        return;
    }
    const artist = artistService.getOneArtist(id);
    res.send({ status: "OK", data: artist });
    //res.send(`Get Artist ${req.params.artistId}`);
}

const createNewArtist = (req, res) => {
    const { body } = req;

    if(
        !body.artistGenre ||
        !body.artistName ||
        !body.artistLastname ||
        !body.artistCountry
    ) {
        return;
    }
    const newArtist = {
        artistGenre: body.artistGenre,
        artistName: body.artistName,
        artistLastname: body.artistLastname,
        artistCountry: body.artistCountry
    }
    
const createdArtist = artistService.createNewArtist(newArtist);
    //res.send(`Create Artist ${req.params.artistId}`);
    res.status(201).send({ status: "OK", data: createdArtist });
}

const updateOneArtist = (req, res) => {
    const {
        body,
        params: { id },
    } = req;

    if (!id) {
        return;
    }

    const  updatedArtist = artistService.updateOneArtist(id, body);
    res.send({ status: "OK", data: updatedArtist });
}

const deleteOneArtist = (req, res) => {
    const {
        params: { id },
    } = req;

    if (!id) {
        return;
    }

    artistService.deleteOneArtist(id);
    res.status(204).send({ status: "OK" });
}

module.exports = {
    getAllArtists,
    getOneArtist,
    createNewArtist,
    updateOneArtist,
    deleteOneArtist
}