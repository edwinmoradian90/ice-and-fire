import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    TYPING,
    SUBMIT,
} from '../../redux/constants/searchConstants'
import { SearchBar, SearchContainer, SearchButton } from '../../utils/styledComponents/search'

export default function Search() {
    const dispatch = useDispatch()
    const searchData = useSelector(state => state.searchReducer.searchData)
    console.log(searchData)
    const onChange = (e) => {
        console.log(e.target.value)
        dispatch({
            type: TYPING,
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
        <SearchContainer className='search'>
            <SearchBar
                type='text'
                className='searchInput'
                placeholder='Search By Name'
                onChange={onChange}
            />
            <SearchButton
                onClick={submit}
                className='submit'
                type='submit'
            >
                <img
                    alt="search"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAADQUlEQVRIib2WT2hcdRDHP/PeS9JdjUrUNLsmiIeiBz0FD1t3t54a2+62Gmz1IIre2pKDbUXx1PakSCUiaAULooKHpWDNZqsQadnEBqXRQpFS8NJGs1urhaT5n33v66FN2KSb5CVCv6fHvPnNZ2Z+w/CDuySrZSxlk58g2wMaBf7CdEGyMxN+Y2HT6dMz6wE5tYzTN70DoEtAnYmiUN5cu9zEjYb1QGCZigCGOxJNrfe1jpanyu1mQZdkKSAG+MCYYMzgqowz+MHX8cK5K6uCSpnks5g6CSyB8TjQOF8csCFEwmOGdbbk+39cETSSSb5g8CVwb4igK+k6cE3iooMN+p59+8ip4vACCKC8Pf1U4AQnDTatHk+/eQ6ZOdXNQmWbwceI+2s5AlcNu7zojspbt96j+smjwD5WaZmJzwLTBcO6gRWHxMy6aw7D9Y5UzPd4Xaa9QOtKQcLI0Mt3gErZ1BYT7wr5kmbNrINwA7GcxhumN7R61ZZyNplB+krwAIDZstPvA8cM/SrsI25NabSWo+BEU1/fqDe8OxFxJ720Gfsk7QyXpD6M5X96G+DvnYmhwHfTcvQasvRiP/vXn6scBXBsvOFBc3QEwkLAD+zz+e/m7wb/mIv639RXKllQl9De25DjLpZo+2HwBtwebx3GKQ89042sK1Q96JUZr67Xq5uZacsNTlX/G9mefM6MY3Kmno73DE0u1Kb29rpSLHrE0DussJKWKADKZrwfSLOOOaWWnv5TI5nkAYLgJG79RLzn7D/VB6y0I/UBpjcBNyRkqSrAGKIP4/mWSCxquZy/1MmJ9fa/JbOX1gkB8IAmjD2AV54sv6canbGRbHvUFPkZePJ/wBZJgbMlXigWF2VjipxYJ2RCAS/i6lHDHjMxJzgIKsQKxf6lzp7M6zL8S0j7geY1gC7GCwPfVxvK2dSVjTe9L+zWMl2khV4O705E3GnnVWQHw21w/ozlB9rCZnXHpekwTul8chdwyGDzMqc+RaTB3ojl+39ZF6ha13akN8uCQ4JdVL0v3IjX2Jw7Ox4GMK+aj5N5bewtnmvJD3S6OE+AHQemAPw5HloLBMJvAgBK21IP42o/4vdY70BurbC7ov8AF7ozJMqlsJ8AAAAASUVORK5CYII="
                />
            </SearchButton>
        </SearchContainer>
    )
}