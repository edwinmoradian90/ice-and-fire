import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { convertName } from '../../../utils/helpers'
import axios from 'axios'

export default function Houses(props) {
    const [heirName, setHeirName] = useState('')
    const [heirId, setHeirId] = useState('')
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

    const splitUrl = heir => {
        if (heir) {
            const newUrl = heir.split('/')
            console.log(newUrl[newUrl.length - 1])
            setHeirId(newUrl[newUrl.length - 1])
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
                    splitUrl(heir)
                })
                .catch(err => console.log(err))
        }
    }, [])

    return (
        <div className="houses">
            <h1 className="name">House name: {isEmpty(name)}</h1>
            <h3 className="region">House region: {isEmpty(region)}</h3>
            <p className="founder">House founder: {isEmpty(founder)}</p>
            {heirName ? (
                <div className="heir">
                    House heir: {' '}
                    <Link to={`/characters/${heirId}/${convertName(heirName)}`}>
                        {heirName}
                    </Link>
                </div>
            ) : (
                    <p className="heir"> House heir: Not Available </p>
                )
            }
            <p className="currentLord">Current Lord: {isEmpty(currentLord)}</p>
        </div >
    )
}