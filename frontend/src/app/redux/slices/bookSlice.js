import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import createBookWithId from '@/app/utils/createBookWithId'
import { setError } from '@/app/redux/slices/errorSlice'

const initialState = []

export const fatchBook = createAsyncThunk(
    'books/fatchBook',
    async (url, thunkAPI) => {
        try {
            const res = await axios.get(url)
            return res.data
        } catch (error) {
            thunkAPI.dispatch(setError(error.message))
            throw error
        }
    },
)

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
