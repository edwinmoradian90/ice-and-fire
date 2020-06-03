import { FETCH_MAIN_REQUEST, FETCH_MAIN_SUCCESS, FETCH_MAIN_FAILURE } from '../constants/constants'

const initialState = {
    loading: false,
    data: [],
    error: ''
}

export default function mainReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_MAIN_REQUEST:
            console.log('requested')
            return {
                ...state,
                loading: true
            }
        case FETCH_MAIN_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }
        case FETCH_MAIN_FAILURE:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload
            }
        default:
            return state;
    }
}