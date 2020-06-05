import {
    FETCH_CATEGORIES_FAILURE,
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS
} from '../constants/constants'

const initialState = {
    currentUrl: '',
    name: '',
    id: 0,
    loading: false,
    data: [],
    error: '',
}

export default function categoriesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CATEGORIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.data,
                currentUrl: action.payload.currentURL
            }
        case FETCH_CATEGORIES_FAILURE:
            let { error, currentUrl } = action.payload
            return {
                ...state,
                loading: false,
                error,
                currentUrl
            }
        default:
            return state;
    }
}