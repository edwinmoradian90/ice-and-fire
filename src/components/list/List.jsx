import React from 'react'
import ListItem from './ListItem'

function List(props) {
    const { categories } = props
    console.log(categories)
    return (
        <>
            {categories.map((category, i) => (
                <li key={i}><ListItem {...props} category={category} /></li>
            ))}
        </>
    )
}

export default List