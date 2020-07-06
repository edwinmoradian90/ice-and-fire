import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from '../../utils/styledComponents/main'
import axios from 'axios'
import Header from '../../components/header/Header'
import MainList from '../../components/list/MainList'
import {
    FETCH_MAIN_REQUEST,
    FETCH_MAIN_SUCCESS,
    FETCH_MAIN_FAILURE
} from '../../redux/constants/constants'
import { Loader } from '../../components/loading/Loader'
const url = 'https://anapioficeandfire.com/api'


function Main(props) {
    const dispatch = useDispatch()
    const data = useSelector(state => state.mainReducer.data)
    const loading = useSelector(state => state.mainReducer.loading)
    useEffect(() => {
        dispatch({ type: FETCH_MAIN_REQUEST })
        axios.get(url)
            .then(res => {
                setTimeout(() => {
                    dispatch({
                        type: FETCH_MAIN_SUCCESS,
                        payload: res
                    })
                }, 1500)
            })
            .catch(err => {
                dispatch({
                    type: FETCH_MAIN_FAILURE,
                    payload: err
                })
            })
    }, [dispatch])

    return (
        <div>
            {
                !loading
                    ?
                    (

                        <>
                            <Header />
                            <Container
                                height='calc(100vh - 72px)'
                                justifyContent='flex-start'
                            >
                                <MainList
                                    loading={loading}
                                    data={data || []}
                                />
                            </Container>
                        </>
                    )
                    :
                    (
                        <Loader loading={loading} />
                    )
            }
        </div>
    )
}

export default Main