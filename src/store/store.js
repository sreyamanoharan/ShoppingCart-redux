import {configureStore} from '@reduxjs/toolkit'
import itemReducer from './slice'

export default configureStore({
    reducer:{
        productDetails:itemReducer
    }
})