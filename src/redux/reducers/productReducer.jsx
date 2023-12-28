import {createSlice} from "@reduxjs/toolkit";
import {add, edit, getAll, getProduct, remove} from "../services/productService";

const initialState = {
    list: [],
    message: "",
    editProduct:{
        title: "",
        description: "",
        price: 0
    }
}
const productSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: builder => {
        builder.addCase(getAll.fulfilled, (state, {payload}) => {
            state.list = payload;
        })
        builder.addCase(add.fulfilled, (state, ) => {
            state.message ="Thêm mới thành công";
        })
        builder.addCase(getProduct.fulfilled, (state, {payload}) => {
            state.editProduct=payload;
        })
        builder.addCase(edit.fulfilled, (state,{payload}) => {
            state.message= `Sửa sản phẩm ${payload.title} thành công`;
        })
        builder.addCase(remove.fulfilled, (state, ) => {
            state.message= `Xóa sản phẩm thành công`;
        })
    }
});
export default productSlice.reducer;