import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
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
import { Loader } from '../../components/loading/Loader'

function Display(props) {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.displayReducer.loading)
    const items = useSelector(state => state.displayReducer.data) || ''
    const currentUrl = props.location.pathname.split(('/'))
    const apiUrl = `${url}/${currentUrl[1]}/${currentUrl[2]}`

    useEffect(() => {
        dispatch({
            type: FETCH_DISPLAY_REQUEST,
            payload: {
                loading: true,
            }
        })
        axios.get(apiUrl)
            .then(res => {
                setTimeout(() => {
                    dispatch({
                        type: FETCH_DISPLAY_SUCCESS,
                        payload: {
                            loading: false,
                            data: res,
                        }
                    })
                }, 2000)
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
    }, [apiUrl, dispatch])

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
                        <>
                            <Loader />
                        </>
                    )
            }
        </>
    )
}

Display.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    })
}

export default Display