// import axios from 'axios';


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

async function fetchOf(topic) {
    const data = await fetch(apiUrl[topic]);
    return data.json();
}

function fetchNewsIndonesia() {
    return fetchOf('indonesia');
}

function fetchNewsProgramming() {
    return fetchOf('programming');
}

function fetchNewsCovid19() {
    return fetchOf('covid19');
}

function fetchNewsEntertainment() {
    return fetchOf('entertainment');
}

function fetchNewsSports() {
    return fetchOf('sports');
}

function fetchNewsTechnology() {
    return fetchOf('technology');
}

function fetchNewsByKeyword(keyword) {
    return fetchOf('byKeyword').concat(`&q=${keyword}`);
}


function formatDate(value) {
    const date = value === undefined ? null : new Date(value);
    return new Intl.DateTimeFormat("en-GB", { dateStyle: "medium" }).format(date);
}



export {
    fetchNewsIndonesia,
    fetchNewsProgramming,
    fetchNewsCovid19,
    fetchNewsEntertainment,
    fetchNewsSports,
    fetchNewsTechnology,
    fetchNewsByKeyword,
    formatDate
}


