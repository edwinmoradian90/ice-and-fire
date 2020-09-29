import React from 'react'
import { StyledLink, Title } from '../../utils/styledComponents/main'


function Header() {

    return (
        <div className="header">
            <StyledLink to='/'>
                <Title className="appTitle">Ice and Fire</Title>
            </StyledLink>
        </div>
    )
}

export default Header