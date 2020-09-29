import {
    FETCH_DISPLAY_REQUEST,
    FETCH_DISPLAY_SUCCESS,
    FETCH_DISPLAY_FAILURE
} from '../constants/constants'

const initialState = {
    id: 0,
    currentUrl: '',
    loading: false,
    error: '',
    data: [],
}

export default function displayReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_DISPLAY_REQUEST:
            return {
                ...state,
                currentUrl: action.payload.currentUrl,
                loading: true,
            }
        case FETCH_DISPLAY_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.data,
                currentUrl: action.payload.currentUrl
            }
        case FETCH_DISPLAY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                currentUrl: action.payload.currentUrl
            }
        default:
            return state
    }
}