import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import createBookWithId from '@/app/utils/createBookWithId'
import { setError } from '@/app/redux/slices/errorSlice'

const initialState = {
    books: [],
    isLoadingViaAPI: false,
}

export const fatchBook = createAsyncThunk(
    'books/fatchBook',
    async (url, thunkAPI) => {
        try {
            const res = await axios.get(url)
            return res.data
        } catch (error) {
            thunkAPI.dispatch(setError(error.message))
            return thunkAPI.rejectWithValue(error)
        }
    },
)

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.books.push(action.payload)
        },
        deleteBook: (state, action) => {
            return {
                ...state,
                books: state.books.filter(book => book.id !== action.payload),
            }
        },
        toggleFavorite: (state, action) => {
            return state.books.forEach(book => {
                if (book.id === action.payload) {
                    book.isFavorite = !book.isFavorite
                }
            })
        },
    },
    extraReducers: builder => {
        builder.addCase(fatchBook.fulfilled, (state, action) => {
            state.isLoadingViaAPI = false
            if (action.payload?.title && action.payload?.author) {
                state.books.push(createBookWithId(action.payload, 'API'))
            }
        })
        builder.addCase(fatchBook.pending, state => {
            state.isLoadingViaAPI = true
        })
        builder.addCase(fatchBook.rejected, state => {
            state.isLoadingViaAPI = false
        })
    },
})

export default bookSlice.reducer
export const { addBook, deleteBook, toggleFavorite } = bookSlice.actions

export const selectBooks = state => state.books.books
export const selectIsLoadingViaAPI = state => state.books.isLoadingViaAPI
