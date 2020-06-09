import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE,
    GET_ELEMENT_ID
} from '../../redux/constants/constants'
import Header from '../../components/header/Header'
import CategoryList from '../../components/list/CategoryList'
import axios from 'axios'
import { url } from '../../config/config'

function Categories(props) {
    console.log(props.match.path)
    const category = props.match.path
    const dispatch = useDispatch()
    const data = useSelector(state => state.categoriesReducer.data) || []
    const loading = useSelector(state => state.categoriesReducer.loading)
    const id = useSelector(state => state.categoriesReducer.id)
    console.log(loading)

    const getId = e => {
        const { id } = e.target
        dispatch({
            type: GET_ELEMENT_ID,
            payload: {
                id
            }
        })
    }

    useEffect(() => {
        dispatch({
            type: FETCH_CATEGORIES_REQUEST,
            payload: {
                data: ''
            }
        })
        axios.get(`${url}/${category}`)
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
    }, [])

    return (
        <>
            {!loading
                ?
                (
                    <div>
                        <Header category={category} />
                        <CategoryList
                            getId={getId}
                            data={data}
                            category={category}
                        />
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