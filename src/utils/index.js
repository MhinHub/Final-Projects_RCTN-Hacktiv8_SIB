// import axios from 'axios';

//* Get data API
let BASE_URL = 'https://newsapi.org/v2'
let API_KEY1 = '8e6c8f98a4f24114a4aed5c04c7c0b07'
let API_KEY2 = '3feb0320ace04af285fa9c8e2a7add08'

export const apiUrl = {
    indonesia: `${BASE_URL}/top-headlines?country=id&apiKey=${API_KEY1 || API_KEY2}`,
    programming: `${BASE_URL}/everything?q=programming&apiKey=${API_KEY1 || API_KEY2}`,
    covid19: `${BASE_URL}/everything?q=covid&apiKey=${API_KEY1 || API_KEY2}`,
    entertainment: `${BASE_URL}/top-headlines?country=id&category=entertainment&apiKey=${API_KEY1 || API_KEY2}`,
    sports: `${BASE_URL}/top-headlines?country=id&category=sports&apiKey=${API_KEY1 || API_KEY2}`,
    technology: `${BASE_URL}/top-headlines?country=id&category=technology&apiKey=${API_KEY1 || API_KEY2}`,
    byKeyword: `${BASE_URL}/everything?apiKey=${API_KEY1 || API_KEY2}`,
}


//* Fetch data API base on topic

async function fetchOf(topic) {
    const data = await fetch(apiUrl[topic])
        .then(res => res.json())
        .catch(err => console.error('Fetch Error: ' + err))
    return data;
}

//* or use axios
// async function fetchOf(topic) {
//     const { data } = await axios.get(apiUrl[topic]);
//     return data;
// }


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



async function fetchNewsByKeyword(keyword) {
    const data = await fetch(`${apiUrl.byKeyword}&q=${keyword}`)
        .then(res => res.json())
        .catch(err => console.error('Fetch Error: ' + err))
    return data;
}

function formatDate(value) {
    const date = value === undefined ? null : new Date(value);
    return new Intl.DateTimeFormat("id", { dateStyle: "long" }).format(date);
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


