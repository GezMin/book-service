import { configureStore } from '@reduxjs/toolkit'
import booksReduser from './books/reduser'

const store = configureStore({
    reducer: {
        books: booksReduser,
    },
})

export default store
