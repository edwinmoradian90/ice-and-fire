import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Container, Text } from '../../../utils/styledComponents/main'
import { CategoryItemIcon } from '../../../utils/styledComponents/category'
import { GiWingedSword } from 'react-icons/gi'
import { splitUrl, isEmpty, convertName } from '../../../utils/helpers'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Characters(props) {
    const [motherName, setMotherName] = useState('')
    const [fatherName, setFatherName] = useState('')
    const [motherId, setMotherId] = useState('')
    const [fatherId, setFatherId] = useState('')
    const {
        aliases,
        gender,
        name,
        born,
        died,
        mother,
        father,
        playedBy,
    } = props.items.data || 'loading...'

    useEffect(() => {
        if (mother) {
            axios.get(mother)
                .then(res => {
                    const { name } = res
                    setMotherName(name)
                    setMotherId(splitUrl(mother))
                })
                .catch(err => console.log(err))
        }

        if (father) {
            axios.get(father)
                .then(res => {
                    const { name } = res
                    setFatherName(name)
                    setFatherId(splitUrl(father))
                })
                .catch(err => console.log(err))
        }
    }, [mother, father])

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
                <Text justifyContent="flex-start" fontSize="1.2em">
                    Mother: {' '}
                    {
                        motherName
                            ?
                            <Link to={`/characters/${motherId}/${convertName(motherName)}`}>
                                {isEmpty(motherName)}
                            </Link>
                            :
                            'N/A'
                    }
                </Text>
                <Text justifyContent="flex-start" fontSize="1.2em">
                    Father: {' '}
                    {
                        fatherName
                            ?
                            <Link to={`/characters/${fatherId}/${convertName(fatherName)}`}>
                                {isEmpty(fatherName)}
                            </Link>
                            :
                            'N/A'
                    }
                </Text>
                <Text justifyContent="flex-start" fontSize="1.2em">Played By: {isEmpty(playedBy)}</Text>
            </ul>
        </Container>
    )
}

const { string, array } = PropTypes
Characters.propTypes = {
    aliases: array,
    gender: string,
    mother: string,
    father: string,
    died: string,
    born: string,
    name: string,
    playedBy: string
}