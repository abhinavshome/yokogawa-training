import { configureStore } from '@reduxjs/toolkit'
import { contactListReducer } from './slices/contactListSlice'
import logger from './middlewares/logger'


export const store = configureStore({
    reducer: {
        contacts: contactListReducer
    },
    middleware: [logger]
})