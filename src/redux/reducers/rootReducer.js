import { combineReducers } from 'redux'
import mainReducer from '../reducers/mainReducer'
import categoriesReducer from '../reducers/categoriesReducer'
import displayReducer from '../reducers/displayReducer'

export default combineReducers({
    mainReducer,
    categoriesReducer,
    displayReducer
})