// MarvelService.js
import axios from 'axios';
import CryptoJS from 'crypto-js';

const fetchComics = () => {
    const apiKey = '73bdc18101ae358c42521a5ee05ebe48';
    const privateKey = '5dc88cc3359026def92995d47c425ae699df1f73';
    const timestamp = new Date().getTime();
    const hash = CryptoJS.MD5(timestamp + privateKey + apiKey).toString();

    return axios.get('https://gateway.marvel.com/v1/public/characters?limit=100&offset=0&orderBy', {
        params: {
            apikey: apiKey,
            ts: timestamp,
            hash: hash
        },
        headers: {
            Accept: '*/*'
        }
    });
};

export default {
    fetchComics
};