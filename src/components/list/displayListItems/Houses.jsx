import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { convertName } from '../../../utils/helpers'
import axios from 'axios'

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
        titles,
        heir,
        founded,
        founder,
        currentLord,
        swornMemebers
    } = props.items.data || 'loading...'

    const splitUrl = url => {
        if (url) {
            const newUrl = url.split('/')
            console.log(newUrl[newUrl.length - 1])
            return newUrl[newUrl.length - 1]
        }
    }

    const isEmpty = item => {
        if (item === '' || item === null) {
            return 'Not Available.'
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

    }, [currentLord, heir])

    return (
        <div className="houses">
            <h1 className="name">House name: {isEmpty(name)}</h1>
            <h3 className="region">House region: {isEmpty(region)}</h3>
            <p className="founder">House founder: {isEmpty(founder)}</p>
            <div className="founder">
                Founder: {' '}
                {founderName ? (
                    <Link to={`/characters/${founderId}/${convertName(founderName)}`}>
                        {founderName}
                    </Link>
                ) : (
                        <p className="founderName">House Founder: {isEmpty(founderName)}</p>
                    )}
            </div>
            {heirName ? (
                <div className="heir">
                    House heir: {' '}
                    <Link
                        className='heirName'
                        to={`/characters/${heirId}/${convertName(heirName)}`}
                    >
                        {heirName}
                    </Link>
                </div>
            ) : (
                    <p className="heirName"> House heir: Not Available </p>
                )
            }
            <div className="currentLord">
                Current Lord: {' '}
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
            </div>
        </div >
    )
}