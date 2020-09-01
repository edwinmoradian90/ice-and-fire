import React from 'react'
import MainListItem from './MainListItem'

function MainList(props) {
    const { data } = props
    console.log(data)
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