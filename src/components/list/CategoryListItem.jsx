import React from 'react'
import { Link } from 'react-router-dom'

function CategoryListItem(props) {
    const { category } = props
    const { name, numberOfPages, released, aliases } = props.item
    console.log(props.items)
    let availableName = name ? name : aliases[0]
    const convertedName = availableName.toLowerCase().split('').map(element => {
        if (element === ' ') {
            return element = '-'
        }
        return element
    })
    const { id, getId } = props
    const newUrl = `${category}/${id}/${convertedName.join('')}`

    return (
        <Link to={newUrl} onClick={getId} id={id}>
            <ul id={id}>
                <li id={id} className={name ? 'title' : 'd_none'}> {name} </li>
                <li id={id} className={aliases ? 'aliases' : 'd_none'}> {aliases}</li>
                <li id={id} className={numberOfPages ? 'numberOfPages' : 'd_none'}>
                    {numberOfPages} pages
                    </li>
                <li id={id} className={released ? 'released' : 'd_none'}>{released}</li>
            </ul>
            <hr />
        </Link>
    )
}

export default CategoryListItem