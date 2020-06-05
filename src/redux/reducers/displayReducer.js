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
    const { currentUrl } = action.payload
    switch (action.type) {
        case FETCH_DISPLAY_REQUEST:
            return {
                ...state,
                loading: true,
                currentUrl
            }
        case FETCH_DISPLAY_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.data,
                currentUrl
            }
        case FETCH_DISPLAY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                currentUrl
            }
        default:
            return state
    }
}