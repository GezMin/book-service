import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    title: '',
    author: '',
    onlyFavorite: false,
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
        resetFilter: () => {
            return initialState
        },
        setOnlyFavoriteFilter: state => {
            state.onlyFavorite = !state.onlyFavorite
        },
    },
})

export default filterSlice.reducer
export const {
    setTitleFilter,
    setAuthorFilter,
    resetFilter,
    setOnlyFavoriteFilter,
} = filterSlice.actions

export const selectTitleFilter = state => state.filter.title
export const selectAuthorFilter = state => state.filter.author
export const selectOnlyFavoriteFilter = state => state.filter.onlyFavorite
