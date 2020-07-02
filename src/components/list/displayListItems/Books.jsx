import React from 'react'
import { Container, Text } from '../../../utils/styledComponents/main'

export default function Books(props) {
    const {
        name,
        authors,
        numberOfPages,
        publisher,
        country,
        released
    } = props.items.data || ''

    const timeRemover = (releasedDate) => {
        if (releasedDate) {
            const modifiedDate = releasedDate.split('T')
            return modifiedDate[0]
        }
    }

    return (
        <Container>
            <ul>
                <li className='bookName'>
                    <Text justifyContent='flex-start'>
                        Name: {name}
                    </Text>
                </li>
                <li className='author'>
                    <Text justifyContent='flex-start'>
                        Author: {authors}
                    </Text>
                </li>
                <li className='numberOfPages'>
                    <Text justifyContent='flex-start'>
                        Number Of Pages: {numberOfPages} pages
                    </Text>
                </li>
                <li className='publisher'>
                    <Text justifyContent='flex-start'>
                        Published by: {publisher}
                    </Text>
                </li>
                <li className='country'>
                    <Text justifyContent='flex-start'>
                        Published at: {country}
                    </Text>
                </li>
                <li className='released'>
                    <Text justifyContent='flex-start'>
                        Release Date: {timeRemover(released)}
                    </Text>
                </li>
            </ul>
        </Container>
    )
}