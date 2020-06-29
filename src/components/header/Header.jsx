import React, { useState, useEffect } from 'react'
import { StyledLink, Title } from '../../utils/styledComponents/main'

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
            <StyledLink to='/'>
                <Title className="appTitle">{title}</Title>
            </StyledLink>
        </div>
    )
}

export default Header