import { configureStore } from '@reduxjs/toolkit'
import scoreReducer from './reducer'
// import { Reducer } from '@reduxjs/toolkit'


const store = configureStore({
    reducer: scoreReducer
    })

export default store