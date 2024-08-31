import axios from "axios";

// const domain = "https://test-api.melo.works";
const domain = "https://api.melo.works";

const api = axios.create({
  withCredentials: true,
});

const getArtist = async (artistName) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await api.get(`${domain}/${artistName}`);
      resolve(response);
    } catch (error) {
      if (error.response) {
        reject(error.response.data);
      } else if (error.request) {
        reject("No response received:");
      } else {
        reject(error.message);
      }
    }
  });
}

const getArtistSongs = async (artistName, artistSongName) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await api.get(`${domain}/${artistName}/${artistSongName}`);
      resolve(response);
    } catch (error) {
      if (error.response) {
        reject(error.response.data);
      } else if (error.request) {
        reject("No response received:");
      } else {
        reject(error.message);
      }
    }
  });
}

export { getArtist, getArtistSongs, domain };