import React from 'react'

export default function Books(props) {
    console.log(props.items.data)
    const {
        name,
        authors,
        numberOfPages,
        publisher,
        country,
        released
    } = props.items.data || ''
    console.log(released)
    return (
        <div>
            <ul>
                <li>{name} by {authors}</li>
                <li className='numberOfPages'> {numberOfPages} pages</li>
                <li className='publisher'>Published by {publisher}</li>
                <li className="country">{country}</li>
                <li className="released">{released}</li>
            </ul>
        </div>
    )
}