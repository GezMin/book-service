import * as actionTypes from './actionTypes'

const initialState = []

const booksReduser = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_BOOK:
            return [...state, action.payload]
        case actionTypes.DELETE_BOOK:
            return state.filter(book => book.id !== action.payload)
        default:
            return state
    }
}

export default booksReduser
