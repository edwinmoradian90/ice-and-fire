import React, { useState, useEffect } from 'react'

function Header(props) {
    const { category, name } = props
    const [title, setTitle] = useState('Ice and Fire')

    useEffect(() => {
        if (category) {
            setTitle(category)
        }
    }, [category])

    return (
        <div className="header">
            {title ? title : name}
        </div>
    )
}

export default Header