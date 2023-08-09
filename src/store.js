import { configureStore } from '@reduxjs/toolkit'
import modeReducer from './crows/modeSlice'

export const store = configureStore({
    reducer: modeReducer
})