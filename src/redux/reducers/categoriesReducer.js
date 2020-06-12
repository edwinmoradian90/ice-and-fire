import {
    FETCH_CATEGORIES_FAILURE,
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    GET_ELEMENT_ID,
    PREV_PAGE,
    NEXT_PAGE
} from '../constants/constants'

const initialState = {
    currentUrl: '',
    name: '',
    id: 0,
    page: 1,
    pageSize: 20,
    loading: false,
    data: [],
    error: '',
}

export default function categoriesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CATEGORIES_REQUEST:
            return {
                ...state,
                loading: true,
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
        case GET_ELEMENT_ID:
            let { id } = action.payload
            return {
                ...state,
                id,
                loading: false
            }
        case NEXT_PAGE:
            return {
                ...state,
                page: state.page + 1
            }
        case PREV_PAGE:
            return {
                ...state,
                page: state.page > 0
                    ? state.page - 1
                    : state.page
            }
        default:
            return state;
    }
}