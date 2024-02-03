import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setError: (state, action) => {
            return action.payload
        },
        clearError: () => {
            return initialState
        },
    },
})

export default errorSlice.reducer

export const selectErrorMassage = state => state.error

export const { setError, clearError } = errorSlice.actions
