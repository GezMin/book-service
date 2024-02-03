import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.push(action.payload)
        },
        deleteBook: (state, action) => {
            return state.filter(book => book.id !== action.payload)
        },
        toggleFavorite: (state, action) => {
            return state.map(book => {
                if (book.id === action.payload) {
                    return { ...book, isFavorite: !book.isFavorite }
                }
                return book
            })
        },
    },
})

export default bookSlice.reducer
export const { addBook, deleteBook, toggleFavorite } = bookSlice.actions

export const selectBooks = state => state.books
