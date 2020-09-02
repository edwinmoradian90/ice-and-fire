import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
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
import { Text } from '../../utils/styledComponents/main'
import { wordFormatter } from '../../utils/helpers'

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

        axios.get(`${url}/${category}?page=${wordFormatter(searchData)
            ? null
            : page
            }&pageSize=${pageSize}&name=${searchData}`)
            .then(res => {
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        page,
        searchSubmitted,
        category,
        dispatch,
        pageSize
    ])

    return (
        <>
            {!loading
                ?
                (
                    <Container>
                        <Header category={category} />
                        <Search />
                        {
                            data.length !== 0
                                ?
                                <CategoryList
                                    data={data}
                                    category={category}
                                    searchData={searchData}
                                    noResults={noResults}
                                />
                                :
                                <>
                                    <Text>
                                        You know nothing, Jon Snow...
                                    </Text>
                                    <iframe
                                        title="you know nothing"
                                        src="https://giphy.com/embed/13f5iwTRuiEjjW"
                                        width="100%"
                                        height="100%"
                                        frameBorder="0"
                                        className="giphy-embed"
                                        allowFullScreen
                                    />


                                </>
                        }
                        {
                            data.length >= pageSize && data.length > 1
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
                                            className='nextPage'
                                            display={page !== pageSize ? 'flex' : 'none'}
                                        >
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

Categories.propTypes = {
    match: PropTypes.shape({
        path: PropTypes.string.isRequired,
    })
}

export default Categories