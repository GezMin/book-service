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

        resetFilter: state => {
            return initialState
        },

        setAuthorFilter: (state, action) => {
            state.author = action.payload
        },
    },
})

export default filterSlice.reducer
export const { setTitleFilter, resetFilter, setAuthorFilter } =
    filterSlice.actions

export const selectTitleFilter = state => state.filter.title
export const selectAuthorFilter = state => state.filter.author
