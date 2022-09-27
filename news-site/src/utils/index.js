import axios from 'axios';

// Get data API

let BASE_URL = 'https://newsapi.org/v2'
let API_KEY = '3feb0320ace04af285fa9c8e2a7add08'

export const apiUrl = {
    indonesia: `${BASE_URL}/top-headlines?country=id&apiKey=${API_KEY}`,
    programming: `${BASE_URL}/everything?q=programming&apiKey=${API_KEY}`,
    covid19: `${BASE_URL}/everything?q=covid19&apiKey=${API_KEY}`,
    entertainment: `${BASE_URL}/top-headlines?country=id&category=entertainment&apiKey=${API_KEY}`,
    sports: `${BASE_URL}/top-headlines?country=id&category=sports&apiKey=${API_KEY}`,
    technology: `${BASE_URL}/top-headlines?country=id&category=technology&apiKey=${API_KEY}`,
    byKeyword: `${BASE_URL}/everything?apiKey=${API_KEY}`,
}


//* Fetch data API base on topic

async function axiosGet(topic) {
    const {data} = await axios.get(apiUrl[topic]).catch((error) => console.error("Error :" + error));
    return data;
}

function fetchNewsIndonesia() {
    return axiosGet('indonesia');
}

function fetchNewsProgramming() {
    return axiosGet('programming');
}

function fetchNewsCovid19() {
    return axiosGet('covid19');
}

function fetchNewsEntertainment() {
    return axiosGet('entertainment');
}

function fetchNewsSports() {
    return axiosGet('sports');
}

function fetchNewsTechnology() {
    return axiosGet('technology');
}

function fetchNewsByKeyword(keyword) {
    return axiosGet('byKeyword').concat(`&q=${keyword}`);
}


//FIX: date format
function formatDate(value) {
    const date = value === undefined ? null : new Date(value);
    return new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(date);
}


export default {
    fetchNewsIndonesia,
    fetchNewsProgramming,
    fetchNewsCovid19,
    fetchNewsEntertainment,
    fetchNewsSports,
    fetchNewsTechnology,
    fetchNewsByKeyword
}


