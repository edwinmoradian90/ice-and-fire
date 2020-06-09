import {
    FETCH_CATEGORIES_FAILURE,
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    GET_ELEMENT_ID
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
            console.log(state.loading)
            console.log('Request')
            return {
                ...state,
                loading: true,
            }
        case FETCH_CATEGORIES_SUCCESS:
            console.log('Success')
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
        case GET_ELEMENT_ID:
            let { id } = action.payload
            console.log(id, 'ELEMENT ID ')
            return {
                ...state,
                id,
                loading: false
            }
        default:
            console.log('Default')
            return state;
    }
}