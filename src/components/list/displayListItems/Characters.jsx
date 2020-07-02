import React from 'react'
import { Container, Label, Text } from '../../../utils/styledComponents/main'
import { CategoryItemIcon } from '../../../utils/styledComponents/category'
import { GiWingedSword } from 'react-icons/gi'

export default function Characters(props) {
    const {
        aliases,
        books,
        gender,
        name,
        born,
        died,
        mother,
        father,
        playedBy,
    } = props.items.data || 'loading...'

    return (
        <Container
            className="characters"
            justifyContent="flex-start"
            alignItems="flex-start"
            height="auto"
        >
            <Text justifyContent="flex-start" fontSize="1.2em">Name: {name || 'N/A'} </Text>
            <ul className="charactersList">
                {
                    aliases
                        ?
                        (
                            <Text
                                justifyContent="flex-start"
                                className="characterAlias">
                                {aliases.length > 1 ? 'Aliases' : 'Alias'}
                            </Text>
                        )
                        :
                        null
                }
                {aliases ? aliases.map((alias, i) => (
                    <li key={i} className={`alias ${alias}`}>
                        <Text
                            justifyContent='flex-start'
                            className='alias'
                        >
                            <CategoryItemIcon>
                                <GiWingedSword />
                            </CategoryItemIcon>
                            {alias || 'N/A'}
                        </Text>
                    </li>
                )) : null}
            </ul>
            <ul className="characterBooks">
            </ul>
            <ul>
                <Text justifyContent="flex-start" fontSize="1.2em">Gender: {gender || 'N/A'}</Text>
                <Text justifyContent="flex-start" fontSize="1.2em">Born: {born || 'N/A'}</Text>
                <Text justifyContent="flex-start" fontSize="1.2em">Died: {died || 'N/A'}</Text>
                <Text justifyContent="flex-start" fontSize="1.2em">Mother: {mother || 'N/A'}</Text>
                <Text justifyContent="flex-start" fontSize="1.2em">Father: {father || 'N/A'}</Text>
                <Text justifyContent="flex-start" fontSize="1.2em">Played By: {playedBy || 'N/A'}</Text>
            </ul>
        </Container >
    )
}