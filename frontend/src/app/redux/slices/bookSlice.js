import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import createBookWithId from '@/app/utils/createBookWithId'

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

export const thunkFunction = async (dispatch, getState) => {
    try {
        const res = await axios.get('http://localhost:4000/random-book')
        if (res?.data?.title && res?.data?.author) {
            dispatch(addBook(createBookWithId(res.data, 'API')))
        }
    } catch (error) {
        console.log('error fetching random book', error)
    }
}
export const selectBooks = state => state.books
