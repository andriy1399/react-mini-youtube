import axios from 'axios';
const KEY = 'AIzaSyAt3_cLudEmjyv4VNxUXQnpRZ5BbchOIO8';
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 5,
    key: KEY,
  }
});

