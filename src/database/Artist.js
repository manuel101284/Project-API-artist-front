const DB = require("./db.json");
const { saveToDataBase } = require("./utils");
const DBMongo = require("../models/modelArtist.js"); // Brings the database model for artist



// const getAllArtists = () => {
//     return DB.artists;
// }
const getAllArtists = () => {
    return DBMongo.artists;
}

// const getOneArtist = (artistId) => {
//     const artist = DB.artists.find((artist) => artist.id === artistId);

//     if (!artist)  {
//         return;
//     }
//     return artist;
// }
const getOneArtist = (artistId) => {
    const artist = DBMongo.artists.find((artist) => artist.id === artistId)
    if (!artist) {
        return;
    }
    return artist;
}

// const createNewArtist = (newArtist) => {
//     const isAlreadyAdded =
//         DB.artists.findIndex((artist) => artist.artistName === newArtist.artistName) > -1
//         ;

//     if(isAlreadyAdded) {
//         return;
//     }

//     DB.artists.push(newArtist);
//     saveToDataBase(DB);
//     return newArtist;
// }
const createNewArtist = (newArtist) => {
    const isAlreadyAdded =
        DBMongo.artists.findIndex((artist) => artist.artistName === newArtist.artistName) > -1;

    if (isAlreadyAdded) {
        return;
    }

    DBMongo.artists.push(newArtist);
    saveToDataBase(DBMongo);
    return newArtist;
}

const updateOneArtist = (artistId, artistChanges) => {
    const indexForUpdated = DBMongo.artists.findIndex(
        (artist) => (artist.id = artistId)
    );

    if (indexForUpdated === -1) {
        return;
    }

    const updatedArtist = {
        ...DBMongo.artists[indexForUpdated],
        ...artistChanges,
    }

    DB.artists[indexForUpdated] = updatedArtist;
    saveToDataBase(DBMongo);
    return updatedArtist;
}

const deleteOneArtist = (artistId) => {
    const indexForDeleted = DBMongo.artists.findIndex(
        (artist) => artist.id === artistId
    );

    if ( indexForDeleted === -1 ) {
        return;
    };

    DBMongo.artists.splice(indexForDeleted, 1);
    saveToDataBase(DBMongo);
}

module.exports = { getAllArtists, getOneArtist, createNewArtist, updateOneArtist, deleteOneArtist };