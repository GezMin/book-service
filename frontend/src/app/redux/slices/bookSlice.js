import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import createBookWithId from '@/app/utils/createBookWithId'

const initialState = []

export const fatchBook = createAsyncThunk('books/fatchBook', async () => {
    const res = await axios.get('http://localhost:5000/random-book')
    return res.data
})

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
    extraReducers: builder => {
        builder.addCase(fatchBook.fulfilled, (state, action) => {
            if (action.payload?.title && action.payload?.author) {
                state.push(createBookWithId(action.payload, 'API'))
            }
        })
    },
})

export default bookSlice.reducer
export const { addBook, deleteBook, toggleFavorite } = bookSlice.actions

export const selectBooks = state => state.books
