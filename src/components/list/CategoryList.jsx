import React from 'react'
import CategoryListItem from './CategoryListItem'
import { useSelector } from 'react-redux'

function CategoryList(props) {
    const pageSize = useSelector(state => state.categoriesReducer.pageSize)
    const page = useSelector(state => state.categoriesReducer.page)
    const searchData = useSelector(state => state.searchReducer.searchData)
    const { data, category, getId } = props

    const wordMatch = word => {
        let matched = 0
        if (searchData) {
            for (let i = 0; i < word.length; i = i + 1) {
                console.log(word[i])
                if (word[i] === searchData[i]) {
                    console.log(word[i], searchData[i], matched)
                    matched = matched + 1
                }
            }
        }
        const matchedPercentage = Number(matched) / Number(word.length)
        console.log(matchedPercentage)
    }

    console.log(searchData)

    return (
        <>
            {data.map((item, i) => {
                const { aliases, name } = item
                const id = (i + 1) + ((page - 1) * pageSize)
                wordMatch(name)
                return (
                    <>
                        {
                            1 > 0
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