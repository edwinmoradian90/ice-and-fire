import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE,
    GET_ELEMENT_ID,
    NEXT_PAGE,
    PREV_PAGE
} from '../../redux/constants/constants'
import { SUBMIT } from '../../redux/constants/searchConstants'
import Header from '../../components/header/Header'
import CategoryList from '../../components/list/CategoryList'
import Search from '../../components/search/Search'
import axios from 'axios'
import { url } from '../../config/config'

function Categories(props) {
    const category = props.match.path
    const dispatch = useDispatch()
    const data = useSelector(state => state.categoriesReducer.data) || []
    const loading = useSelector(state => state.categoriesReducer.loading)
    const page = useSelector(state => state.categoriesReducer.page)
    const pageSize = useSelector(state => state.categoriesReducer.pageSize)
    const searchData = useSelector(state => state.searchReducer.searchData)
    const searchSubmitted = useSelector(state => state.searchReducer.searchSubmitted)
    const id = useSelector(state => state.categoriesReducer.id)

    const getId = e => {
        const { id } = e.target
        dispatch({
            type: GET_ELEMENT_ID,
            payload: {
                id
            }
        })
    }

    const nextPage = () => {
        dispatch({
            type: NEXT_PAGE,
        })
    }

    const prevPage = () => {
        console.log('previous page')
        dispatch({
            type: PREV_PAGE,
        })
    }

    useEffect(() => {
        dispatch({
            type: FETCH_CATEGORIES_REQUEST,
            payload: {
                data: ''
            }
        })

        dispatch({
            type: SUBMIT,
            payload: {
                searchSubmitted: false
            }
        })

        axios.get(`${url}/${category}?page=${page}&pageSize=${pageSize}`)
            .then(res => {
                console.log(res)
                dispatch({
                    type: FETCH_CATEGORIES_SUCCESS,
                    payload: {
                        data: res.data,
                        currentUrl: category,
                    }
                })
            })
            .catch(err => {
                dispatch({
                    type: FETCH_CATEGORIES_FAILURE,
                    payload: {
                        error: err,
                        currentUrl: category
                    }
                })
            })
    }, [page, searchSubmitted])

    return (
        <>
            {!loading
                ?
                (
                    <div>
                        <Header category={category} />
                        <Search />
                        <CategoryList
                            getId={getId}
                            data={data}
                            category={category}
                            searchData={searchData}
                        />
                        {
                            category === '/characters' || category === '/houses'
                                ?
                                (
                                    <div className='navigationButtons'>
                                        <span
                                            onClick={() => prevPage()}
                                            className={page > 1 ? 'prevPage' : 'd_none'}>
                                            Previous Page
                                        </span>
                                        <span
                                            onClick={() => nextPage()}
                                            className='nextPage'>
                                            Next Page
                                        </span>
                                    </div>

                                )
                                :
                                null
                        }
                    </div>
                )
                :
                (
                    <p> loading...</p>
                )
            }
        </>
    )
}

export default Categories