import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    FETCH_DISPLAY_REQUEST,
    FETCH_DISPLAY_SUCCESS,
    FETCH_DISPLAY_FAILURE
} from '../../redux/constants/constants'
import Header from '../../components/header/Header'
import Books from '../../components/list/displayListItems/Books'
import Characters from '../../components/list/displayListItems/Characters'
import Houses from '../../components/list/displayListItems/Houses'
import axios from 'axios'
import { url } from '../../config/config'

function Display(props) {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.displayReducer.loading)
    const items = useSelector(state => state.displayReducer.data) || ''
    const currentUrl = props.location.pathname.split(('/'))
    const apiUrl = `${url}/${currentUrl[1]}/${currentUrl[2]}`

    console.log(currentUrl)

    useEffect(() => {
        dispatch({
            type: FETCH_DISPLAY_REQUEST,
            payload: {
                loading: true,
            }
        })
        axios.get(apiUrl)
            .then(res => {
                dispatch({
                    type: FETCH_DISPLAY_SUCCESS,
                    payload: {
                        loading: false,
                        data: res,
                    }
                })
            })
            .catch(err => {
                dispatch({
                    type: FETCH_DISPLAY_FAILURE,
                    payload: {
                        loading: false,
                        error: err
                    }
                })
            })
    }, [apiUrl])
    console.log(currentUrl[1])

    return (
        <>
            {
                !loading ?
                    (
                        <div>
                            <Header name={'something'} />
                            {
                                currentUrl[1] === 'books'
                                    ? <Books items={items} />
                                    : null
                            }
                            {
                                currentUrl[1] === 'characters'
                                    ? <Characters items={items} />
                                    : null
                            }
                            {
                                currentUrl[1] === 'houses'
                                    ? <Houses items={items} />
                                    : null
                            }
                        </div>
                    )
                    :
                    (
                        <p>loading...</p>
                    )
            }
        </>
    )
}

export default Display