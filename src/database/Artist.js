const DB = require("./db.json");
const { saveToDataBase } = require("./utils");

const getAllArtists = () => {
    return DB.artists;
}

const getOneArtist = (id) => {
    const artist = DB.artists.find((artist) => artist.id === id);

    if (!artist)  {
        return;
    }
    return artist;
}

const createNewArtist = (newArtist) => {
    const isAlreadyAdded =
        DB.artists.findIndex((artist) => artist.artistName === newArtist.artistName) > -1
        ;

    if(isAlreadyAdded) {
        return;
    }

    DB.artists.push(newArtist);
    saveToDataBase(DB);
    return newArtist;
}

const updateOneArtist = (id, artistChanges) => {
    const indexForUpdated = DB.artists.findIndex(
        (artist) => (artist.id = artist)
    );

    if (indexForUpdated === -1) {
        return;
    }

    const updatedArtist = {
        ...DB.artists[indexForUpdated],
        ...artistChanges,
    }

    DB.artists[indexForUpdated] = updatedArtist;
    saveToDataBase(DB);
    return updatedArtist;
}

const deleteOneArtist = (id) => {
    const indexForDeleted = DB.artists.findIndex(
        (artist) => artist.id === id
    );

    if ( indexForDeleted === -1 ) {
        return;
    };

    DB.artists.splice(indexForDeleted, 1);
    saveToDataBase(DB);
}

module.exports = { getAllArtists, getOneArtist, createNewArtist, updateOneArtist, deleteOneArtist };