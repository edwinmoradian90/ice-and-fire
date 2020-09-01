import React from 'react'
import { StyledLink, Text } from '../../utils/styledComponents/main'

function MainListItem(props) {
    const item = props.item
    console.log(item, 'item')
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

export default MainListItem