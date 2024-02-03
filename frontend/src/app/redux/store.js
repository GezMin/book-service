import { configureStore } from '@reduxjs/toolkit'
import booksReduser from './slices/bookSlice'
import filterReduser from './slices/filterSlice'

const store = configureStore({
    reducer: {
        books: booksReduser,
        filter: filterReduser,
    },
})

export default store
