import React from 'react'
import MainListItem from './MainListItem'
import { Loader } from '../loading/Loader'

function MainList(props) {
    const { data, loading } = props
    console.log(loading, data)
    return (
        <>
            {data['data']
                ? Object.keys(data.data).map((item, i) => (
                    <li key={i}><MainListItem {...props} item={item} /></li>
                ))
                :
                null
            }
        </>
    )
}

export default MainList