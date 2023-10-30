import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sheetIndex: 0,
    isfocued: false,
    searchValue: ''
};

const actionSlice = createSlice({
    name: 'actions',
    initialState,
    reducers: {
        getIndex: (state, action) => {
            state.sheetIndex = action.payload;
        }
        ,
        getFocus: (state, action) => {
            state.isfocued = action.payload;
        },
        getSearchValue: (sate, action) => {
            sate.searchValue = action.payload;
        }
    }
});


export default actionSlice.reducer;
export const { getIndex, getFocus, getSearchValue } = actionSlice.actions;