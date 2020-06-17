import React from 'react'
import CategoryListItem from './CategoryListItem'
import { useSelector } from 'react-redux'

function CategoryList(props) {
    const pageSize = useSelector(state => state.categoriesReducer.pageSize)
    const page = useSelector(state => state.categoriesReducer.page)
    const searchData = useSelector(state => state.searchReducer.searchData)
    console.log(searchData)
    const { data, category, getId } = props

    const wordMatch = word => {
        let matched = 0
        if (searchData) {
            for (let i = 0; i < searchData.length; i = i + 1) {
                if (word[i] !== searchData[i]) {
                    matched = matched + 1
                    return false
                }
            }
        }
        const matchedPercentage = (matched) / (word.length)
        return true
    }

    return (
        <>
            {data.map((item, i) => {
                const { aliases, name } = item
                const id = (i + 1) + ((page - 1) * pageSize)
                return (
                    <>
                        {
                            wordMatch(name) || searchData === '' || category !== '/books'
                                ?
                                (

                                    <li key={id} >
                                        <CategoryListItem
                                            id={id}
                                            item={item}
                                            category={category}
                                            getId={getId}
                                        />
                                    </li>
                                )
                                :
                                (
                                    null
                                )
                        }
                    </>
                )
            })}
        </>
    )
}

export default CategoryList