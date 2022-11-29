// Todo refactoring api
import { createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = 'https://apidojo-booking-v1.p.rapidapi.com';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '00f78e7496msh070c85e2a78bcf1p1b4069jsnfab51c21f3d1',
        'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
    }
};

export const getDataApiForUrlSearch = createAsyncThunk(
    'api/getDataApiForUrlSearch',
    async (city) => {
        try {
            const response = await fetch(`${baseUrl}/locations/auto-complete?text=${city}&languagecode=id`, options);
            const data = await response.json();
            console.log('getDataApiForUrlSearch:  ', data);
            return data;
        }
        catch (error) {
            throw new Error(error);
        }
    }
);

export const getDataApiForSearchbar = createAsyncThunk(
    'api/getDataApiForSearchbar',
    async (arrivalDate, departureDate, guestQty, childrenQty) => {
        try {
            const response = await fetch(`${baseUrl}/properties/list?offset=0&arrival_date=${arrivalDate}&departure_date=${departureDate}&guest_qty=${guestQty}&children_qty=${childrenQty}&dest_ids=835&search_type=region&price_filter_currencycode=IDR&languagecode=id&order_by=popularity&travel_purpose=leisure`, options);
            const data = await response.json();
            console.log('json : ', data);
            return FormDataEvent;
        } catch (error) {
            throw new Error(error);
        }
    }
);

// export const getDataApiForDetail = createAsyncThunk(
//     'api/getDataApiForDetail',
//     async (id) => {
//         try {

//         }


