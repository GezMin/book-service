import * as actionTypes from './actionTypes'

const initialState = []

const booksReduser = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_BOOK:
            return [...state, action.payload]
        case actionTypes.DELETE_BOOK:
            return state.filter(book => book.id !== action.payload)
        case actionTypes.TOGGLE_FAVORITE: {
            return state.map(book => {
                if (book.id === action.payload) {
                    return { ...book, isFavorite: !book.isFavorite }
                }
                return book
            })
        }
        default:
            return state
    }
}

export default booksReduser
