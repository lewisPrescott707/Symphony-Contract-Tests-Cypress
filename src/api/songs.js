import axios from "axios";

export const getSongs = async (songsUrl) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}${songsUrl}`, {
      headers: {
        Accept: 'application/json'
      }
    })
    return res.data
}