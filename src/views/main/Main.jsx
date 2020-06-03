import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { getMain } from '../../redux/actions/mainActions'
import Header from '../../components/header/Header'
import MainList from '../../components/list/MainList'
import {
    FETCH_MAIN_REQUEST,
    FETCH_MAIN_SUCCESS,
    FETCH_MAIN_FAILURE
} from '../../redux/constants/constants'
const url = 'https://anapioficeandfire.com/api'

function Main(props) {
    const dispatch = useDispatch()
    let data = useSelector(state => state.mainReducer.data) || []
    useEffect(() => {
        dispatch({ type: FETCH_MAIN_REQUEST })
        axios.get(url)
            .then(res => {
                dispatch({
                    type: FETCH_MAIN_SUCCESS,
                    payload: res
                })
                console.log(res)
            })
            .catch(err => {
                dispatch({
                    type: FETCH_MAIN_FAILURE,
                    payload: err
                })
            })
    }, [])
    console.log(data)

    return (
        <div>
            <Header />
            <MainList data={data} {...props} />
        </div>
    )
}

export default Main