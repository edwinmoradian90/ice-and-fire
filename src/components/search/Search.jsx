import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SEARCH, SUBMIT } from '../../redux/constants/searchConstants'

export default function Search() {
    const dispatch = useDispatch()
    const data = useSelector(state => state.categoriesReducer.data)
    const searchData = useSelector(state => state.searchReducer.searchData)
    console.log(searchData)
    const onChange = (e) => {
        console.log(e.target.value)
        dispatch({
            type: SEARCH,
            payload: {
                searchData: e.target.value
            }
        })
    }

    const submit = () => {
        dispatch({
            type: SUBMIT,
            payload: {
                searchSubmitted: true
            }
        })
    }

    return (
        <div className='search'>
            <input
                type='text'
                className='searchInput'
                placeholder='Search'
                onChange={onChange}
            />
            <span
                onClick={submit}
                className='submit'
                type='submit'
            >
                Search
             </span>
        </div>
    )
}