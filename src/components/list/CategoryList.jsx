import React from 'react'
import CategoryListItem from './CategoryListItem'

function CategoryList(props) {
    const { data, category, getId } = props
    return (
        <>
            {data.map((item, i) => {
                const id = i + 1
                return (
                    <li key={i}>
                        <CategoryListItem
                            id={id}
                            item={item}
                            category={category}
                            getId={getId}
                        />
                    </li>
                )
            })}
        </>
    )
}

export default CategoryList