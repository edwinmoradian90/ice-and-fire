import {
    TYPING,
    SUBMIT,
    RESET_SEARCH
} from '../constants/searchConstants'

const initialState = {
    searchData: '',
    searchSubmitted: false,
}

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case TYPING:
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
        case RESET_SEARCH:
            return {
                ...state,
                searchSubmitted: false,
                searchData: ''
            }

        default:
            return state
    }
}