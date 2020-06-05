import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE
} from '../../redux/constants/constants'
import Header from '../../components/header/Header'
import CategoryList from '../../components/list/CategoryList'
import axios from 'axios'

function Categories(props) {
    console.log(props.match.path)
    const category = props.match.path
    const dispatch = useDispatch()
    const data = useSelector(state => state.categoriesReducer.data) || []
    useEffect(() => {
        dispatch({
            type: FETCH_CATEGORIES_REQUEST
        })
        axios.get(`https://anapioficeandfire.com/api${category}`)
            .then(res => {
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
                console.log(err)
            })
    }, [])
    console.log(data)
    return (
        <>
            {data
                ?
                (
                    <div>
                        <Header category={category} />
                        <CategoryList data={data}
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