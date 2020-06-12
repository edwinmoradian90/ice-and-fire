import { SEARCH, SUBMIT } from '../constants/searchConstants'

const initialState = {
    searchData: '',
    searchSubmitted: false
}

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH:
            const { searchData } = action.payload
            return {
                ...state,
                searchSubmitted: false,
                searchData,
            }
        case SUBMIT:
            const { searchSubmitted } = action.payload
            return {
                ...state,
                searchSubmitted
            }

        default:
            return state
    }
}