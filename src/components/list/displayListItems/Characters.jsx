import React, { useEffect } from 'react'

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
        <div className="characters">
            Characters
            <ul className="charactersList">
                {aliases ? aliases.map((alias, i) => (
                    <li className={`alias ${alias}`}>
                        {alias}
                    </li>
                )) : null}
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