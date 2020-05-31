import React from 'react'
import { Link } from 'react-router-dom'

function CategoryListItem(props) {
    const { category } = props
    const { name, numberOfPages, released } = props.item
    const convertedName = name.toLowerCase().split('').map(element => {
        if (element === ' ') {
            return element = '-'
        }
        return element
    })
    const newUrl = `${category}/${convertedName.join('')}`

    return (
        <>
            <Link to={newUrl}>
                <ul>
                    <li className={name ? 'title' : 'd_none'}> {name} </li>
                    <li className={numberOfPages ? 'numberOfPages' : 'd_none'}>{numberOfPages} pages</li>
                    <li className={released ? 'released' : 'd_none'}>{released}</li>
                </ul>
                <hr />
            </Link>
        </>
    )
}

export default CategoryListItem