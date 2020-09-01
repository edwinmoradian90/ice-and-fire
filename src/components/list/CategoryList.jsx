import React from 'react'
import CategoryListItem from './CategoryListItem'
import { useSelector } from 'react-redux'

function CategoryList(props) {
    const pageSize = useSelector(state => state.categoriesReducer.pageSize)
    const page = useSelector(state => state.categoriesReducer.page)
    const { data, category, getId } = props
    return (
        <>
            {data.map((item, i) => {
                const id = (i + 1) + ((page - 1) * pageSize)
                return (
                    <div key={`${item}-${id}`}>
                        <li key={id} >
                            <CategoryListItem
                                id={id}
                                key={id}
                                item={item}
                                category={category}
                                getId={getId}
                            />
                        </li>
                    </div>
                )
            })}
        </>
    )
}

export default CategoryList