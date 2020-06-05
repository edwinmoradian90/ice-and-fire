import React from 'react'
import CategoryListItem from './CategoryListItem'

function CategoryList(props) {
    const { data, category } = props
    return (
        <>
            {data.map((item, i) => {
                return (
                    <li key={i}><CategoryListItem id={i + 1} item={item} category={category} /></li>
                )
            })}
        </>
    )
}

export default CategoryList