const artistServices = require("../services/artistServices");
const Artist = require("../models/modelArtist")

// This let view all documents in a collection from mongo compass
const getAllArtists = (req, res) => {
    Artist.find((err, result) => {
        if(err) throw new Error(err);
        res.json(result);
        console.log(result)
    })
} 
// const getAllArtists = (req, res) => {
//     const allArtists = artistService.getAllArtists();
//     res.send({ status: "OK", data: allArtists });
// }


// This let view one specific document from a  collection from mongo compass
const getOneArtist = (req, res) => {
    const { artistId }= req.params;

    if (!artistId) {
        return;
    }
    // const oneArtist = artistServices.getOneArtist(artistId);
    // res.send({ status: "OK", data: oneArtist });
    // //res.send(`Get Artist ${req.params.artistId}`);

    Artist.findById(artistId, (err, result) => {
        if (err) throw new Error(err);
        res.json(result);
        console.log(result)
    })
    
    // Artist.findById(oneArtist, (err, artist) => {
    //     res.json(result);
    //     console.log(result);
    // })
}

// const getOneArtist = (req, res) => {
//     const {
//         params: { artistId },
//     } = req;

//     if (!artistId) {
//         return;
//     }
//     const oneArtist = artistService.getOneArtist(artistId);
//     res.send({ status: "OK", data: oneArtist });
    //res.send(`Get Artist ${req.params.artistId}`);
//}

const createNewArtist = (req, res) => {
    const newArtist = Artist(req.params);

    // if(
    //     !body.artistGenre ||
    //     !body.artistName ||
    //     !body.artistLastname ||
    //     !body.artistCountry
    // ) {
    //     return;
    // }
    // const newArtist = {
    //     artistGenre: body.artistGenre,
    //     artistName: body.artistName,
    //     artistLastname: body.artistLastname,
    //     artistCountry: body.artistCountry
    // }
    Artist.Save(newArtist)
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
    
    // const createdArtist = artistServices.createNewArtist(newArtist);
    //     res.send(`Create Artist ${req.params.artistId}`);
    //     res.status(201).send({ status: "OK", data: createdArtist });
}

const updateOneArtist = (req, res) => {
    const {
        body,
        params: { artistId },
    } = req;

    if (!artistId) {
        return;
    }

    const  updatedArtist = artistServices.updateOneArtist(artistId, body);
    res.send({ status: "OK", data: updatedArtist });
}

const deleteOneArtist = (req, res) => {
    const {
        params: { artistId },
    } = req;

    if (!artistId) {
        return;
    }

    artistServices.deleteOneArtist(artistId);
    res.status(204).send({ status: "OK" });
}

module.exports = {
    getAllArtists,
    getOneArtist,
    createNewArtist,
    updateOneArtist,
    deleteOneArtist
}