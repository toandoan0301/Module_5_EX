import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAll = createAsyncThunk(
    'products/getAll',
    async () => {
        let res = await axios.get("http://localhost:3000/products");
        return res.data;
    }
)

export const add = createAsyncThunk(
    'products/add',
    async (newProduct) => {
        return await axios.post("http://localhost:3000/products", newProduct).then(res => res.data);
    }
)
export const getProduct = createAsyncThunk(
    'products/getProduct',
    async (id) => {
        let res = await axios.get("http://localhost:3000/products/"+id);
        return res.data;
    }
)
export const edit = createAsyncThunk(
    'products/editProduct',
    async (product) => {
        let res = await axios.put("http://localhost:3000/products/"+product.id,product);
        return res.data;
    }
)
export const remove = createAsyncThunk(
    'products/delete',
    async (id) => {
        let res = await axios.delete("http://localhost:3000/products/"+id);
        return res.data;
    }
)
