// Todo refactoring api
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiUrlbyInput = (arrivalDate, departureDate, guestQty) => {
    return `https://apidojo-booking-v1.p.rapidapi.com/properties/list?offset=0&arrival_date=${arrivalDate}&departure_date=${departureDate}&guest_qty=${guestQty}&dest_ids=835&search_type=region&price_filter_currencycode=IDR&languagecode=id&travel_purpose=leisure`;
};

console.log(apiUrlbyInput('2021-01-01', '2021-01-02', 2));

const apiKey = '00f78e7496msh070c85e2a78bcf1p1b4069jsnfab51c21f3d1';
const apiHost = 'apidojo-booking-v1.p.rapidapi.com';

const getDataApi = async () => {
    try {
        const response = await fetch(apiurl, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': apiHost,
            },
        });
        const json = await response.json();
        console.log('json : ', json);
        return json;
    } catch (error) {
        console.log('error : ', error);
    }
};