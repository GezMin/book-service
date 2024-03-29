import * as actionTypes from './actionTypes'

export const addBook = newBook => {
    return {
        type: actionTypes.ADD_BOOK,
        payload: newBook,
    }
}

export const deleteBook = bookId => {
    return {
        type: actionTypes.DELETE_BOOK,
        payload: bookId,
    }
}

export const toggleFavorite = bookId => {
    return {
        type: actionTypes.TOGGLE_FAVORITE,
        payload: bookId,
    }
}
