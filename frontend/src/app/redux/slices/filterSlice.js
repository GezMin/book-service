import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    title: '',
    author: '',
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setTitleFilter: (state, action) => {
            state.title = action.payload
        },
        setAuthorFilter: (state, action) => {
            state.author = action.payload
        },
        resetFilter: state => {
            return initialState
        },
    },
})

export default filterSlice.reducer
export const { setTitleFilter, setAuthorFilter, resetFilter } =
    filterSlice.actions

export const selectTitleFilter = state => state.filter.title
export const selectAuthorFilter = state => state.filter.author
