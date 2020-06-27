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
                    <div key={i}><MainListItem {...props} item={item} /></div>
                ))
                :
                null
            }
        </>
    )
}

export default MainList