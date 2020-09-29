import React from 'react'
import PropTypes from 'prop-types'
import { StyledLink, Text } from '../../utils/styledComponents/main'

function MainListItem(props) {
    const item = props.item
    return (
        <>
            {

                <StyledLink to={item} className='listItem' >
                    <Text
                        className='itemTitle'
                        hColor='red'
                    >
                        {item}
                    </Text>
                </StyledLink >

            }
        </>
    )
}

MainListItem.propTypes = {
    item: PropTypes.string.isRequired,
}

export default MainListItem