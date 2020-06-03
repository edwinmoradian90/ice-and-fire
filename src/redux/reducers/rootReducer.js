import { combineReducers } from 'redux'
import mainReducer from '../reducers/mainReducer'
import categoriesReducer from '../reducers/categoriesReducer'

export default combineReducers({
    mainReducer,
    categoriesReducer
})