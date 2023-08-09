import { createSlice } from '@reduxjs/toolkit';

const mode1 = {
    darkMode: true,
    color1: '#293132',
    color2: '#474044',
    color3: '#4F5165',
    color4: '#547AA5',
    color5: '#50D8D7',
    photo: 'https://m.media-amazon.com/images/M/MV5BYjZiMTllNzYtNGQ3Ni00ZWE3LWI1ZjAtZTM5NjFmYTY2ZDY0XkEyXkFqcGdeQXVyMzQ3Nzk5MTU@._V1_.jpg'
}

const mode2 = {
    darkMode: false,
    color1: '#6E44FF',
    color2: '#B892FF',
    color3: '#FFC2E2',
    color4: '#FF90B3',
    color5: '#EF7A85',
    photo: 'https://placekitten.com/200/300'
}

const initialState = mode2

export const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        darkMode: () => {
            return mode1
        },
        lightMode: () => {
            return mode2
        }
    }
})

export const { darkMode, lightMode } = modeSlice.actions