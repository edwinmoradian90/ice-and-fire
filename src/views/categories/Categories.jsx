import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE,
    NEXT_PAGE,
    PREV_PAGE
} from '../../redux/constants/constants'
import { SUBMIT, RESET_SEARCH } from '../../redux/constants/searchConstants'
import Header from '../../components/header/Header'
import CategoryList from '../../components/list/CategoryList'
import Search from '../../components/search/Search'
import axios from 'axios'
import { url } from '../../config/config'
import { Container } from '../../utils/styledComponents/main'
import { Loader } from '../../components/loading/Loader'
import { Title, Text } from '../../utils/styledComponents/main'

function Categories(props) {
    const category = props.match.path
    const dispatch = useDispatch()
    const data = useSelector(state => state.categoriesReducer.data) || []
    const loading = useSelector(state => state.categoriesReducer.loading)
    const page = useSelector(state => state.categoriesReducer.page)
    const pageSize = useSelector(state => state.categoriesReducer.pageSize)
    const searchData = useSelector(state => state.searchReducer.searchData)
    const searchSubmitted = useSelector(state => state.searchReducer.searchSubmitted)

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

    const noResults = (filteredData) => {
        if (!filteredData) {
            dispatch({
                type: NEXT_PAGE
            })
        }
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

        axios.get(`${url}/${category}?page=${page}&pageSize=${pageSize}&name=${searchData}`)
            .then(res => {
                console.log(res)
                setTimeout(() => {
                    dispatch({
                        type: FETCH_CATEGORIES_SUCCESS,
                        payload: {
                            data: res.data,
                            currentUrl: category,
                        }
                    })
                    dispatch({ type: RESET_SEARCH })
                }, 2000)
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
    }, [page, searchSubmitted, category])

    return (
        <>
            {!loading
                ?
                (
                    <Container>
                        <Header category={category} />
                        <Search />
                        <CategoryList
                            data={data}
                            category={category}
                            searchData={searchData}
                            noResults={noResults}
                        />
                        {
                            (category === '/characters' || category === '/houses') && data.length >= pageSize
                                ?
                                (
                                    <div className='navigationButtons'>
                                        <Text
                                            onClick={() => prevPage()}
                                            cursor='pointer'
                                            className='prevPage'
                                            fontSize='1em'
                                            display={page > 1 ? 'flex' : 'none'}
                                        >
                                            Previous Page
                                        </Text>
                                        <Text className="pageNumber">{page}</Text>
                                        <Text
                                            cursor='pointer'
                                            onClick={() => nextPage()}
                                            className='nextPage'>
                                            Next Page
                                        </Text>
                                    </div>

                                )
                                :
                                null
                        }
                    </Container>
                )
                :
                (
                    <>
                        <Loader
                            loading={loading}
                        />
                    </>
                )
            }
        </>
    )
}

export default Categories