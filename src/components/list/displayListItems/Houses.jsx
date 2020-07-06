import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { convertName } from '../../../utils/helpers'
import axios from 'axios'
import { Container, Text } from '../../../utils/styledComponents/main'

export default function Houses(props) {
    const [heirName, setHeirName] = useState('')
    const [heirId, setHeirId] = useState('')
    const [currentLordId, setCurrentLordId] = useState('')
    const [currentLordName, setCurrentLordName] = useState('')
    const [founderName, setFounderName] = useState('')
    const [founderId, setFounderId] = useState('')

    const {
        name,
        region,
        heir,
        founded,
        founder,
        currentLord,
    } = props.items.data || 'loading...'

    const splitUrl = url => {
        if (url) {
            const newUrl = url.split('/')
            return newUrl[newUrl.length - 1]
        }
    }

    const isEmpty = item => {
        if (item === '' || item === null) {
            return 'N/A'
        }
        return item
    }

    useEffect(() => {
        if (heir) {
            axios.get(heir)
                .then(res => {
                    const { name } = res.data
                    setHeirName(name)
                    setHeirId(splitUrl(heir))
                })
                .catch(err => console.log(err))
        }
        if (currentLord) {
            axios.get(currentLord)
                .then(res => {
                    const { name } = res.data
                    setCurrentLordName(name)
                    setCurrentLordId(splitUrl(currentLord))
                })
                .catch(err => console.log(err))
        }

        if (founder) {
            axios.get(founder)
                .then(res => {
                    const { name } = res.data
                    setFounderName(name)
                    setFounderId(splitUrl(founder))
                })
                .catch(err => console.log(err))
        }

    }, [currentLord, heir, founder])

    return (
        <Container
            className="houses"
            height="100vh"
            justifyContent="flex-start"
            alignItems="flex-start"
        >
            <Text className="name">House name: {isEmpty(name)}</Text>
            <Text className="region">House region: {isEmpty(region)}</Text>
            <Text className="founder">
                {founderName ? (
                    <>
                        House Founder: {' '}
                        <Link to={`/characters/${founderId}/${convertName(founderName)}`}>
                            {founderName}
                        </Link>
                    </>
                ) : (
                        <p className="founderName">House Founder: {isEmpty(founderName)}</p>
                    )}
            </Text>
            <Text className="founded">Founded During: {isEmpty(founded)}</Text>
            {heirName ? (
                <Text className="heir">
                    House heir: {' '}
                    <Link
                        className='heirName'
                        to={`/characters/${heirId}/${convertName(heirName)}`}
                    >
                        {heirName}
                    </Link>
                </Text>
            ) : (
                    <Text className="heirName"> House heir: N/A</Text>
                )
            }
            <Text className="currentLord">
                Current Lord:
                {currentLord
                    ?
                    (
                        <Link
                            className='currentLordName'
                            to={`/characters/${currentLordId}/${convertName(currentLordName)}`}
                        >
                            {currentLordName || 'loading...'}
                        </Link>
                    )
                    :
                    (
                        <span className="currentLordName">{isEmpty(currentLordName)}</span>
                    )
                }
            </Text>
        </Container >
    )
}