import React from 'react'
import MainListItem from './MainListItem'

function MainList(props) {
    const { data } = props.data
    return (
        <>
            {data
                ? Object.keys(data).map((item, i) => (
                    <li key={i}><MainListItem {...props} item={item} /></li>
                ))
                :
                'Loading...'
            }
        </>
    )
}

export default MainList