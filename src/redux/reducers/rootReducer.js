import { combineReducers } from 'redux'
import mainReducer from '../reducers/mainReducer'
import categoriesReducer from '../reducers/categoriesReducer'
import displayReducer from '../reducers/displayReducer'
import searchReducer from '../reducers/searchReducer'

export default combineReducers({
    mainReducer,
    categoriesReducer,
    displayReducer,
    searchReducer
})