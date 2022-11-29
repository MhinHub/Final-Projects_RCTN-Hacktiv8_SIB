// Todo refactoring api
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
            return data;
        }
        catch (error) {
            throw new Error(error);
        }
    }
);

export const getDataApiForSearchbar = createAsyncThunk(
    'api/getDataApiForSearchbar',
    async (arrivalDate, departureDate, roomQty, guestQty, childrenQty, destId) => {
        try {
            const response = await fetch(`${baseUrl}/properties/list?offset=0&arrival_date=${arrivalDate}&departure_date=${departureDate}&room_qty=${roomQty}&guest_qty=${guestQty}&children_qty=${childrenQty}&dest_ids=${destId}&search_type=city&price_filter_currencycode=IDR&languagecode=id&order_by=popularity&travel_purpose=leisure`, options);
            const data = await response.json();
            console.log('json : ', data);
            return FormDataEvent;
        } catch (error) {
            throw new Error(error);
        }
    }
);

const initialState = {
    data: [],
    searchResult: [],
    loading: false,
    error: null
};

export const ApiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDataApiForUrlSearch.pending, (state) => {
                state.loading = true;
            })
            .addCase(getDataApiForUrlSearch.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getDataApiForUrlSearch.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(getDataApiForSearchbar.pending, (state) => {
                state.loading = true;
            })
            .addCase(getDataApiForSearchbar.fulfilled, (state, action) => {
                state.loading = false;
                state.searchResult = action.payload;
            })
            .addCase(getDataApiForSearchbar.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
});

export default ApiSlice.reducer;



