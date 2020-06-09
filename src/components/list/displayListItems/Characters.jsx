import React, { useEffect } from 'react'

export default function Characters(props) {
    console.log(props)
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
        <div className="characters">
            Characters
            <ul className="charactersList">
                <li className="aliases">{aliases}</li>
            </ul>
            <ul className="characterBooks">
            </ul>
            <ul>
                <li>{gender}</li>
                <li>{name}</li>
                <li>{born}</li>
                <li>{died}</li>
                <li>{mother}</li>
                <li>{father}</li>
                <li>{playedBy}</li>
            </ul>

        </div >
    )
}