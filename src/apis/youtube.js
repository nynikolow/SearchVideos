import axios from 'axios'

const KEY = 'AIzaSyDHLoExZ75mkDjyHR2mvUkj7fdZpxd09Nc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});