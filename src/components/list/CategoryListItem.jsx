import React from 'react'
import { Link } from 'react-router-dom'
import { convertName } from '../../utils/helpers'

function CategoryListItem(props) {
    const { category } = props
    const { name, numberOfPages, released, aliases } = props.item
    let availableName = name ? name : aliases[0]
    const convertedName = convertName(availableName)
    const { id, getId } = props
    const newUrl = `${category}/${id}/${convertedName}`

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