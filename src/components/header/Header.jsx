import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Header(props) {
    const { category } = props
    const [title, setTitle] = useState('Ice and Fire')
    const [categoryName, setCategoryName] = useState('')

    useEffect(() => {
        if (category) {
            setCategoryName(category)
        }
    }, [category])

    return (
        <div className="header">
            <Link to='/'>
                <h1 className="appTitle">{title}</h1>
            </Link>
            {categoryName}
        </div>
    )
}

export default Header