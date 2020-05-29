import React, { useState, useEffect } from 'react'

function Header(props) {
    const { category } = props
    const [title, setTitle] = useState('Ice and Fire')

    useEffect(() => {
        if (category) {
            setTitle(category)
        }
    }, [category])

    return (
        <div className="header">
            {title}
        </div>
    )
}

export default Header