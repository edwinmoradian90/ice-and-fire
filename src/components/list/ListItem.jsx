import React from 'react'
import { Link } from 'react-router-dom'

function ListItem(props) {
    const { name, description, title } = props.category
    console.log(props)
    return (
        <Link to={name} className='listItem' >
            <h3 className="itemTitle">{title}</h3>
            <h5 className="itemDescription">{description}</h5>
        </Link >
    )
}

export default ListItem