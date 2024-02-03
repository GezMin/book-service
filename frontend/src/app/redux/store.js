import { configureStore } from '@reduxjs/toolkit'
import booksReduser from './slices/bookSlice'
import filterReduser from './slices/filterSlice'
import errorReduser from './slices/errorSlice'

const store = configureStore({
    reducer: {
        books: booksReduser,
        filter: filterReduser,
        error: errorReduser,
    },
})

export default store
