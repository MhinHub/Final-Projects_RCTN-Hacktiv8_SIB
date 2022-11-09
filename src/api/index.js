import axios from "axios";

export const getProducts = async () => {
    return axios.get("https://fakestoreapi.com/products");
};

export const getProductDetail = async (id) => {
    return axios.get(`https://fakestoreapi.com/products/${id}`);
};